import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Float, Environment, Stars } from '@react-three/drei';

function MovingShape() {
    const meshRef = useRef(null);

    useFrame((state, delta) => {
        const scrollY = window.scrollY;
        if (meshRef.current) {
            // Lerp for smooth inertia (dampens the movement)
            meshRef.current.rotation.x += (scrollY * 0.0005 - meshRef.current.rotation.x) * 5 * delta;
            meshRef.current.rotation.y += (scrollY * 0.001 - meshRef.current.rotation.y) * 5 * delta;
        }
    });

    return (
        <Float floatIntensity={2} speed={3} rotationIntensity={1}>
            {/* 
        This is a placeholder geometry. 
        If you have a 3D model (e.g. shoe.glb), you would use:
        <useGLTF url="/shoe.glb" /> instead of <TorusKnot ... />
      */}
            <TorusKnot ref={meshRef} args={[1, 0.3, 128, 32]} position={[2, 0, 0]}>
                {/* Emerald green metallic look to match the portfolio theme */}
                <meshStandardMaterial
                    color="#10b981"
                    roughness={0.1}
                    metalness={0.8}
                    emissive="#059669"
                    emissiveIntensity={0.2}
                />
            </TorusKnot>
        </Float>
    );
}

export default function ScrollBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-950 -z-10 pointer-events-none opacity-100">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                gl={{ alpha: true, antialias: false }} // Disable antialiasing for performance
                dpr={[1, 1.5]} // Limit pixel ratio to save GPU
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />

                <MovingShape />

                {/* Add some subtle stars in the deep background */}
                {/* Reduced count from 5000 to 1000 for performance */}
                <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

                {/* Environment for realistic reflections */}
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
