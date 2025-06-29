import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[6, 9, 4]}
        intensity={100}
        angle={0.1}
        penumbra={0.2}
        color="white"
      />
      <spotLight
        position={[4, 5, 3]}
        intensity={60}
        angle={0.3}
        penumbra={0.5}
        color="#4cc9f0"
      />
      <spotLight
        position={[-1, 2, 2]}
        intensity={60}
        angle={0.4}
        penumbra={1}
        color="#9d4edd"
      />
      <primitive
        object={new THREE.RectAreaLight("#A256FF", 8, 3, 2)}
        position={[1, 2, 2]}
        intensity={20}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
};

export default HeroLights;
