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

        let ctx = gsap.context(() => {
            // **Move from Center-Right to Center**
            gsap.to(modelRef.current.position, {
                x: 0, // Move to the center
                y: 0, // Move up initially (adjust as needed)
                z: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".section-two",
                    croller: ".scroll-container",
                    start: "top center",
                    end: "bottom top",
                    scrub: 1,
                },
            });
            gsap.to(modelRef.current.scale, {
                x: 0.7, 
                y: 0.7, 
                z: 0.7, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".section-two",
                    croller: ".scroll-container",
                    start: "top center",
                    end: "bottom top",
                    scrub: 1,
                },
            });
            

            // **Y-axis rotation effect**
            // gsap.to(modelRef.current.rotation, {
            //     // y: Math.PI * 2, 
            //     ease: "power1.out",
            //     scrollTrigger: {
            //         trigger: ".section-two",
            //         start: "top center",
            //         end: "bottom top",
            //         scrub: 1,
            //     },
            // });

            // **Tilt effect for depth**
            // gsap.to(modelRef.current.rotation, {
            //     ease: "power1.out",
            //     scrollTrigger: {
            //         trigger: ".section-three",
            //         start: "top center",
            //         end: "bottom top",
            //         scrub: 1,
            //     },
            // });

            // **Cinematic Z-axis rotation**
            // const sections = [".section-four", ".section-five", ".section-six", ".section-seven"];
            // sections.forEach((section, index) => {
            //     gsap.to(modelRef.current.rotation, {
            //         z: Math.PI / (index + 4),
            //         ease: "power1.out",
            //         scrollTrigger: {
            //             trigger: section,
            //             start: "top center",
            //             end: "bottom top",
            //             scrub: 1,
            //         },
            //     });
            // });

            // **Final smooth rotation**
            gsap.to(modelRef.current.rotation, {
                y: Math.PI * 3,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".section-eight",
                    croller: ".scroll-container",
                    start: "top center",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return <primitive ref={modelRef} object={scene} scale={1.3} position={[10, -2, 0]} />; // **Center-Right Initial Position**
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
