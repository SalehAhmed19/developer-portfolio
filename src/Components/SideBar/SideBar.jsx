import avatar from "../../assets/images/avatar.png";
import signature from "../../assets/images/signature.png";
import Social from "../Social/Social";
import { BsArrowUpRight } from "react-icons/bs";

export default function SideBar() {
  return (
    <div className="bg-[#101010] md:w-3/12 m-5 rounded-2xl shadow-2xl p-5 text-center md:fixed">
      <div className="border border-[#333] rounded-full flex items-center px-5 py-2 gap-2 text-[#B2B2B2]">
        <div className="h-2 w-2 bg-primary rounded-full"></div>
        <p style={{ lineHeight: "30px" }} className="text-xl">
          Available for <span className="text-white">Work</span>
        </p>
      </div>

      <div className="px-10 pt-10">
        <img src={avatar} alt="" className="rounded-2xl" />
        <img src={signature} alt="" className="-mt-16" />
      </div>
      <h3 className="text-xl text-[#dedede]">
        dev.saleh.ahmed.mahin@gmail.com
      </h3>
      <p className="text-[#787878]">Based in Bogura, Bangladesh</p>
      <Social />
      <button className="border border-[#333] mt-5 pl-5 px-3 py-3 rounded-full w-full flex items-center justify-between cursor-pointer">
        Get Started{" "}
        <div className="bg-white h-6 w-6 rounded-full text-black flex justify-center items-center">
          <BsArrowUpRight />
        </div>
      </button>
    </div>
  );
}
