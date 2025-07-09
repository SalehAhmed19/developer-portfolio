import React from "react";

export default function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-3 font-extralight text-[#999999] mb-5 text-xl">
      <div className="h-1 w-1 bg-[#999999] rounded-full"></div>
      <p>{title}</p>
    </div>
  );
}
