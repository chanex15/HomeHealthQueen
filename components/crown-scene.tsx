'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, useTexture } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { Group } from 'three'
import { DoubleSide } from 'three'

/**
 * A premium spinning medallion that displays the event logo on both faces
 * with a polished gold rim — reads clearly as a 3D rotating logo.
 */
function LogoMedallion() {
  const group = useRef<Group>(null)
  const logo = useTexture('/logo.webp')

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.8
  })

  const radius = 1.25
  const thickness = 0.16

  return (
    <group ref={group} rotation={[0.12, 0, 0]}>
      {/* Slim gold medallion base (disc) behind the logo */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[radius, radius, thickness, 80]} />
        <meshStandardMaterial
          color="#caa24f"
          metalness={1}
          roughness={0.3}
          emissive="#5c4719"
          emissiveIntensity={0.18}
        />
      </mesh>

      {/* Raised gold rim around the edge */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.06, 24, 100]} />
        <meshStandardMaterial color="#f4e3b0" metalness={1} roughness={0.16} />
      </mesh>

      {/* Front logo — larger than the disc so it reads as the hero */}
      <mesh position={[0, 0, thickness / 2 + 0.011]}>
        <planeGeometry args={[radius * 2.1, radius * 2.1]} />
        <meshBasicMaterial
          map={logo}
          transparent
          alphaTest={0.04}
          side={DoubleSide}
          toneMapped={false}
        />
      </mesh>

      {/* Back logo (mirrored to read correctly from behind) */}
      <mesh
        position={[0, 0, -(thickness / 2 + 0.011)]}
        rotation={[0, Math.PI, 0]}
      >
        <planeGeometry args={[radius * 2.1, radius * 2.1]} />
        <meshBasicMaterial
          map={logo}
          transparent
          alphaTest={0.04}
          side={DoubleSide}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

export function CrownScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.85} />
        <spotLight
          position={[6, 8, 6]}
          intensity={2.6}
          color="#fff3d6"
          angle={0.6}
        />
        <pointLight position={[-6, -4, 2]} intensity={1.6} color="#d4af5a" />
        <pointLight position={[0, 0, 5]} intensity={1.2} color="#fff" />
        <Float speed={1.5} rotationIntensity={0.25} floatIntensity={1.1}>
          <LogoMedallion />
        </Float>
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  )
}
