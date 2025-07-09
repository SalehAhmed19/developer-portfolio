import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <div className="relative flex flex-col gap-20 justify-center">
      <SideBar />
      <Home />
    </div>
  );
}
