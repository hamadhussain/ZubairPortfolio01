



// // "use client";
// // import React from "react";

// // export default function DNAAnimation() {
// //   const rotateDelay = 0.15;
// //   const total = 30;

// //   return (
// //     <div id="dna">
// //       {Array.from({ length: total }).map((_, i) => {
// //         const delay = (i + 1) * rotateDelay - 60;
// //         const style = {
// //           animationDelay: `${delay}s`,
// //         };
// //         return <div key={i} style={style}></div>;
// //       })}
// //     </div>
// //   );
// // }




import React from 'react'
import HomeSection from './pages/home/page'
import Image from 'next/image'
const Home = () => {
  return (
    <div>
     {/* <Image src="/zubairResume.png" alt="homepage" className=' h-screen w-1/2' width={1920} height={1080} /> */}
      <HomeSection/>
    </div>
  )
}

export default Home
