"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

const HeadsetModel = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) => {
  const meshRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/models/headset.glb");

  // console.log(materials);

  useFrame(() => {
    if (meshRef.current) {
      // 마우스 위치에 따라 회전
      meshRef.current.rotation.y = mousePosition.x * 0.5;
      meshRef.current.rotation.x = mousePosition.y * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} />
    </group>
  );
};

const Headset3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // 마우스 위치를 -1에서 1 사이의 값으로 정규화
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-[500px]">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 5, 5]} intensity={2.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[0, 5, 10]}
          angle={0.3}
          penumbra={0.5}
          intensity={2}
          castShadow
        />
        <HeadsetModel mousePosition={mousePosition} />
        <OrbitControls enableZoom={false} enablePan={false} />
        {/* HDR 환경 조명 */}
        <Environment preset="city" />{" "}
        {/* 또는 'sunset', 'night', 'warehouse' 등 */}
      </Canvas>
    </div>
  );
};

export default Headset3D;
