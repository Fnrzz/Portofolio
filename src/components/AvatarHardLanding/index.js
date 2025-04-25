"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const AvatarModel = ({ url }) => {
  const groupRef = useRef();
  const mixerRef = useRef();
  const [model, setModel] = useState(null);
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 4);
    camera.lookAt(0, 0, 0);
    const loader = new FBXLoader();
    loader.load(
      url,
      (fbx) => {
        const bbox = new THREE.Box3().setFromObject(fbx);
        const size = bbox.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = 3.5 / maxDim;

        fbx.scale.set(scaleFactor, scaleFactor, scaleFactor);
        fbx.position.set(0, -2.5, 0);
        fbx.rotation.set(0, 0, 0);
        setModel(fbx);

        if (fbx.animations.length > 0) {
          mixerRef.current = new THREE.AnimationMixer(fbx);
          const action = mixerRef.current.clipAction(fbx.animations[0]);
          action.setLoop(THREE.LoopOnce);
          action.clampWhenFinished = true;
          action.play();
        }
      },
      // Progress callback
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // Error callback
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    // Cleanup function
    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [url, camera]);

  // Update animation on every frame
  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return <group ref={groupRef}>{model && <primitive object={model} />}</group>;
};

export default function AvatarHardLanding() {
  return (
    <Canvas
      camera={{ fov: 90 }}
      style={{ height: "100%", width: "100%", margin: "0 auto" }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 5, 2]} />
      <Suspense fallback={null}>
        <AvatarModel url="/assets/HardLanding.fbx" />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}
