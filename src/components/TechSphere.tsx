import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useMousePosition } from '../hooks/useMousePosition'

// Se calcula una sola vez al cargar el módulo: Math.random() no puede ir dentro del render.
function createParticlePositions(count: number) {
  const pos = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = 2.0 + Math.random() * 2.0
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    pos[i * 3 + 2] = r * Math.cos(phi)
  }
  return pos
}

const PARTICLE_POSITIONS = createParticlePositions(600)

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const mouse = useMousePosition()
  const positions = PARTICLE_POSITIONS

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.015 + mouse.x * 0.12
    ref.current.rotation.x = mouse.y * 0.06
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color="#a5b4fc"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function GlowShell() {
  const groupRef = useRef<THREE.Group>(null)
  const shaderRef = useRef<THREE.ShaderMaterial>(null)
  const mouse = useMousePosition()
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.55, 4), [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = t * 0.06 + mouse.x * 0.2
    groupRef.current.rotation.x = Math.sin(t * 0.12) * 0.06 + mouse.y * 0.1
    groupRef.current.position.y = Math.sin(t * 0.35) * 0.04
    if (shaderRef.current) shaderRef.current.uniforms.uTime.value = t
  })

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.1} />
      </mesh>
      <mesh geometry={geometry}>
        <shaderMaterial
          ref={shaderRef}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={{
            uTime: { value: 0 },
            uColor: { value: new THREE.Color('#818cf8') },
          }}
          vertexShader={`
            varying vec3 vNormal;
            varying vec3 vPos;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vPos = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform float uTime;
            uniform vec3 uColor;
            varying vec3 vNormal;
            varying vec3 vPos;
            void main() {
              float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.8);
              float pulse = sin(uTime * 0.7 + length(vPos) * 1.8) * 0.5 + 0.5;
              gl_FragColor = vec4(uColor, fresnel * (0.12 + pulse * 0.08));
            }
          `}
        />
      </mesh>
    </group>
  )
}

function InnerCore() {
  const ref = useRef<THREE.Mesh>(null)
  const shaderRef = useRef<THREE.ShaderMaterial>(null)
  const mouse = useMousePosition()
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(0.8, 2), [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = -t * 0.1 + mouse.x * 0.08
    if (shaderRef.current) shaderRef.current.uniforms.uTime.value = t
  })

  return (
    <mesh ref={ref} geometry={geometry}>
      <shaderMaterial
        ref={shaderRef}
        transparent
        depthWrite={false}
        uniforms={{ uTime: { value: 0 } }}
        vertexShader={`
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec3 vNormal;
          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
            vec3 core = mix(vec3(0.2, 0.22, 0.85), vec3(0.55, 0.5, 1.0), fresnel);
            float pulse = sin(uTime * 1.0) * 0.12 + 0.88;
            gl_FragColor = vec4(core * pulse, fresnel * 0.4);
          }
        `}
      />
    </mesh>
  )
}

function ConnectionLines() {
  const ref = useRef<THREE.LineSegments>(null)
  const mouse = useMousePosition()
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.55, 2)
    return new THREE.WireframeGeometry(geo)
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.04 + mouse.x * 0.15
    ref.current.rotation.x = mouse.y * 0.08
  })

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#6366f1" transparent opacity={0.22} />
    </lineSegments>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.12} />
      <pointLight position={[4, 4, 4]} intensity={0.5} color="#818cf8" />
      <pointLight position={[-3, -2, 2]} intensity={0.25} color="#4338ca" />
      <InnerCore />
      <GlowShell />
      <ConnectionLines />
      <ParticleField />
    </>
  )
}

export function TechSphereCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

export function TechSphere() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="
          absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2
          lg:top-1/2 lg:left-[62%] lg:-translate-x-1/2
          w-[min(110vw,780px)] h-[min(110vw,780px)]
        "
      >
        <div
          className="absolute inset-[10%] rounded-full opacity-50 parallax-glow"
          style={{
            background:
              'radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(99,102,241,0.04) 45%, transparent 72%)',
          }}
        />
        <TechSphereCanvas />
      </div>
    </div>
  )
}
