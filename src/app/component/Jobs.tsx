"use client";
import React, { useEffect } from 'react';

const JobComponent: React.FC = () => {
  useEffect(() => {
    const Jobs = `Work
    @
    @
    @
    Digital support@Helwan
    @
    @
    @Mansoura
    @
    @
    @
    @
    @
    @
    @Gaza City
    @Cairo  Egypt
    @
    @Hlwanlwazi  Eastern Cape  South Africa
    @Misr El-Gedida  Al Qahirah  Egypt
    @Cairo  Egypt
    D&C member@El Matariya  Al Qahirah  Egypt
    @Cairo  Egypt
    @
    @
    @
    @
    @
    @Cairo  Egypt
    @Cairo  Egypt
    مدرسه@Cairo  Egypt
    @
    @
    Marketing And Public Relations Manager@Cairo  Egypt
    @
    @Cairo  Egypt
    @Cairo  Egypt
    @Giza
    @Cairo  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    @
    @Cairo  Egypt
    @Cairo  Egypt
    @
    @Giza
    @Giza
    @Cairo  Egypt
    مدربة لياقة بدنية (ايروبك،دانس،سكوات،زومبا)@El Marâgha  Suhaj  Egypt
    @
    @
    @Cairo  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    @
    @
    @Cairo  Egypt
    @Cairo  Egypt
    @
    @
    @Alexandria  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    IN YouTube@Rome  Italy
    @
    @Cairo  Egypt
    Computer Engineer@
    @Cairo  Egypt
    @Giza
    @
    @
    @Cairo  Egypt
    @Cairo  Egypt
    @
    @
    @Helwan
    @Helwan
    @Cairo  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    @
    @Cairo  Egypt
    @Cairo  Egypt
    @
    @
    @Cairo  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    @Giza
    @
    @
    Model@El Haram  Al Jizah  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    Nursing@
    @El-Mahalla El-Kubra
    @El-Mahalla El-Kubra
    @
    @Alexandria  Egypt
    @
    @Cairo  Egypt
    Leader@Cairo  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    @Cairo  Egypt
    @El Haram  Al Jizah  Egypt
    @
    @
    @
    @Cairo  Egypt
    @Cairo  Egypt
    @Giza
    English Teacher@Madinet El-Nasr  Al Qahirah  Egypt
    @
    @
    @
    Telesales@
    Telesales@
    Model@Cairo  Egypt
    @
    @
    @محاسب
    `;

    const Job = Jobs.split('\n').filter(Boolean);
    const JobElement = document.getElementById('p-GENDER');

    if (JobElement) {
      for (let i = 1; i < Job.length; i++) {
        const pElement = document.createElement('p');
        pElement.textContent = `${i} - ${Job[i]}`;
        JobElement.appendChild(pElement);
      }
    }
  }, []);

  return null;
};

export default JobComponent;
