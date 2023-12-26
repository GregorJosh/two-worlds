"use client";

import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import {
  Canvas,
  LightProps,
  MeshProps,
  useFrame,
  useThree,
} from "@react-three/fiber";
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

const Sphere = forwardRef((props: CustomMeshProps, ref: ForwardedRef<Mesh>) => {
  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
});

const Scene = () => {
  const { camera, scene } = useThree((state) => state);
  const blueSphereRef = useRef<Mesh>(null!);
  const redSphereRef = useRef<Mesh>(null!);

  const blueSphereRadius = 90;
  const redSphereRadius = 60;

  let blueSphereAngle = 0;
  let redSphereAngle = 80;

  /* useEffect(() => {
    scene.add(new CameraHelper(camera));
  }, []); */

  useFrame((state, delta) => {
    if (blueSphereAngle > 360) {
      blueSphereAngle = 0;
    }

    blueSphereRef.current.position.x =
      Math.cos(blueSphereAngle) * blueSphereRadius;
    blueSphereRef.current.position.z =
      -150 + Math.sin(blueSphereAngle) * blueSphereRadius;

    blueSphereAngle += delta * 0.2;

    if (redSphereAngle > 360) {
      redSphereAngle = 0;
    }

    redSphereRef.current.position.x =
      Math.cos(redSphereAngle) * redSphereRadius;
    redSphereRef.current.position.z =
      -150 + Math.sin(redSphereAngle) * redSphereRadius;

    redSphereAngle += delta * 2;
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
