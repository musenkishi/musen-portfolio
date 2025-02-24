"use client"

import { cn } from "@/components/lib/utils"
import { animated, useTransition } from "@react-spring/three"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { FC, ReactNode, Suspense } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
  nodes: {
    dude: THREE.Mesh
    shadow: THREE.Mesh
  }
  materials: {
    DudeMaterial: THREE.MeshStandardMaterial
    ShadowMaterial: THREE.MeshStandardMaterial
  }
}

type VoxelContainerProps = {
  children: ReactNode
  hide: boolean
}

const VoxelContainer = ({ children, hide }: VoxelContainerProps) => {
  const containerClasses = cn(
    "h-72",
    "-mb-24",
    "md:h-96",
    "md:-mb-36",
    "lg:h-128",
    "lg:-mb-48"
  )
  return hide ? (
    <></>
  ) : (
    <div className={"-z-20 " + containerClasses}>{children}</div>
  )
}

type ModelProps = {
  hide: boolean
}

const Model = ({ hide }: ModelProps) => {
  const { nodes, materials } = useGLTF("/assets/dude.glb") as GLTFResult

  const transition = useTransition(!hide, {
    from: { scale: 0, opacity: 0 },
    enter: () => ({ scale: 1, opacity: 1 }),
    leave: { scale: 0, opacity: 0 },
    config: { mass: 1, tension: 1000, friction: 300 },
  })

  return transition(
    (props, item) =>
      item && (
        <animated.group {...props}>
          <mesh
            geometry={nodes.shadow.geometry}
            material={materials.ShadowMaterial}
            position={[-2.43, 0, -3.98]}
            scale={[5.73, 1, 5.73]}
          />
          <mesh
            geometry={nodes.dude.geometry}
            material={materials.DudeMaterial}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </animated.group>
      )
  )
}

useGLTF.preload("/assets/dude.glb")

const VoxelModel: FC<{ hide: boolean }> = ({ hide }) => {
  return (
    <VoxelContainer hide={hide}>
      <Canvas
        camera={{ position: [30, 20, 30], fov: 10 }}
        style={{
          width: "100%",
          height: "100%",
          position: "unset",
        }}
      >
        <ambientLight intensity={3.5} />
        <Suspense fallback={<></>}>
          <Model hide={hide} />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false}/>
      </Canvas>
    </VoxelContainer>
  )
}

export default VoxelModel
