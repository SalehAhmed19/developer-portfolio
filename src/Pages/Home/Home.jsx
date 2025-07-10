import { useEffect, useState } from "react";
import Introduction from "../../Components/Introduction/Introduction";
import Services from "../../Components/Services/Services";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Stacks from "../../Components/Stacks/Stacks";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  const [time, setTime] = useState();
  useEffect(() => {
    const todayDate = new Date().toLocaleString().split(",");
    const time = todayDate[1].split(":");
    setTime(time[0] + ":" + time[1]);
  }, [time]);
  return (
    <div className="p-20 flex flex-col gap-20">
      <p className="text-xl font-extralight">
        Bogura, Bangladesh {time} {time > 12 ? "PM" : "AM"}
      </p>

      {/*  */}
      <Introduction />
      <Services />
      <AboutMe />
      <Stacks />
      <Contact />
      <Footer />
    </div>
  );
}
