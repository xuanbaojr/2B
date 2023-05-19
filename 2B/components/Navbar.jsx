'use client';



import { motion } from "framer-motion";

import styles from '../styles';
import { navVariants } from '../utils/motion';


const Navbar = () => (

  // Hieu ung chuyen dong -- framer motion
  
  <motion.nav
    variants={navVariants}  
    initial="hidden"
    whileInView="show"
    className="flex justify-between gap-12"
   
  >
    {/* bo cuc -- tailwinCss */}
        {/* Logo */}
    
    <img src="/search.svg" className=" pl-20" /> 

    <div className="pl-40">
       <img
      src="https://picsum.photos/200/50"
      className=""
    /></div>

    


    <div className="flex">
      <div className="pr-10 pt-3">
        <p className="font-bold" style={{
          color: (255,255,255,.75),
          letterSpacing: .5
        }}>FOLLOW US ON</p>
      </div>
      <div className="flex pr-10"> 
        <a href="youtube.com"><img src="/instagram.svg" className="pt-3 mr-2 w-[20px]" /> </a>
        <a href=".com"><img src="/spotify.svg" className="pt-3 mr-1 w-[20px]" /> </a>
        <a href="youtube.com"><img src="/facebook.svg" className="pt-3 mr-2 w-[20px]" /> </a>
        <a href="youtube.com"><img src="/twitter.svg" className="pt-3 mr-2 w-[20px]" /> </a>
        <a href="youtube.com"><img src="/youtube.svg" className="pt-3 mr-2 w-[20px]" /> </a>

      </div>
    </div>


  </motion.nav>

  
)

export default Navbar;
