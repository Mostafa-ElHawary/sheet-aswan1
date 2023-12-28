"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Names } from "@/app/lib/Data";

const NameComponent: React.FC = () => {
  // const entries = Names.split("\n");
  const namesArray = Names.split('\n');

 // Step 2-4: Use a set to store unique names
const uniqueNamesSet = new Set(namesArray);

// Convert the set back to an array
const uniqueNamesArray = Array.from(uniqueNamesSet);

// Join the array back to a string if needed
// const uniqueNamesString = uniqueNamesArray.join('\n');

  const dataArray = uniqueNamesArray.map((entry) => {
    const [firstName, lastName] = entry.split(",");
    return { firstName, lastName };
  });
  useEffect(() => {
    const element = document.getElementById("p-NAME");

    if (element) {
      dataArray.forEach((item, index) => {
        const pElement = document.createElement("p");
        pElement.textContent = `${index + 1} -  ${item.firstName} ${
          item.lastName
        }`;
        element.appendChild(pElement);
      });
    }
  }, [dataArray]);

  return null;
};

// const NameComponent: React.FC = () => {
//   const entries = data.split('\n');
//   const uniqueEntries = new Set(entries);

//   useEffect(() => {
//     const element = document.getElementById('p-NAME');

//     if (element) {
//       uniqueEntries.forEach((entry, index) => {
//         const [firstName, lastName] = entry.split(',');
//         const pElement = (
//           <p key={index + 1}>
//             {index + 1} - {firstName} {lastName}
//           </p>
//         );
//         element.appendChild(pElement);
//       });
//     }
//   }, [uniqueEntries]);

//   return null;
// };

// const NameComponent: React.FC = () => {
//   const entries = data.split('\n');
//   const uniqueEntries = [...new Set(entries)];

//   useEffect(() => {
//     const element = document.getElementById('p-NAME');

//     if (element) {
//       uniqueEntries.forEach((entry, index) => {
//         const [firstName, lastName] = entry.split(',');
//         const pElement = (
//           <p key={index + 1}>
//             {index + 1} - {firstName} {lastName}
//           </p>
//         );
//         ReactDOM.render(pElement, element);
//       });
//     }
//   }, [uniqueEntries]);

//   return null;
// };

export default NameComponent;
