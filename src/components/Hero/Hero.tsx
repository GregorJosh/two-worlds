"use client";

import { useRef } from "react";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface BoxMeshProps extends MeshProps {
  color: string;
}

const Box = (props: BoxMeshProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
    }
  });

  return (
    <mesh {...props} ref={meshRef} scale={2}>
      <meshStandardMaterial color={props.color} />
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

export const Hero = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.08} />
      <pointLight position={[0, 3, 0]} intensity={10} />
      <Box position={[-2, 0, 1]} color="red" />
      <Box position={[2, 0, 0]} color="blue" />
    </Canvas>
  );
};
