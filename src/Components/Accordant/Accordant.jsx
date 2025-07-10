import { CgWebsite } from "react-icons/cg";
import bg from "../../assets/images/img-bg.png";

export default function Accordant({
  title,
  content,
  index,
  activeIndex,
  onToggle,
}) {
  const isOpen = index === activeIndex;
  return (
    <div className="rounded-lg mb-4 shadow-sm overflow-hidden">
      {/* Accordion Header */}
      <button
        className={`flex justify-between items-center w-full px-6 py-4 focus:outline-none focus:ring-opacity-50 transition duration-700 ease-in-out cursor-pointer`}
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={`panel-content-${index}`}
        id={`panel-header-${index}`}
      >
        <span
          className={`${
            isOpen ? "text-white" : "text-secondary"
          } text-3xl md:text-[70px] text-left flex items-center gap-5`}
        >
          {isOpen && (
            <div
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="p-5 w-16 h-16 flex justify-center items-center rounded-2xl cursor-pointer"
            >
              <CgWebsite className="w-8" />
            </div>
          )}

          {title}
        </span>
        {/* Arrow Icon for Open/Close State */}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-90 text-secondary" : "rotate-0 text-gray-600"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      {/* Accordion Content */}
      <div
        id={`panel-content-${index}`}
        role="region"
        aria-labelledby={`panel-header-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 py-4 text-white md:ml-20 text-xl">{content}</div>
        </div>
      </div>
    </div>
  );
}
