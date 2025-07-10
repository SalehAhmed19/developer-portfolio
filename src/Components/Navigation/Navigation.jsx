import { FaHome, FaUser } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { BsStack } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";

export default function Navigation() {
  const navigations = [
    { to: "home", icon: <FaHome /> },
    { to: "service", icon: <GrServices /> },
    { to: "about", icon: <FaUser /> },
    { to: "stacks", icon: <BsStack /> },
    { to: "contact", icon: <RiMessage2Fill /> },
  ];
  return (
    <div className="fixed right-0 bg-[#101010] p-5 rounded-full mx-5">
      <ul className="flex flex-col gap-7">
        {navigations.map((nav, idx) => (
          <li key={idx} className="cursor-pointer">
            {/* <Link
              to={`${nav.to}`}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {nav.icon}
            </Link> */}
            <a href={`#${nav.to}`}>{nav.icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
