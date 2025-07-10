import { Typewriter } from "react-simple-typewriter";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Introduction() {
  return (
    <div className="p-5 md:p-0" id="home">
      <SectionTitle title={"Introduction"} />
      <h1 style={{ lineHeight: "65px" }} className="text-[64px]">
        <span className="text-secondary">
          Building Effortless Online Journeys:
        </span>{" "}
        {/* A MERN Stack & React.js Developer's Showcase. */}
        <Typewriter
          words={[" A MERN Stack & React.js Developer's Showcase"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </h1>

      <p className="text-secondary mt-5">
        I transform complex ideas into elegant, user-friendly web applications{" "}
        <br />
        with a focus on seamless experiences
      </p>

      <div className="mt-20 flex flex-col items-center gap-5 md:flex-row">
        <a href="https://www.mongodb.com/" target="_blank" className="">
          <span className="bg-[#131313] px-5 py-2 w-full rounded-full cursor-pointer hover:bg-white hover:text-black duration-500 ease-in-out">
            MongoDB
          </span>
        </a>
        <a href="https://expressjs.com/" target="_blank">
          <span className="bg-[#131313] px-5 py-2 w-full rounded-full cursor-pointer hover:bg-white hover:text-black duration-500 ease-in-out">
            Express.Js
          </span>
        </a>
        <a href="https://react.dev/" target="_blank">
          <span className="bg-[#131313] px-5 py-2 w-full rounded-full cursor-pointer hover:bg-white hover:text-black duration-500 ease-in-out">
            React.Js
          </span>
        </a>
        <a href="https://nodejs.org/docs/latest/api/" target="_blank">
          <span className="bg-[#131313] px-5 py-2 w-full rounded-full cursor-pointer hover:bg-white hover:text-black duration-500 ease-in-out">
            Node.Js
          </span>
        </a>
      </div>
    </div>
  );
}
