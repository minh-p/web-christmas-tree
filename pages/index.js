// index.js
import css from "../styles/Home.module.css";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

import Floor from "../components/Floor.js";
import ChristmasTree from "../components/ChristmasTree.js";

function CameraController() {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
}

export default function Home() {
  const christmasTreeAttribution = "'2.5k Followers Christmas Special' (https://skfb.ly/orJBH) by Mateusz Woliński is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)."
  return (
    <div>
      <h1>This is Huy&rsquo;s Christmas Tree</h1>
      <div className={css.scene}>
        <Canvas
          shadows={true}
          className={css.canvas}
        >
          <CameraController/>
          <ambientLight color={"white"} intensity={0.3} />
          <pointLight color="yellow" intensity={2} position={[10, 10, 10]} />
          <Floor position={[0, -1, 0]}/>
          <ChristmasTree position={[0, -0.5, 0]} />
        </Canvas>
      </div>
      <footer>
        <p>Christmas Tree Model Credits (Except My Beautiful Wooden Floor): {christmasTreeAttribution}</p>
        <p>Author: Vu Huy Minh Pham</p>
        <p><a href="mailto:vhuyminp@gmail.com">vhuyminp@gmail.com</a></p>
      </footer> 
    </div>
  )
}
