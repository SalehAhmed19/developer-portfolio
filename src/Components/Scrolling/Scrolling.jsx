import react from "../../assets/images/react.png";
import node from "../../assets/images/node.webp";
import mongo from "../../assets/images/mongo.webp";
import express from "../../assets/images/express.png";
import tailwind from "../../assets/images/tailwind.png";
import firebase from "../../assets/images/firebase.png";
import reactRouter from "../../assets/images/react-router.png";
import vite from "../../assets/images/vite.png";
import redux from "../../assets/images/redux-icon.webp";
import next from "../../assets/images/next.png";
import vercel from "../../assets/images/vercel.png";
import github from "../../assets/images/github.png";
import npm from "../../assets/images/npm.png";
import Marquee from "react-fast-marquee";

export default function Scrolling() {
  const technologies = [
    { img: react, title: "React.Js" },
    { img: node, title: "Node.Js" },
    { img: mongo, title: "MongoDB" },
    { img: express, title: "Express.Js" },
    { img: tailwind, title: "TailwindCSS" },
    { img: firebase, title: "Firebase" },
    { img: reactRouter, title: "React Router DOM" },
    { img: vite, title: "Vite" },
    { img: redux, title: "Redux Toolkit" },
    { img: next, title: "Next.Js" },
    { img: vercel, title: "Vercel" },
    { img: github, title: "GitHub" },
    { img: npm, title: "Npm" },
  ];
  return (
    <div className="-rotate-5 flex flex-col gap-5">
      <Marquee direction="right">
        <div className="flex items-center gap-5">
          {technologies.map((tech, idx) => (
            // <img className="w-8" key={idx} src={tech} alt="" />
            <div className="flex items-center gap-2">
              <p>{tech.title}</p>
              <div className="h-2 w-2 rounded-2xl bg-white"></div>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee>
        <div className="flex items-center gap-5">
          {technologies.map((tech, idx) => (
            <img className="w-8" key={idx} src={tech.img} alt="" />
          ))}
        </div>
      </Marquee>
      <Marquee direction="right">
        <div className="flex items-center gap-5">
          {technologies.map((tech, idx) => (
            // <img className="w-8" key={idx} src={tech} alt="" />
            <div className="flex items-center gap-2">
              <p>{tech.title}</p>
              <div className="h-2 w-2 rounded-2xl bg-white"></div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
