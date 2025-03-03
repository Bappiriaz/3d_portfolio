import React  from 'react'
import { useGLTF } from '@react-three/drei'

export function Football(props) {
  const { nodes, materials } = useGLTF('models/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hedra2_Standardmaterial_0.geometry}
        material={materials.Standardmaterial}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/scene.gltf')