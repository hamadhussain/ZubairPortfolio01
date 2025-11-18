
// // "use client";
// // import { useState, useEffect } from "react";
// // import { useInView } from "react-intersection-observer";
// // import Link from "next/link";
// // import { BsEye } from "react-icons/bs";
// // import Image from "next/image";
// // import { MdKeyboardDoubleArrowRight } from "react-icons/md";


// // const Portfolio = () => {
// //   return (
// //     <div className="px-6 sm:px-10 md:px-24 py-16 md:py-24">
      
// //       {/* Breadcrumb Section */}
// //       <div className="flex flex-wrap items-center justify-start md:justify-start gap-3 md:gap-5 text-lg sm:text-xl md:text-2xl text--800">
// //         <span className="font-medium hover:text-blue-600 transition-colors cursor-pointer">
// //           Home
// //         </span>
// //         <MdKeyboardDoubleArrowRight className="text-indigo-600 text-2xl sm:text-3xl" />
// //         <span className="font-semibold text--900">Portfolio</span>
// //       </div>

// //       {/* Heading Section */}
// //       <h2 className="mt-8  md:text-left text-2xl sm:text-3xl md:text-5xl font-bold text--900">
// //         My Portfolio
// //       </h2>
// //       <Home />
// //     </div>
// //   );
// // };

// // export default Portfolio;

// // const FigmaEmbed = ({ url, index }) => {
// //   const [loaded, setLoaded] = useState(false);
// //   const [filePath, setFilePath] = useState(null);

// //   const extensions = ["png", "jpg", "jpeg", "webp", "pdf"];

// //   useEffect(() => {
// //     const tryExtensions = async () => {
// //       for (let ext of extensions) {
// //         const path = `/jpg/img${index + 1}.${ext}`;
// //         try {
// //           const res = await fetch(path, { method: "HEAD" });
// //           if (res.ok) {
// //             setFilePath(path);
// //             return;
// //           }
// //         } catch {}
// //       }
// //     };
// //     tryExtensions();
// //   }, [index]);

// //   if (!filePath) {
// //     return (
// //       <div className="min-h-[300px] bg-gray-200 flex items-center justify-center">
// //         Loading...
// //       </div>
// //     );
// //   }

// //   const isPDF = filePath.endsWith(".pdf");

// //   return (
// //     <div className="group bg-white shadow-lg rounded-lg overflow-hidden relative min-h-[300px] flex flex-col">
// //       {!loaded && (
// //         <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
// //           <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-800"></div>
// //         </div>
// //       )}

// //       {!isPDF ? (
// //         <Image
// //           src={filePath}
// //           width={1000}
// //           height={500}
// //           onLoadingComplete={() => setLoaded(true)}
// //           className="w-full h-full object-cover"
// //           alt="Preview"
// //         />
// //       ) : (
// //         <iframe
// //           src={filePath}
// //           className="w-full h-full"
// //           onLoad={() => setLoaded(true)}
// //         />
// //       )}

// //       <Link
// //         href={url}
// //         target="_blank"
// //         className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
// //       >
// //         <BsEye className="text-white text-5xl transform scale-75 group-hover:scale-100 transition-transform duration-500" />
// //       </Link>
// //     </div>
// //   );
// // };

// // // const FigmaEmbed = ({ url, index }) => {
// // //   const [loaded, setLoaded] = useState(false);
// // //   const { ref, inView } = useInView({
// // //     triggerOnce: true,
// // //     threshold: 0.2,
// // //   });

// // //   useEffect(() => {
// // //     // Image load handling can be added if needed
// // //     const image = document.getElementById(`figma-image-${index}`);
// // //     if (image) {
// // //       image.onload = () => setLoaded(true);
// // //     }
// // //   }, [index]);

// // //   return (
// // //     <div
// // //       ref={ref}
// // //       className="group bg-white shadow-lg rounded-lg overflow-hidden relative min-h-[300px] flex flex-col"
// // //     >
// // //       {/* Loader */}
// // //       {!loaded && (
// // //         <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
// // //           <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-800"></div>
// // //         </div>
// // //       )}

// // //       {/* Image Embed */}
// // //       {inView && (
// // //         <Image
// // //           id={`figma-image-${index}`}
// // //           src={`/Images/img${index+1}.png`} // Update to use the appropriate image source
// // //           width={1000} // You can adjust the width and height as needed
// // //           height={500}
// // //           alt={`Figma design ${index}`}
// // //           onLoadingComplete={() => setLoaded(true)} // Set loaded once the image is fully loaded
// // //           className="w-full h-full object-cover"
// // //         />
// // //       )}

// // //       {/* Hover Overlay with Eye Icon */}
// // //       <Link
// // //         href={url}
// // //         target="_blank"
// // //         className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
// // //       >
// // //         <BsEye className="text-white text-5xl transform scale-75 group-hover:scale-100 transition-transform duration-500" />
// // //       </Link>
// // //     </div>
// // //   );
// // // };
// //  function Home() {
// // const figmaLinks = [
// //   "https://www.figma.com/proto/h1SBl6SIKZ4h6eZq2eCkEj/F-sti?node-id=64-331&t=OuWN5JUgDvxS94qa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
// //   "https://www.figma.com/design/ra1T5w2aWVl21cP8s7tbNm/Gumbomix?m=auto&fuid=1297552925016585356",
// //   "https://www.figma.com/proto/zRFRTyLtOp8GyeslEw2mLS/NEA-Energeia-Homepage?node-id=0%3A1&fuid=1297552925016585356",
// //   "https://www.figma.com/proto/0w5euCaJmOGiwXOJL4NfXO/Bulk-Flexible?node-id=0%3A1&fuid=1297552925016585356",
// //   "https://www.figma.com/proto/pSkEEqM4BAu3hO4ZWfaVKY/Untitled?page-id=0%3A1&node-id=110-3&viewport=713%2C223%2C0.12&t=nAodnUj9Kf6KYQd3-1&scaling=min-zoom&content-scaling=fixed",
// //   "https://www.figma.com/design/vYu4Jj6gnq35YMg7OGEdIs/UI-UX-Portfolio-2--Copy-?node-id=42-595&t=RXkBxYXlF24su2fb-1",
// //   "https://www.figma.com/design/064QMnzdsaK5nj52SfuohS/Untitled?node-id=1-372&t=4xnf2CG5beae5pIk-1",
// //   "https://www.figma.com/proto/064QMnzdsaK5nj52SfuohS/Untitled?node-id=1-224&t=4xnf2CG5beae5pIk-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A372",
// //   "https://www.figma.com/proto/064QMnzdsaK5nj52SfuohS/Untitled?node-id=1-463&t=IdyXzfajyQrRMPyF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A372",
// //   "https://www.figma.com/proto/064QMnzdsaK5nj52SfuohS/Untitled?node-id=0-1&p=f&t=4xnf2CG5beae5pIk-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A372",


// //   "https://www.figma.com/proto/jothSNzj79rtqHbY6eBhzy/Untitled?node-id=1-2&t=wDdzCPaKOtpgQFCS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
// //   "https://www.figma.com/proto/H0UZUaVUoweTsdNT6hb6eQ/company-website?node-id=695-706&t=g7R10P4SrcMMqW82-1&scaling=min-zoom&content-scaling=fixed&page-id=270%3A146",
// //   "https://www.figma.com/proto/H0UZUaVUoweTsdNT6hb6eQ/company-website?node-id=695-706&t=szHnSfPidELpjLoi-1&scaling=min-zoom&content-scaling=fixed&page-id=270%3A146&starting-point-node-id=804%3A1236",
// //   "https://www.figma.com/proto/pycTV4DNcq9276bUxCdDUe/Nailzify?node-id=57-1305&t=xApBFzo7QorwI8la-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=57%3A1305&show-proto-sidebar=1",
// //   "https://www.figma.com/proto/064QMnzdsaK5nj52SfuohS/Untitled?node-id=1-224&t=3zIAvaADB3jvcGRA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A372&show-proto-sidebar=1",
// //   "https://www.figma.com/proto/064QMnzdsaK5nj52SfuohS/Untitled?node-id=1-404&t=hM1hoScKrEefUZ9Z-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A372&show-proto-sidebar=1",
// //   "https://www.figma.com/proto/064QMnzdsaK5nj52SfuohS/Untitled?node-id=240-703&t=bx2uYbytDvLtYMHY-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=63%3A218&show-proto-sidebar=1",
// //   "https://www.figma.com/proto/xVgjsZdTbO1Cm9kyiDmEMR/tax?node-id=1-2&t=tWp59UYAUWQ6EEMS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
// //   "https://www.figma.com/proto/svZS90M6NLUje7bXByG1hh/Bootanical---Dev--Copy-?node-id=0-1095&t=VvilyWpSoUuOmwAz-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
// //   "https://www.figma.com/proto/y7RS08pdfXAM4pIaeiFXcG/Tony-Tech--Copy-?node-id=685-3730&t=Xn1TG9GoJOEBIh0G-1&scaling=min-zoom&content-scaling=fixed&page-id=1669%3A162202&starting-point-node-id=685%3A3730",



// //   "https://www.figma.com/proto/QPa6URJki4Iu1VJzC5RxMd/Maxima--Copy-?node-id=4368-321106&t=bBuBqvmKxXIzO8jb-1&scaling=min-zoom&content-scaling=fixed&page-id=1669%3A162202&starting-point-node-id=4368%3A321106",
// //   "https://www.figma.com/proto/F6sCAiH0GIf4jtAAhCjseh/mobile-app?node-id=1-1777&t=sXpuufYNmtVXzy1J-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1795",
// //   "https://www.figma.com/proto/B3v6tRlsP4YgnsU5J1RGlq/SFI---South-Florida-Institute?node-id=2-5&starting-point-node-id=2%3A5&scaling=scale-down-width&content-scaling=fixed&t=zphVmSInGgVjPd64-1",
// //   "https://www.figma.com/proto/UvzVFNHX3MFuiW2v56th0l/Untitled?node-id=1-2&t=OJSUV3b78JWJYlZI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
// //   "https://www.figma.com/proto/UvzVFNHX3MFuiW2v56th0l/REWESTERN?node-id=1-2&t=Wl5dLhxtDmFqP2Lh-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
// //   // "https://www.figma.com/proto/UvzVFNHX3MFuiW2v56th0l/REWESTERN?node-id=1-2&t=Wl5dLhxtDmFqP2Lh-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
// //   "https://www.figma.com/proto/9LuQStCqGxrLn2Le3ZESGy/Scoop-Troop?node-id=1-2&t=f4BapXninSBbsiHE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
// //   "https://www.figma.com/proto/9LuQStCqGxrLn2Le3ZESGy/Scoop-Troop?node-id=70-182&t=7mj1O5PMeN3Yepg9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
// //   "https://www.figma.com/proto/a0TMgFQzTSvXbd2BjBuZnH/Untitled?node-id=2-13&t=vcCtQ5NYxXms4YWF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=78%3A307&show-proto-sidebar=1",
// //   "https://www.figma.com/proto/1v5ct7hydvazlTAbt0MuKz/Untitled?node-id=1-2&t=iG0Lt5yGyLBur6El-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",


// //   "https://www.figma.com/proto/QfBKU7P9g76DrlEvKrg1bd/Probox-V3?node-id=1-1820&t=C35qu7M6i5Ij8JgT-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1168%3A5011",
// //   "https://www.figma.com/proto/1v5ct7hydvazlTAbt0MuKz/boat?node-id=1-2&t=tLvTzyd1PCFJzUCP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
// //   "https://www.figma.com/proto/AeBb1UxgqLU4cIuKMHIaES/Untitled?node-id=1-2&t=OdrhcpH18Okl5CW9-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
// //   "https://www.figma.com/proto/AeBb1UxgqLU4cIuKMHIaES/Untitled?node-id=1-2&t=EbYxKAhoLM1Qrw5D-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
// //   "https://www.figma.com/proto/1v5ct7hydvazlTAbt0MuKz/boat?node-id=1-2&t=1HDG1mv7MRxpk3yK-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
// //   "https://www.figma.com/proto/I0OzSS7VxuvJ0vlKMl0q9E/Untitled?node-id=1-2&t=m65gPPq5Wdj4Aj7t-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
// //   "https://www.figma.com/proto/CbxRMZTgRYy04MYglWhZ11/Untitled?node-id=1-2&t=ZNdK3iM2Z4rfvvL7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
// //   "https://xd.adobe.com/view/814613ae-cc79-4cee-8477-17d85f90e8f1-d415/screen/b9564860-f08d-4852-8a89-0583440c4f11/",
// //   "https://www.figma.com/proto/1v5ct7hydvazlTAbt0MuKz/boat?node-id=1-2&t=1HDG1mv7MRxpk3yK-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
// // ];

// // const figmaLinksWithIndex = figmaLinks.map((link, index) => ({
// //   src: link,    // 'src' for the link
// //   index: index + 1  // 'index' starting from 1
// // }));

// // console.log(figmaLinksWithIndex);

// //   return (
// //     <div className="min-h-screen ">
// //       <section id="showcase" className="py-16 px-4 md:px-8">
        
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {figmaLinks.map((url, index) => (
// //             <FigmaEmbed key={index} url={url} index={index} />
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
























// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// const Portfolio = () => {
//   return (
//     <div className="px-6 sm:px-10 md:px-24 py-16 md:py-24">

//       <div className="flex flex-wrap items-center justify-start md:justify-start gap-3 md:gap-5 text-lg sm:text-xl md:text-2xl text--800">
//         <span className="font-medium hover:text-blue-600 transition-colors cursor-pointer">
//           Home
//         </span>
//         <span className="font-semibold text--900">Portfolio</span>
//       </div>

//       <div className="mt-8  flex flex-wrap justify-between items-center ">
//         <h1 className="md:text-left text-2xl sm:text-3xl md:text-5xl font-bold text--900">My Portfolio</h1>
//         <div className="  space-x-5">
//           <button  className="button-89 m-1">Design mockup</button><button className="button-89 m-1">JPG mockup</button>
//         </div>
//       </div>

//       <Home />
//     </div>
//   );
// };

// export default Portfolio;

// const FigmaEmbed = ({ index }) => {
//   const [loaded, setLoaded] = useState(false);
//   const [filePath, setFilePath] = useState(null);

//   const extensions = ["jpg", "png", "jpeg", "webp", "pdf"];

//   useEffect(() => {
//     const tryExtensions = async () => {
//       for (let ext of extensions) {
//         const path = `/jpg/img${index}.${ext}`;

//         try {
//           const res = await fetch(path, { method: "HEAD" });
//           if (res.ok) {
//             setFilePath(path);
//             return;
//           }
//         } catch {}
//       }
//     };
//     tryExtensions();
//   }, [index]);

//   if (!filePath) {
//     return (
//       <div className="min-h-[300px] bg-gray-200 flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   const isPDF = filePath.endsWith(".pdf");

//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden relative min-h-[300px] flex flex-col">

//       {!loaded && (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
//           <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-800"></div>
//         </div>
//       )}

//       {!isPDF ? (
//         <Image
//           src={filePath}
//           width={1000}
//           height={500}
//           onLoadingComplete={() => setLoaded(true)}
//           className="w-full h-full object-cover"
//           alt="Preview"
//         />
//       ) : (
//         <iframe
//           src={filePath}
//           className="w-full h-full"
//           onLoad={() => setLoaded(true)}
//         />
//       )}
//     </div>
//   );
// };

// function Home() {

//   const imageIndexes = Array.from({ length: 131 }, (_, i) => i + 1);

//   return (
//     <div className="min-h-screen">
//       <section id="showcase" className="py-16 px-4 md:px-8">

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//           {imageIndexes.map((index) => (
//             <FigmaEmbed key={index} index={index} />
//           ))}

//         </div>

//       </section>
//     </div>
//   );
// }



























"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Portfolio = () => {
  const [activeFolder, setActiveFolder] = useState("jpg"); // default

  // Convert folder name to readable title
  const getFolderTitle = () => {
    if (activeFolder === "jpg") return "JPG Mockup";
    if (activeFolder === "design") return "Design Mockup";
    return "";
  };

  return (
    <div className="px-6 sm:px-10 md:px-24 py-16 md:py-24">

      <div className="flex flex-wrap items-center justify-start md:justify-start gap-3 md:gap-5 text-lg sm:text-xl md:text-2xl text--800">
        <span className="font-medium hover:text-blue-600 transition-colors cursor-pointer">
          Home
        </span>
        <span className="font-semibold text--900">Portfolio</span>
      </div>

      <div className="mt-8 flex flex-wrap justify-between items-center">
        <h1 className="md:text-left text-2xl sm:text-3xl md:text-5xl font-bold text--900">
          My Portfolio 
          <span className="text-blue-600 text-2xl md:text-4xl ml-3">
            ({getFolderTitle()})
          </span>
        </h1>

        <div className="space-x-5">
          <button
            className={`button-89 m-1 ${activeFolder === "design" ? "bg-blue-500 text-white" : ""}`}
            onClick={() => setActiveFolder("design")}
          >
            Design Mockup
          </button>

          <button
            className={`button-89 m-1 ${activeFolder === "jpg" ? "bg-blue-500 text-white" : ""}`}
            onClick={() => setActiveFolder("jpg")}
          >
            JPG Mockup
          </button>
        </div>
      </div>

      <Home folder={activeFolder} />
    </div>
  );
};

export default Portfolio;



// ------------------------
// IMAGE COMPONENT
// ------------------------
const FigmaEmbed = ({ index, folder }) => {
  const [loaded, setLoaded] = useState(false);
  const [filePath, setFilePath] = useState(null);

  const extensions = ["jpg", "png", "jpeg", "webp", "pdf"];

  useEffect(() => {
    const tryExtensions = async () => {
      for (let ext of extensions) {
        const path = `/${folder}/img${index}.${ext}`;

        try {
          const res = await fetch(path, { method: "HEAD" });
          if (res.ok) {
            setFilePath(path);
            return;
          }
        } catch {}
      }
      setFilePath(null); // no file found
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoaded(false);
    tryExtensions();
  }, [index, folder]);

  if (!filePath) {
    return (
      <div className="min-h-[300px] bg-gray-200 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const isPDF = filePath.endsWith(".pdf");

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative min-h-[300px] flex flex-col">

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-800"></div>
        </div>
      )}

      {!isPDF ? (
        <Image
          src={filePath}
          width={1000}
          height={500}
          onLoadingComplete={() => setLoaded(true)}
          className="w-full h-full object-cover"
          alt="Preview"
        />
      ) : (
        <iframe
          src={filePath}
          className="w-full h-full"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};


// ------------------------
// HOME → LOAD IMAGES
// ------------------------
function Home({ folder }) {
  const imageIndexes = Array.from({ length: 131 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen">
      <section id="showcase" className="py-16 px-4 md:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {imageIndexes.map((index) => (
            <FigmaEmbed key={index} index={index} folder={folder} />
          ))}

        </div>
      </section>
    </div>
  );
}
