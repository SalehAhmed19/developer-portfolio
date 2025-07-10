import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex gap-3 items-center justify-center mt-5">
      <a
        href="https://www.facebook.com/muhammad.saleh.ahmed.mahin/"
        target="_blank"
        className="cursor-pointer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.linkedin.com/in/salehahmedmahin/"
        target="_blank"
        className="cursor-pointer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://x.com/salehahmedmahin/"
        target="_blank"
        className="cursor-pointer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/stories/saleh.ahmed.mahin/"
        target="_blank"
        className="cursor-pointer"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
