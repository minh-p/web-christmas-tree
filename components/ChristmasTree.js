import React, { Suspense, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function ChristmasTree({position}) {
  const gltf = useLoader(GLTFLoader, '/Models/ChristmasTree/scene.gltf')
  console.log(gltf.nodes);
  return (
    <Suspense fallback={null}>
      <primitive position={position} object={gltf.scene} />
    </Suspense>
  )
}
