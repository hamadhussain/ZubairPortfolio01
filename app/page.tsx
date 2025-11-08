



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
const Home = () => {
  return (
    <div>
      <HomeSection/>
    </div>
  )
}

export default Home
