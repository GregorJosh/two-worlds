"use client";

import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { Canvas, LightProps, MeshProps, useFrame } from "@react-three/fiber";
import { CameraHelper, Mesh } from "three";

import { Container } from "..";
import styles from "./Hero.module.scss";

interface CustomMeshProps extends MeshProps {
  color: string;
}

type SunProps = MeshProps & LightProps;

const Sun = (props: SunProps) => {
  return (
    <>
      <pointLight position={props?.position} intensity={props?.intensity} />
      <mesh {...props}>
        <sphereGeometry />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </>
  );
};

const SphereFR = (props: CustomMeshProps, ref: ForwardedRef<Mesh>) => {
  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

const Sphere = forwardRef(SphereFR);

const Scene = () => {
  const blueSphereRef = useRef<Mesh>(null!);
  const redSphereRef = useRef<Mesh>(null!);
  const blueSphereAngleRef = useRef<number>(0);
  const redSphereAngleRef = useRef<number>(80);

  const blueSphereRadius = 90;
  const redSphereRadius = 60;

  /* useEffect(() => {
    scene.add(new CameraHelper(camera));
  }, []); */

  useFrame((state, delta) => {
    if (blueSphereAngleRef.current > 360) {
      blueSphereAngleRef.current = 0;
    }

    blueSphereRef.current.position.x =
      Math.cos(blueSphereAngleRef.current) * blueSphereRadius;
    blueSphereRef.current.position.z =
      -150 + Math.sin(blueSphereAngleRef.current) * blueSphereRadius;

    blueSphereAngleRef.current += delta * 0.08;

    if (redSphereAngleRef.current > 360) {
      redSphereAngleRef.current = 0;
    }

    redSphereRef.current.position.x =
      Math.cos(redSphereAngleRef.current) * redSphereRadius;
    redSphereRef.current.position.z =
      -150 + Math.sin(redSphereAngleRef.current) * redSphereRadius;

    redSphereAngleRef.current += delta * 0.07;
  });

  return (
    <>
      {/* <axesHelper /> */}
      <ambientLight intensity={0.05} />
      <Sun position={[0, 0, -150]} scale={25} intensity={20000} />
      <Sphere ref={blueSphereRef} position-y={20} scale={5} color="blue" />
      <Sphere ref={redSphereRef} position-y={-10} scale={15} color="red" />
    </>
  );
};

export const Hero = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Canvas className={styles.canvas}>
          <Scene />
        </Canvas>
      </Container>
    </section>
  );
};
