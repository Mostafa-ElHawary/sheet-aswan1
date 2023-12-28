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
          <p>Aswan 1</p>
        <div className="Name p-4 bg-gray-100">
        {/* NAME Section */}
        <section id="nameSection" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700">NAME :</h2>
          <p id="p-NAME" className="mt-2 text-gray-800">
            <Names />
          </p>
        </section>

        {/* STATUS Section */}
        <section id="statusSection" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700">STATUS :</h2>
          <p id="p-STUTAS" className="mt-2 text-gray-800">
            <Stats />
          </p>
        </section>

        {/* PHONE Section */}
        <section id="phoneSection" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700">PHONE :</h2>
          <p id="p-PHONE" className="mt-2 text-gray-800">
            <Phones />
          </p>
        </section>

        {/* CITY Section */}
        <section id="citySection" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700">CITY :</h2>
          <p id="p-CITY" className="mt-2 text-gray-800">
            <CityComponent />
          </p>
        </section>

        {/* GENDER Section */}
        <section id="genderSection" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700">GENDER :</h2>
          <p id="p-GENDER" className="mt-2 text-gray-800">
            <GenderComponent />
          </p>
        </section>
      </div>
    </>
  );
}

