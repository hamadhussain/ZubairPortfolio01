import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLogoBehance } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiGlobe } from "react-icons/fi";

const Resume = () => {
  return (
    <div className="px-6 sm:px-10 md:px-24 py-16 md:py-24 ">
      {/* Breadcrumb Section */}
      <div>
        <div className="flex flex-wrap items-center justify-start md:justify-start gap-3 md:gap-5 text-lg sm:text-xl md:text-2xl text--800">
          <span className="font-medium hover:text-indigo-600 transition-colors cursor-pointer">
            Home
          </span>
          <MdKeyboardDoubleArrowRight className="text-indigo-500 text-2xl sm:text-3xl" />
          <span className="font-semibold text--900">Contact</span>
        </div>

        {/* Heading Section */}
        <h2 className="mt-8 text- md:text-left text-2xl sm:text-3xl md:text-5xl font-bold text--900">
          Contact
        </h2>
      </div>

      <div className="  flex flex-wrap justify-between items-center mt-10  p-6 rounded-lg shadow-none md:shadow-2xl">
        <div className=" flex  items-center gap-6">
          <Image
            src="/zubair.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            Muhammad Zubair <br />
            <span className=" text-indigo-500 font-bold">UX/UI Designer</span>
          </div>
        </div>
<div className="flex items-end gap-4 mt-6 md:mt-0 justify-end">
          {/* Behance */}
          <Link
        href="https://www.behance.net/muhammadzubair177"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white transition-colors duration-200 group"
      >
        <span className="p-2 bg-[#1769FF] rounded-full group-hover:bg-[#0E4ED0] transition-colors duration-200">
          <IoLogoBehance size={18} />
        </span>
        <span className="font-medium">Behance</span>
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/muhammad-zubair-37aa19304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white transition-colors duration-200 group"
      >
        <span className="p-2 bg-[#0A66C2] rounded-full group-hover:bg-[#084a8e] transition-colors duration-200">
          <FaLinkedinIn size={18} />
        </span>
        <span className="font-medium">LinkedIn</span>
      </Link>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Resume;

const contactInfo = [
{
id: 1,
icon: <FiPhone className="w-6 h-6 text-white" />,
text: "+92-345-3132361",
bg: "bg-blue900",
},
{
id: 2,
icon: <FiMail className="w-6 h-6 text-white" />,
text: "bb3132361@gmail.com",
bg: "bg-indigo900",
},
{
id: 3,
icon: <FiMapPin className="w-6 h-6 text-white" />,
text: "House # L-163 Sector 11C1, North Karachi, Karachi",
bg: "bg-slate900",
},
{
id: 4,
icon: <FiGlobe className="w-6 h-6 text-white" />,
text: "https://zubairdesign.vercel.app/",
bg: "bg-cyan900",
},
];

 function ContactSection() {
return (
<section aria-labelledby="contact-heading" className="my-24 py-10">
<div className="p-2">
<h2
id="contact-heading"
className="text-2xl sm:text-3xl font-semibold mb-8 textcenter"
>
Contact Information
</h2>


<div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-start">
{contactInfo.map((info) => (
<div
key={info.id}
className={`flex items-center gap-3 px-6 py-4 rounded-lg ${info.bg}`}
>
<div className="p-2  shadow-2xl rounded-full flex items-center justify-center">
{info.icon}
</div>
<p className="text-white text-base sm:text-lg break-words">
{info.text}
</p>
</div>
))}
</div>
</div>
</section>
);
}

