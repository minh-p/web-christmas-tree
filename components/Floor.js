//components/Floor.jsx

import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useLoader } from "@react-three/fiber"

function Floor(props) {
  const colorMap = useLoader(TextureLoader, '/Textures/Floor_Wooden.jpg');
  return (
    <mesh {...props} recieveShadow={true}>
      <boxGeometry args={[2, 1, 2]} />
      <meshStandardMaterial map={colorMap}/>
    </mesh>
  );
}

export default Floor;
