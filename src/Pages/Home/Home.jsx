import { useEffect, useState } from "react";
import Introduction from "../../Components/Introduction/Introduction";

export default function Home() {
  const [time, setTime] = useState();
  useEffect(() => {
    const todayDate = new Date().toLocaleString().split(",");
    const time = todayDate[1].split(":");
    setTime(time[0] + ":" + time[1]);
  }, []);
  return (
    <div className="p-20 flex flex-col gap-20">
      <p className="text-xl font-extralight">
        Bogura, Bangladesh {time} {time > 12 ? "AM" : "PM"}
      </p>

      {/*  */}
      <Introduction />
    </div>
  );
}
