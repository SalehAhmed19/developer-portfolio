import avatar from "../../assets/images/avatar.png";
import signature from "../../assets/images/signature.png";

export default function SideBar() {
  return (
    <div className="fixed left-0 bg-[#101010] w-3/12 m-5 rounded-2xl shadow-2xl p-5 h-[90%] text-center">
      <div className="border border-[#333] rounded-full flex items-center px-5 py-3 gap-2 text-[#B2B2B2]">
        <div className="h-2 w-2 bg-primary rounded-full"></div>
        <p>
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
    </div>
  );
}
