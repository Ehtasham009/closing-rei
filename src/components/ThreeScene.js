import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
    const modelRef = useRef();
    const { scene } = useGLTF("/images/models/image.glb");

    useEffect(() => {
        if (!modelRef.current) return;

        const updateCenter = () => {
            if (!modelRef.current) return;

            // Calculate the center dynamically
            const aspectRatio = window.innerWidth / window.innerHeight;
            const centerX = aspectRatio * 0; // Adjust as needed

            gsap.to(modelRef.current.position, {
                x: centerX,
                y: -1,
                z: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".section-two",
                    scroller: ".scroll-container",
                    start: "top center",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        };

        let ctx = gsap.context(() => {
            updateCenter(); // Run initially

            gsap.to(modelRef.current.scale, {
                x: 0.7, 
                y: 0.7, 
                z: 0.7, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".section-two",
                    scroller: ".scroll-container",
                    start: "top center",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            gsap.to(modelRef.current.rotation, {
                y: Math.PI * 4,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".scroll-container",
                    scroller: ".scroll-container",
                    start: "top center",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });

        // Listen for screen resize and update center position
        window.addEventListener("resize", updateCenter);

        return () => {
            ctx.revert();
            window.removeEventListener("resize", updateCenter);
        };
    }, []);

    return <primitive ref={modelRef} object={scene} scale={1.3} position={[10, -2.7, 0]} />;
};

const ThreeScene = () => {
    return (
        <Canvas camera={{ position: [-10, 2, 8], fov: 25, near: 1, far: 100 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[2, 2, 2]} />
            <Model />
            <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
        </Canvas>
    );
};

export default ThreeScene;
