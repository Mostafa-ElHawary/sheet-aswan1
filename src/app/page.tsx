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
      <div className="Name p-4">
        {/* NAME Section */}
        <section id="nameSection" className="mb-8">
          <h2 className="text-xl font-bold">NAME :</h2>
          <p id="p-NAME" className="mt-2">
            <Names />
          </p>
        </section>

        {/* STATUS Section */}
        <section id="statusSection" className="mb-8">
          <h2 className="text-xl font-bold">STATUS :</h2>
          <p id="p-STUTAS" className="mt-2">
            <Stats />
          </p>
        </section>

        {/* PHONE Section */}
        <section id="phoneSection" className="mb-8">
          <h2 className="text-xl font-bold">PHONE :</h2>
          <p id="p-PHONE" className="mt-2">
            <Phones />
          </p>
        </section>

        {/* CITY Section */}
        <section id="citySection" className="mb-8">
          <h2 className="text-xl font-bold">CITY :</h2>
          <p id="p-CITY" className="mt-2">
            <CityComponent />
          </p>
        </section>

        {/* GENDER Section */}
        <section id="genderSection" className="mb-8">
          <h2 className="text-xl font-bold">GENDER :</h2>
          <p id="p-GENDER" className="mt-2">
            <GenderComponent />
          </p>
        </section>
      </div>
    </>
  );
}

