import { useEffect, useState } from "react";
import footerBg from "../../assets/images/footer.svg";
import signature from "../../assets/images/signature.png";
import Marquee from "react-fast-marquee";

const DotPatternBackground = ({
  dotColor = "#111", // Default to Tailwind gray-200
  backgroundColor = "#000", // Default to Tailwind gray-50
  dotSize = "2px",
  spacing = "20px",
  children,
  className = "",
}) => {
  const backgroundStyle = {
    backgroundColor: backgroundColor,
    backgroundImage: `radial-gradient(${dotColor} ${dotSize}, transparent ${dotSize})`,
    backgroundSize: `${spacing} ${spacing}`,
    backgroundPosition: `calc(${spacing} / 2) calc(${spacing} / 2)`, // Center the dots
  };

  return (
    <div
      className={`relative w-full min-h-[400px] pt-20 flex items-center justify-center ${className}`}
      style={backgroundStyle}
    >
      {children}
    </div>
  );
};

export default function Footer() {
  const [year, setYear] = useState(null);
  useEffect(() => {
    const current = new Date().toLocaleString().split(",")[0].split("/")[2];
    setYear(current);
  }, []);
  return (
    <>
      <div className="relative">
        <DotPatternBackground>
          <img
            src={footerBg}
            alt=""
            className="w-2/3 mx-auto blur-3xl absolute bottom-0 opacity-56"
          />

          <div className="py-10 rounded-full bg-[#dedede12] mx-auto relative mb-20">
            <img src={signature} alt="" className="w-46 mt-[-70px] mx-auto" />

            <Marquee>
              <div className="flex items-center gap-5">
                <h3 className="text-[70px]">Book a call</h3>{" "}
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
            </Marquee>
          </div>
        </DotPatternBackground>
        <p className="text-center pb-10">Saleh Ahmed Mahin © {year}</p>
      </div>
    </>
  );
}
