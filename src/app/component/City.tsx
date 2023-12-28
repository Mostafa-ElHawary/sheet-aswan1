"use client";
import { useEffect } from 'react';


const CityComponent: React.FC = () => {
  useEffect(() => {
    const Location = `Assiut

    Asyut
    Assiut
    Asyut
    Asyut
    Asyut
    Assiut
    Assiut
    Assiut
    Asyut
    Assiut
    Assiut
    Assiut
    Assiut
    Sohag
    Sohag
    Asyut
    Asyut
    Asyut
    Asyut
    Assiut
    Assiut
    Asyut
    Assiut
    Assiut
    Asyut
    Asyut
    Assiut
    Cairo  Egypt
    Assiut
    Assiut
    Abu Tîg  Asyut  Egypt
    Asyut
    Assiut
    Assiut
    Asyut
    Asyut
    Cairo  Egypt
    Asyut
    Asyut
    Asyut
    Asyut
    Asyut
    Asyut
    Asyut
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    Asyut
    Asyut
    Assiut
    Mallawi
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Asyut
    Asyut
    Asyut
    Asyut
    Assiut
    Assiut
    Assiut
    Assiut
    Asyut
    Asyut
    Assiut
    Assiut
    Assiut
    Asyut
    Asyut
    Asyut
    Al Qusiyah  Asyut  Egypt
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Assiut
    Asyut
    Al Qusiyah  Asyut  Egypt
    Assiut
    Assiut
    Asyut
    Assiut
    Kafr El Sheikh
    Alexandria  Egypt
    Assiut
    Cairo  Egypt
    Asyut
    Assiut
    Assiut
    Assiut
    Assiut
    Asyut
    Assiut
    Assiut
    Assiut
    Asyut
    Asyut
    Matay  Al Minya  Egypt
    Asyut
    Assiut
    Cairo  Egypt
    Cairo  Egypt
    Assiut
    Asyut
    Assiut
    Cairo  Egypt
    Assiut
    Assiut
    Assiut
    Assiut
    Asyut
    Cairo  Egypt
    Abu Tig
    Asyut
    Asyut
    Asyut
    Assiut
    Cairo  Egypt`;

    const cities = Location.split('\n').filter(Boolean).map(line => line.trim());
    const cityElement = document.getElementById('p-CITY');

    if (cityElement) {
      for (let i = 0; i < cities.length; i++) {
        const pElement = document.createElement('p');
        pElement.textContent = `${i + 1} - ${cities[i]}`;
        cityElement.appendChild(pElement);
      }
    }
  }, []);

  return null;
};

export default CityComponent;
