import { BsArrowUpRight } from "react-icons/bs";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    toast.success("Message send successfully");
  };

  return (
    <div className="bg-[#101010] p-5 md:p-20 rounded-2xl mb-20" id="contact">
      <h3 style={{ lineHeight: "65px" }} className="text-[70px] text-white">
        {" "}
        {/* Added text-white for visibility */}
        Contact for <br /> work
      </h3>

      <div className="mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-white">Your Email</label>{" "}
            {/* Added text-white */}
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="border-b border-[#333] p-3 outline-0 bg-transparent text-white placeholder-gray-400" // Added bg-transparent, text-white, placeholder-gray-400
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white">Your Phone</label>{" "}
            {/* Added text-white */}
            <input
              type="text"
              {...register("phone")}
              placeholder="Your Phone"
              className="border-b border-[#333] p-3 outline-0 bg-transparent text-white placeholder-gray-400" // Added bg-transparent, text-white, placeholder-gray-400
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white">Your Message</label>{" "}
            {/* Added text-white */}
            <textarea
              {...register("message")}
              type="text"
              placeholder="Your Message"
              className="border-b border-[#333] p-3 outline-0 min-h-36 bg-transparent text-white placeholder-gray-400" // Added bg-transparent, text-white, placeholder-gray-400
            />
          </div>

          <button
            className="border border-[#333] mt-5 pl-5 px-3 py-2 rounded-full flex items-center justify-between cursor-pointer bg-white text-black font-medium text-xl w-full md:w-2/5
                           hover:bg-gray-100 transition-colors duration-200"
          >
            {" "}
            {/* Added hover effect */}
            Get Started{" "}
            <div className="bg-black h-10 w-10 rounded-full text-white flex justify-center items-center">
              <BsArrowUpRight />
            </div>
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
