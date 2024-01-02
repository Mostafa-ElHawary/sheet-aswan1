"use client";
import React, { useEffect, useRef } from "react";
import { statuses } from "@/app/lib/Data";
//   .split('\n')
//   .filter(Boolean)
//   .map((line) => line.trim());

// useEffect(() => {
//   const statusElement = document.getElementById('p-STUTAS');

//   if (statusElement) {
//     statuses.forEach((status, index) => {
//       const pElement = document.createElement('p');
//       pElement.innerText = `${index + 1} - ${status}`;
//       statusElement.appendChild(pElement);
//     });
//   }
// }, [statuses]);

// return null

const StatusComponent: React.FC = () => {
  const statuses = `Relationship
  Married
  
  
  
  
  Single
  
  Single
  
  Single
  
  
  
  
  Married
  
  Married
  Single
  Married
  
  Married
  
  Engaged
  Engaged
  
  
  
  
  Married
  Married
  Married
  Single
  Single
  Single
  
  Married
  
  
  
  
  Married
  Married
  Married
  
  Single
  Single
  
  
  Married
  
  
  Married
  Single
  Married
  
  Single
  Single
  
  
  
  
  
  
  
  
  
  
  Married
  Single
  
  
  
  
  
  
  Single
  Single
  Engaged
  In a relationship
  In a relationship
  
  
  
  
  
  Single
  Single
  Single
  Single
  Married
  
  
  It's complicated
  In a relationship
  
  
  Married
  Married
  
  Engaged
  
  Married
  Engaged
  
  
  
  
  
  
  
  
  
  Engaged
  Single
  
  Engaged
  
  
  
  
  
  
  
  Single
  `
  //   .split('\n')
  //   .filter(Boolean)
  //   .map((line) => line.trim());

  // useEffect(() => {
  //   const statusElement = document.getElementById('p-STUTAS');

  //   if (statusElement) {
  //     statuses.forEach((status, index) => {
  //       const pElement = document.createElement('p');
  //       pElement.innerText = `${index + 1} - ${status}`;
  //       statusElement.appendChild(pElement);
  //     });
  //   }
  // }, [statuses]);

  // return null
  .split('\n')
  .filter(Boolean)
  .map((line) => line.trim());

const statusRef = useRef<HTMLParagraphElement | null>(null);

useEffect(() => {
  const statusElement = document.getElementById('p-STUTAS');
  // if (statusRef.current) {
  //   statusRef.current.innerHTML = statuses
  //     .map((status, index) => `${index + 1} - ${status}`)
  //     .join('<br />');
  // }

    if (statusElement) {
      statuses.forEach((status, index) => {
        const pElement = document.createElement('p');
        pElement.innerText = `${index + 1} - ${status}`;
        statusElement.appendChild(pElement);
      });
    }
}, [statuses]);

return null ;
// return <p id="p-STUTAS" ref={statusRef} className="mt-2 text-gray-800"></p>;
};
export default StatusComponent;
