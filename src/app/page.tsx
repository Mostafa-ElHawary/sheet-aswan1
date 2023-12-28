import Link from "next/link";
import React, { ReactNode } from "react";
// import { sectionsData, CustomSection } from "@/app/LIB/Data";
import Stats from "@/app/component/Stats";
import Names from "@/app/component/Names";

export default function Home() {
  return (
    <>
      <div className="Name ">
        <p id="p-NAME">
          {" "}
          Names :<Names />
        </p>
        <p id="p-STUTAS">
          {" "}
          Status : <Stats />{" "}
        </p>
        <p id="p-PHONE"></p>
        <p id="p-CITY"></p>
        <p id="p-GENDER"></p>
      </div>
    </>
  );
}

{
  /* {section.nameSection !== 'nav' && section.nameSection !== 'footer' ? section.content : null} */
}
{
  /* {section.nameSection !== 'nav' && section.nameSection !== 'footer' ? section.content : null} */
}
// <CustomSection
//   key={index}
//   height={section.height}
//   className={`${section.nameSection} ${
//     section.height == "8vh" ? "md:px-10" : ""
//   }`}
// >
//   {section.content}
// </CustomSection>
