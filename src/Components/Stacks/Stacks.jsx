import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Stacks.css";
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

export default function Stacks() {
  const stacks = [
    {
      img: react,
      title: "React.Js",
      description: "Build interactive user interfaces efficiently.",
    },
    {
      img: node,
      title: "Node.Js",
      description: "Build fast, network applications.",
    },
    {
      img: mongo,
      title: "MongoDB",
      description: "Flexible, document-oriented NoSQL database.",
    },
    {
      img: express,
      title: "Express.Js",
      description: "Minimalist web framework for Node.js.",
    },
    {
      img: tailwind,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI.",
    },
    {
      img: firebase,
      title: "Firebase",
      description: "Firebase: Secure user auth, seamless deployment.",
    },
    {
      img: reactRouter,
      title: "React Router Dom",
      description: "Manage UI synchronization with URL.",
    },
    {
      img: vite,
      title: "Vite",
      description: "Rapid web development with native ESM.",
    },
    {
      img: redux,
      title: "Redux Toolkit",
      description: "Simplified, opinionated Redux development.",
    },
    {
      img: next,
      title: "Next.Js",
      description: "Server-rendered React for fast performance.",
    },
    {
      img: vercel,
      title: "Vercel",
      description: "Deploy web projects with ease.",
    },
    {
      img: github,
      title: "GitHub",
      description: "Platform for version control and collaboration.",
    },
    {
      img: npm,
      title: "NPM",
      description: "NPM: JavaScript package manager, dependency handler.",
    },
  ];
  const [sliderRef] = useKeenSlider(
    {
      loop: true, // Enable looping
      // slides: {
      //   perView: 2, // Show 2 slides at a time
      //   spacing: 15, // 15px spacing between slides
      // },
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 920px)": {
          slides: { perView: 2, spacing: 10 },
        },
      },
      // slides: { perView: 1 },
    },
    // This is where you define plugins. It's an array of plugin functions.
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        // Function to clear any existing autoplay timeout
        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        // Function to set the next autoplay timeout
        function nextTimeout() {
          clearTimeout(timeout); // Clear any previous timeout before setting a new one
          if (mouseOver) return; // If mouse is over, don't autoplay

          // Set a new timeout to advance the slider after 2 seconds (2000ms)
          timeout = setTimeout(() => {
            slider.next(); // Go to the next slide
          }, 2000);
        }

        // 'created' event: When the slider is first created
        slider.on("created", () => {
          // Pause autoplay on mouseover
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          // Resume autoplay on mouseout
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          // Start the initial autoplay
          nextTimeout();
        });

        // 'dragStarted' event: Clear autoplay when user starts dragging
        slider.on("dragStarted", clearNextTimeout);

        // 'animationEnded' event: Restart autoplay after an animation finishes (manual or auto)
        slider.on("animationEnded", nextTimeout);

        // 'updated' event: Restart autoplay if slider options/slides are updated
        slider.on("updated", nextTimeout);
      },
    ] // End of plugins array
  );
  return (
    <div className="p-5 md:p-0" id="stacks">
      <h3 className="text-[46px] md:text-[70px] font-medium">Tech Stack</h3>
      <div ref={sliderRef} className="keen-slider my-5">
        {stacks.map((stack, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-[#101010] rounded-2xl flex flex-col items-center p-10 cursor-pointer"
          >
            <h5 className="text-3xl font-medium">{stack.title}</h5>
            <div className="bg-black p-5 my-5 rounded-2xl">
              <img src={stack.img} alt="" className="w-20" />
            </div>
            <p className="text-xl text-center">{stack.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
