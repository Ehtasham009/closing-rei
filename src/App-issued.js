import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeScene from "./components/ThreeScene";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import "./App.css";
import "./sass/home.scss";
import BusinessOperations from "./components/IndustryServices";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const component = useRef();
  const slider = useRef();
  const horizontalContainer = useRef();
  const lastPanel = useRef(); // Ref for the last panel (green)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      gsap.to(slider.current, {
        x: () => `-${lastPanel.current.offsetLeft}px`, // Moves fully from left to right
        ease: "none",
        scrollTrigger: {
          trigger: horizontalContainer.current,
          start: "top top",
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=${lastPanel.current.offsetLeft + lastPanel.current.offsetWidth - window.innerWidth}`, // Stops when green panel is fully visible
          markers: true,
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={component}>
      <div className="scene-container">
        <ThreeScene />
      </div>
      <Header />
      <div className="firstContainer">
        <HeroBanner />
        <BusinessOperations />
      </div>

      <div ref={horizontalContainer} className="horizontal-items-container">
        <h1>Testing horizontal scrolling w/ three sections</h1>

        <div ref={slider} className="container__sections">
          <div className="panel red">start</div>
          <div className="panel red">ONE</div>
          <div className="panel blue">TWO</div>
          <div ref={lastPanel} className="panel green">THREE</div> {/* Last Panel */}
        </div>
      </div>

      <div className="lastContainer">Last Container</div>
    </div>
  );
}
