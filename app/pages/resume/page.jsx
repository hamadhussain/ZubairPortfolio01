import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLogoBehance } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiGlobe } from "react-icons/fi";

const Resume = () => {
  return (
    <div className="px-6 sm:px-10 md:px-24 py-16 md:py-24 ">
      {/* Breadcrumb Section */}
      <div>
        <div className="flex flex-wrap items-center  md:justify-start gap-3 md:gap-5 text-lg sm:text-xl md:text-2xl text--800">
          <span className="font-medium hover:text-indigo-600 transition-colors cursor-pointer">
            Home
          </span>
          <MdKeyboardDoubleArrowRight className="text-indigo-500 text-2xl sm:text-3xl" />
          <span className="font-semibold text--900">Resume</span>
        </div>

        {/* Heading Section */}
        <h2 className="mt-8  md:text-left text-2xl sm:text-3xl md:text-5xl font-bold text--900">
          My Resume
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
      <ExperienceTimeline />
      <EducationCertSection />
    </div>
  );
};

export default Resume;

// const educationItems = [
//   {
//     id: 1,
//     institution: "University of Karachi",
//     credential: "B.Com",
//   },
//   {
//     id: 2,
//     institution: "Private",
//     credential: "Intermediate",
//   },
//   {
//     id: 3,
//     institution: "Kids Heaven School",
//     credential: "Matriculation",
//   },
// ];

// function EducationCertSection({ items = educationItems }) {
//   return (
//     <section
//       aria-labelledby="education-heading"
//       className=" my-24  border-t border-b border-opacity-30 py-10"
//     >
//       <div className="p-2">
//         <h2
//           id="education-heading"
//           className="text-2xl sm:text-3xl font-semibold mb-6 textcenter"
//         >
//           Education & Certification
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {items.map((item) => (
//             <article
//               key={item.id}
//               className="bg-gradient-to-br backdrop-blur-3xl from-blue-950 to-blue-900 text-white rounded-lg p-10 shadow-lg transform transition hover:-translate-y-1"
//               aria-label={`Education: ${item.institution}`}
//             >
//               <h3 className="text-lg sm:text-xl font-bold mb-2">
//                 {item.institution}
//               </h3>
//               <p className="text-sm sm:text-base opacity-90">
//                 {item.credential}
//               </p>

//               {/* optional small metadata row - remove if not needed */}
//               <div className="mt-4 flex items-center justify-between text-xs opacity-75">
//                 <span>{/* place for year or status if desired */}</span>
//                 <span className="ml-2">Certificate</span>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


const educationItems = [
  {
    id: 1,
    institution: "University of Karachi",
    credential: "B.Com",
  },
  {
    id: 2,
    institution: "Private",
    credential: "Intermediate",
  },
  {
    id: 3,
    institution: "Kids Heaven School",
    credential: "Matriculation",
  },
];

const skillItems = [
  "Book Cover Design",
  "Video Editing",
  "2D Animation",
  "Video Trailers",
  "Reels & Shorts Creation",
  "Social Media Post Design",
  "Project Management",
  "Team Management",
  "Client Handling",
];

const toolItems = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Canva",
  "Capcut",
  "Adobe Animate",
  "DaVinci Resolve",
  "Adobe XD",
  "Figma",
];

function EducationCertSection() {
  return (
    <>
      {/* Education Section */}
      <section
        aria-labelledby="education-heading"
        className="my-24 bordert borderb border-opacity-30 py-10"
      >
        <div className="p-2">
          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl font-semibold mb-6 "
          >
            Education & Certification
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationItems.map((item) => (
              <article
                key={item.id}
                className="bg-gradient-tobr from-indigo-950 to-indigo-950 text-white rounded-lg p-10 shadow-2xl transform transition hover:-translate-y-1"
                aria-label={`Education: ${item.institution}`}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {item.institution}
                </h3>
                <p className="text-sm sm:text-base opacity-90">
                  {item.credential}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs opacity-75">
                  <span></span>
                  <span className="ml-2">Certificate</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr />
      <section
        aria-labelledby="skills-heading"
        className="my-24 bordert borderb border-opacity-30 py-10"
      >
        <div className="p-2">
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl font-semibold mb-6 "
          >
            Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillItems.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-tobr from-indigo-950 to-indigo-950 text-white rounded-lg p-6 shadow-2xl text-center hover:-translate-y-1 transform transition"
              >
                <p className="text-base sm:text-lg font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<hr />      
<section
        aria-labelledby="tools-heading"
        className="my-24 bordert borderb border-opacity-30 py-10"
      >
        <div className="p-2">
          <h2
            id="tools-heading"
            className="text-2xl sm:text-3xl font-semibold mb-6 "
          >
            Tools
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {toolItems.map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-tobr from-indigo-950 to-indigo-950 text-white rounded-lg p-6 shadow-2xl text-center hover:-translate-y-1 transform transition"
              >
                <p className="text-base sm:text-lg font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


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

const experienceData = [
  {
    period: "2020 - 2021",
    company: "Freelance / Various Projects",
    role: "Head of UI/UX & Graphics Design",
    logoInitials: "UZ",
    logoBg: "bg-red-700",
    tasks: [
      "Led 4-member design team delivering 250+ high-quality projects.",
      "Managed animation strategies and improved client engagement.",
      "Oversaw all stages from concept to production.",
    ],
  },
  {
    period: "2021 - 2022",
    company: "Subway (Oman)",
    role: "Creative Designer",
    logoInitials: "SW",
    logoBg: "bg-yellow-600",
    tasks: [
      "Produced digital marketing content aligned with brand identity.",
      "Enhanced visual appeal for promotional campaigns.",
    ],
  },
  {
    period: "2022 - 2023",
    company: "Digitonics Labs",
    role: "Creative Designer (eBooks & Digital Media)",
    logoInitials: "DL",
    logoBg: "bg-green-700",
    tasks: [
      "Designed eBook covers and video trailers improving book visibility.",
      "Ensured cover design alignment with author vision and market trends.",
      "Used digital tools for high-quality, engaging visual media.",
    ],
  },
  {
    period: "2023 - Present",
    company: "Tech Cuber / Amigoz Tech / Al-Tafseer Solutions",
    role: "Senior UI/UX Designer",
    logoInitials: "TC",
    logoBg: "bg-blue-700",
    tasks: [
      "Managed a team of four designers delivering 150+ projects.",
      "Encouraged creativity and ensured high-quality UI/UX solutions.",
      "Maintained client communication and project alignment with goals.",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <div className=" px-6 sm:px-12 py-16 font-sans">
      <h2 className="text-4xl font-extrabold mb-12 text-white ">
        Experience
      </h2>

      <div className="space-y-12">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[150px_20px_1fr] gap-x-6 relative"
          >
            {/* Column 1: Dates */}
            <div className="col-start-1 text-right text-sm font-medium text-gray-400 pt-1">
              {item.period}
            </div>

            {/* Column 2: Timeline Line and Marker */}
            <div className="col-start-2 relative">
              {/* Vertical Line (hide only for last item) */}
              {index !== experienceData.length - 1 && (
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-700"></div>
              )}

              {/* Marker Dot */}
              <div
                className={`relative z-10 w-4 h-4 rounded-full ${item.logoBg} border-2 border-gray-900 -translate-x-1/2 left-1/2`}
              ></div>
            </div>

            {/* Column 3: Company and Description */}
            <div className="col-start-3 pb-8">
              <div className="flex items-start space-x-3 mb-4">
                {/* Logo Circle */}
                <div
                  className={`w-10 h-10 ${item.logoBg} rounded-lg flex items-center justify-center text-white text-lg font-bold p-1`}
                >
                  {item.logoInitials}
                </div>

                {/* Company Info */}
                <div>
                  <p className="text-xl font-bold text-white leading-snug">
                    {item.company}
                  </p>
                  <p className="text-sm font-medium text-gray-400 mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Tasks/Bullet Points */}
              <ul className="list-none space-y-2 mt-4">
                {item.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-1">•</span>
                    <p className="text-gray-300 leading-relaxed">{task}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};