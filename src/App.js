import React, { useEffect, useRef } from "react";
import ThreeScene from "./components/ThreeScene";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import ClientsLogos from "./components/ClientsLogos";
import BusinessOperations from "./components/BusinessOperations";
import IndustryServices from "./components/IndustryServices";
import CountriesweDeal from "./components/CountriesweDeal";
import WhyWorkwithUs from "./components/WhyWorkwithUs";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

import "./App.css";
import "./sass/home.scss";

gsap.registerPlugin(ScrollTrigger);

function App() {
    const scrollContainerRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        // Initialize Locomotive Scroll
        scrollRef.current = new LocomotiveScroll({
            el: scrollContainerRef.current,
            smooth: true,
            multiplier: 1,
        });

        // Update after 1s delay
        setTimeout(() => {
            scrollRef.current.update();
        }, 1000);

        // GSAP ScrollTrigger Proxy
        ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
            scrollTop(value) {
                return arguments.length
                    ? scrollRef.current.scrollTo(value, 0, 0)
                    : scrollRef.current.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: scrollContainerRef.current.style.transform ? "transform" : "fixed",
        });

        scrollRef.current.on("scroll", ScrollTrigger.update);
        ScrollTrigger.refresh();

        // Resize Event Listener (Debounced)
        const handleResize = () => {
            setTimeout(() => {
                scrollRef.current.update();
                ScrollTrigger.refresh();
            }, 500); // Adjust timeout for better performance
        };

        window.addEventListener("resize", handleResize);

        return () => {
            scrollRef.current.destroy();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="App">
            <div className="scene-container">
                <ThreeScene />
            </div>
            <Header />
            <div className="scroll-container" ref={scrollContainerRef} data-scroll-container>
                <HeroBanner />
                <ClientsLogos />
                <BusinessOperations />
                <IndustryServices />
                <CountriesweDeal />
                <WhyWorkwithUs />
                <Testimonials />
                <ContactUs />
                <Footer />
            </div>
        </div>
    );
}

export default App;
