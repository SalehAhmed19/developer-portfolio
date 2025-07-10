import SectionTitle from "../SectionTitle/SectionTitle";

export default function AboutMe() {
  return (
    <div className="grid grid-cols-4 items-start gap-5">
      <div>
        <SectionTitle title={"About Me"} />
      </div>
      <div className=" col-span-3">
        <h3 className="text-[48px]">
          <span className="text-secondary">Beyond the Pixels:</span> Stories
          from a <br /> MERN Stack Web Developer.
        </h3>

        <p className="text-secondary">
          As a web developer specializing in MERN Stack, I possess a keen eye
          for detail and a passion for creating visually stunning and highly
          functional user interfaces. With my strong proficiency in HTML, CSS,
          JavaScript, React, and Node.js, I am committed to delivering
          innovative solutions that exceed client expectations. I am always
          up-to-date with the latest trends and technologies in the industry to
          ensure that my work is always at the forefront of innovation.
        </p>
      </div>
    </div>
  );
}
