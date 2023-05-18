'use client'
import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [x, setX] = useState(0);
  function moveX() {
    setX(120);
  }
  
  const [y, setY] = useState(0);
  function moveY() {
    setY(120);
  }

  const [rotate, setRotate] = useState(0);
  function moveRotate() {
    setRotate(120);
  }


  return (
    <>
    <motion.div 
    className="box"
    animate={{x,y,rotate }} />

    <button onClick={moveRotate}>ClickVo</button></>
    
  );
}
