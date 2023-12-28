import Link from "next/link";
import React, { ReactNode } from "react";
// import { sectionsData, CustomSection } from "@/app/LIB/Data";
import Stats from "@/app/component/Stats";
import Names from "@/app/component/Names";
import Phones from "@/app/component/Phones";
import CityComponent from "@/app/component/City";
import GenderComponent from "@/app/component/Gender";

export default function Home() {
  return (
    <>
      <div className="Name ">
        <p id="p-NAME">
          {" "}
          NAME : <Names />
        </p>
        <p id="p-STUTAS">
          {" "}
          STUTUS : <Stats />{" "}
        </p>
        <p id="p-PHONE">
          PHONE : <Phones />
        </p>
        <p id="p-CITY">
          {" "}
          CITY : <CityComponent />
        </p>
        <p id="p-GENDER">
          GENDER : <GenderComponent />{" "}
        </p>
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
