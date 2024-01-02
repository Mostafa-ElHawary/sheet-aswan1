"use client";
import React, { useEffect } from 'react';

const GenderComponent: React.FC = () => {
  useEffect(() => {
    const GenderData = `female
    female
    
    female
    female
    female
    female
    female
    
    
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    male
    male
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    female
    `;

    const genders = GenderData.split('\n').filter(Boolean);
    const genderElement = document.getElementById('p-GENDER');

    if (genderElement) {
      for (let i = 1; i < genders.length; i++) {
        const pElement = document.createElement('p');
        pElement.textContent = `${i} - ${genders[i]}`;
        genderElement.appendChild(pElement);
      }
    }
  }, []);

  return null;
};

export default GenderComponent;
