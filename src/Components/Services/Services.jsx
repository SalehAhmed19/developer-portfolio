import { GiWorld } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Accordant from "../Accordant/Accordant";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Web Design",
      content:
        "Web design is the process of creating visually appealing and user-friendly interfaces for websites. It involves a combination of graphic design, user experience design, and web development. A successful web design should engage users, provide a seamless experience, and effectively communicate the website's purpose and message.",
    },
    {
      title: "Web Development",
      content:
        "Web development involves the creation of websites and web applications using programming languages and web technologies such as HTML, CSS, and JavaScript. It encompasses both front-end development (client-side) and back-end development (server-side) and involves database management, server configuration, and application deployment. A successful web development project requires a combination of technical expertise, creativity, and problem-solving skills.",
    },
    {
      title: "Figma",
      content:
        "Figma is a cloud-based design tool used for creating user interfaces, prototypes, and design systems. It allows designers and teams to collaborate in real-time and provides a range of features for creating and sharing design assets. Figma has gained popularity among designers for its ease of use, versatility, and collaborative capabilities.",
    },
    {
      title: "Illustration",
      content:
        "Illustration is the art of creating visual representations of ideas, concepts, and stories through drawing, painting, or digital media. It is used in a variety of fields, including advertising, publishing, and entertainment. A successful illustration should effectively communicate a message or emotion and capture the viewer's attention.",
    },
  ];

  return (
    <div className="relative" id="service">
      <div className="h-screen w-96 rounded-full bg-[#A44E11] opacity-[90%] blur-3xl absolute md:right-[-200px] z-0"></div>
      {/*  */}
      <div className="bg-[#101010] p-5 md:p-10 rounded-2xl relative z-40">
        <SectionTitle title={"My Service"} />
        <div>
          {accordionData.map((item, index) => (
            <Accordant
              key={index} // Using index as key is generally fine for static lists without reordering
              title={item.title}
              content={item.content}
              index={index}
              activeIndex={activeIndex}
              onToggle={handleToggle}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-secondary px-6 flex gap-2 items-center">
            <GiWorld />
            Available to <span className="text-white">Worldwide</span>
          </p>

          <p className="flex items-center gap-2 text-xl cursor-pointer">
            Contact me <FiArrowUpRight />
          </p>
        </div>
      </div>
    </div>
  );
}
