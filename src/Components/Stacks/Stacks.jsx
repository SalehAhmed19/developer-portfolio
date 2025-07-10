import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Stacks.css";
import react from "../../assets/images/react.png";
import node from "../../assets/images/node.webp";
import mongo from "../../assets/images/mongo.webp";
import express from "../../assets/images/express.png";
import tailwind from "../../assets/images/tailwind.png";
import firebase from "../../assets/images/firebase.png";

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
  ];
  const [sliderRef] = useKeenSlider(
    {
      loop: true, // Enable looping
      slides: {
        perView: 2, // Show 2 slides at a time
        spacing: 15, // 15px spacing between slides
      },
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
          }, 3000);
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
    <div>
      <h3 className="text-[70px] font-medium">Tech Stack</h3>
      <div ref={sliderRef} className="keen-slider my-5">
        {stacks.map((stack, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-[#101010] rounded-2xl flex flex-col items-center p-10"
          >
            <h5 className="text-3xl font-medium">{stack.title}</h5>
            <div className="bg-black p-5 my-5 rounded-2xl">
              <img src={stack.img} alt="" className="w-20" />
            </div>
            <p className="text-xl">{stack.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
