"use client";
import { useEffect } from 'react';


const CityComponent: React.FC = () => {
  useEffect(() => {
    const Location = `Hometown



    Helwan
    
    
    Mansoura
    
    
    
    
    
    
    Gaza City
    Cairo  Egypt
    
    Hlwanlwazi  Eastern Cape  South Africa
    Misr El-Gedida  Al Qahirah  Egypt
    Cairo  Egypt
    El Matariya  Al Qahirah  Egypt
    Cairo  Egypt
    
    
    
    
    
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    
    
    Cairo  Egypt
    
    Cairo  Egypt
    Cairo  Egypt
    Giza
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    
    Cairo  Egypt
    Cairo  Egypt
    
    Giza
    Giza
    Cairo  Egypt
    El Marâgha  Suhaj  Egypt
    
    
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    
    
    Cairo  Egypt
    Cairo  Egypt
    
    
    Alexandria  Egypt
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    Rome  Italy
    
    Cairo  Egypt
    
    Cairo  Egypt
    Giza
    
    
    Cairo  Egypt
    Cairo  Egypt
    
    
    Helwan
    Helwan
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    
    Cairo  Egypt
    Cairo  Egypt
    
    
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    Giza
    
    
    El Haram  Al Jizah  Egypt
    Cairo  Egypt
    Cairo  Egypt
    
    El-Mahalla El-Kubra
    El-Mahalla El-Kubra
    
    Alexandria  Egypt
    
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    Cairo  Egypt
    El Haram  Al Jizah  Egypt
    
    
    
    Cairo  Egypt
    Cairo  Egypt
    Giza
    Madinet El-Nasr  Al Qahirah  Egypt
    
    
    
    
    
    Cairo  Egypt
    
    
    
    Cairo  Egypt`

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

  return null
};

export default CityComponent;
