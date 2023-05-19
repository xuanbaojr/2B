'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import FOG from 'vanta/dist/vanta.fog.min';

function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    if (!myRef.current) return;

    // Ensure scripts run only on client-side.
    if (typeof window !== "undefined") {
      const vantaEffect = FOG({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      }
    }
  }, [myRef]);

  return (
    <div ref={myRef} className="h-screen">
      {/* Rest of the content */}
    </div>
  );
}

export default MyComponent;
