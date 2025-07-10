import { BsArrowUpRight } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="bg-[#101010] p-20 rounded-2xl mb-20">
      <h3 style={{ lineHeight: "65px" }} className="text-[70px]">
        Contact for <br /> work
      </h3>

      <div className="mt-10">
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label>Your Email</label>
            <input
              type="email"
              name=""
              placeholder="Your Email"
              className="border-b border-[#333] p-3 outline-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Your Phone</label>
            <input
              type="text"
              name=""
              placeholder="Your Phone"
              className="border-b border-[#333] p-3 outline-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Your Message</label>
            <textarea
              type="text"
              name=""
              placeholder="Your Message"
              className="border-b border-[#333] p-3 outline-0 min-h-36"
            />
          </div>

          <button className="border border-[#333] mt-5 pl-5 px-3 py-2 rounded-full flex items-center justify-between cursor-pointer w-2/5 bg-white text-black font-medium text-xl">
            Get Started{" "}
            <div className="bg-black h-10 w-10 rounded-full text-white flex justify-center items-center">
              <BsArrowUpRight />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
