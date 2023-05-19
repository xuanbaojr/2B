'use client'
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Insights, WhatsNew, World } from '../sections';

import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import {useRef, useEffect} from 'react';

import { motion } from "framer-motion";
import { navVariants_page } from '../utils/motion';

const Page = () => {
  const myRef = useRef(null);

  useEffect(() => {
    if (!myRef.current) return;
    
    if (typeof window !== "undefined") {
      const vantaEffect = FOG({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xfafafa,
        midtoneColor: 0x413b3b,
        lowlightColor: (1==2 ? 0xb4b4c3 : 0x2d2df0 ),
        baseColor: 0x0,
        speed: 0.60,
        zoom: 0.40
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      }
    }
  }, [myRef]);

  return (
    <motion.div ref={myRef}
    variants={navVariants_page}
    initial="hidden"
    whileInView="show"
    
      >
      <Navbar />
      {/* <Hero /> */}
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </motion.div>
  );
};

export default Page;
