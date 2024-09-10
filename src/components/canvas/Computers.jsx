import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={1.0} groundColor="black" />
      <pointLight intensity={4} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        intensity={1}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.70}
        position={isMobile ? [0, -3.7, -1.2] : [0, -4.1, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ResizeCanvas = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [camera, gl]);

  return null;
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="main-content">
      <nav className="navbar">
        {/* Navbar content here */}
      </nav>
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <ResizeCanvas />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
};

export default ComputersCanvas;
