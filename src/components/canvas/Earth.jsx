import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Earth Component
const Earth = () => {
  const { scene } = useGLTF('./planet/scene.gltf'); // Destructure directly
  
  return (
    <primitive
      object={scene}
      scale={2.5}
      position={[0, 0, 0]} // Default to origin if not specified
      rotation={[0, 0, 0]} // Default to no rotation if not specified
    />
  );
};

// EarthCanvas Component
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all /> {/* Ensure this is included to preload all assets */}
    </Canvas>
  );
};

export default EarthCanvas;
