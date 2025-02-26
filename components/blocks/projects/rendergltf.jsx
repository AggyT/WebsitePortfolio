import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from "@react-three/fiber";


export function RenderGLTF({ gltfPath, cameraSpecs, zoom }) {
    const Model = ({ url }) => {
        const { scene } = useGLTF(url);

        useEffect(() => {
            scene.traverse(obj => {
              if (obj.isMesh) {
                obj.geometry.computeBoundingBox();
              }
            });
            const box = new THREE.Box3().setFromObject(scene);
            const center = box.getCenter(new THREE.Vector3());
            scene.position.x -= center.x;
            scene.position.y -= center.y;
            scene.position.z -= center.z;
          }, [scene]);
        
        useFrame(() => {
            scene.rotation.y += 0.002; // Adjust for desired speed
        });

        return <primitive object={scene} />;
    };

    return (

        //cameraSpecs.position = [0,5,10], cameraSpecs.fov = 2

        <Canvas camera={{ position: cameraSpecs.position, fov: cameraSpecs.fov }}>
            <ambientLight intensity={0.3} />

            <hemisphereLight skyColor={"white"} groundColor={"gray"} intensity={0.5} />

            <directionalLight
                intensity={1}
                position={[5, 10, 5]}
                castShadow
            />

            <Model url={gltfPath}/>
            <OrbitControls minDistance={zoom.zMin} maxDistance={zoom.zMax} />
        </Canvas>
    );

}
