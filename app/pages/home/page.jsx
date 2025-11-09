import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowRedo } from "react-icons/io5";
import { VscStarFull } from "react-icons/vsc";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between text-white  px-4 md:px-10">
      
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center space-y-4 py-24 md:py-32">
        <p className="text-lg md:text-2xl font-medium px-4 py-2 border border-gray-700 rounded-full">
          Hello!
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
          I&apos;m <span className="text-blue-600">Zubair</span>
        </h1>

        <p className="text-2xl sm:text-4xl md:text-6xl font-light text-gray-400">
          UX/UI Designer
        </p>

        <Link href="/pages/contact">
          <button className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all">
            Hire Me <IoArrowRedo className="text-lg" />
          </button>
        </Link>
      </section>

      {/* Info Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 w-full py-10 md:py-16 border-t border-gray-800">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-2/3">
          <Image
            src="/comma.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="text-gray-400 max-w-md">
            I’m passionate about creating intuitive, engaging, and visually appealing designs. 
            My focus is on blending usability and creativity to deliver smooth user experiences 
            that stand out in every detail.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-2 md:w-1/3">
          <div className="flex gap-1 justify-center md:justify-end">
            {[...Array(5)].map((_, i) => (
              <VscStarFull key={i} className="text-yellow-400 text-2xl md:text-3xl" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-semibold mt-2">5+ Years</p>
          <p className="text-lg text-gray-400">Experience</p>
        </div>
      </section>
    </div>
  );
};

export default Home;


// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { IoArrowRedo } from "react-icons/io5";
// import { VscStarFull } from "react-icons/vsc";

// const Home = () => {
//   return (
//     <div className="flex flex-col  h-full items-center justify-center text-white">
      
//       {/* Hero Section */}
//       <div className="text-center flex absolute bottom-1/2 top-1/2 justify-center items-center flex-col space-y-3">
//         <p className="text-2xl text--600 px-3 rounded-full w-fit py-2 border border-gray-700">Hello!</p>
//         <h1 className="text-4xl md:text-8xl font-bold text--900">
//           I&apos;m <span className="text-blue-600">Zubair</span>
//         </h1>
//         <p className="text-8xl text--700">UX/UI Designer</p>

// <Link href="/pages/contact">
//         <button className="mt-4 inline-flex items-center cursor-pointer gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
//           Hire Me <IoArrowRedo className="text-lg" />
//         </button></Link>
//       </div>

//       {/* Info Section */}
//       <div className="mt7 flex flex-col px-14 md:px-24 py-24 md:flex-row items-center absolute bottom-10 md:items-start justify-between gap-6 md:gap-16 w-full  ">
        
//         {/* Left Side */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
//           <Image
//             src="/comma.png"
//             alt="Logo"
//             width={50}
//             height={50}
//             className="rounded-full"
//           />
//           <p className="text--600 max-w-sm">
//             I’m passionate about creating intuitive, engaging, and visually appealing designs. 
//             My focus is on blending usability and creativity to deliver smooth user experiences 
//             that stand out in every detail.
//           </p>
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-col items-end justify-center  rounded-xl p-6 w-full md:w-1/3 ">
//         <div className=" flex">
//                     <VscStarFull className="text-yellow-400 text-3xl" />
//           <VscStarFull className="text-yellow-400 text-3xl" />
//           <VscStarFull className="text-yellow-400 text-3xl" />
//           <VscStarFull className="text-yellow-400 text-3xl" />
//           <VscStarFull className="text-yellow-400 text-3xl" />

//         </div>
//           {/* <VscStarFull className="text-yellow-400 text-3xl" /> */}
//           <p className="text-3xl font-semibold text--800 mt-2">5+ Years</p>
//           <p className="text-lg">Experience</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
