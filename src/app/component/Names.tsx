"use client";
import React, { useEffect } from "react";

const data = `صفاء,ديب
Mahitab,Mohamed
Marian,Rafat
Wafaa,Abd El-Raheem
Ebram,Philip
Asmaa,Fathy
Mai,Abdul Qader
Dina,Adel
أحمد,عبدالكريم
Vena,Hana
Tota,Bota
MaHamd,Samy
Esraa,Rashad
Beshoy,Gamel
Souad,Elsrogy
Souad,Elsrogy
Nevin,Hammam
Nevin,Hammam
Om Abd Elrahman,Ahmed
Losy,Hader
Sara,Mahmoud Al Husmdy
Sara,Mahmoud Al Husmdy
Walaa,Assad
Semsma,Semsem
Mero,Ezzat
Sue,Saleh
Gharam,Saleh
Gharam,Saleh
Layaly,Egy
Manal,Mohamed
Mero,Gaber
Karyma,Hassan
Shry,Aly
Rana,Kamel
Kholoud,Abdo
Kholoud,Abdo
Shrook,Ashraf
Shrook,Ashraf
Eveline,Meshel
Eveline,Meshel
Ola,Farghaly
YøYø,ÃTëf
Shams,Esmail
Mariam,Ashraf
Asmaa,Ebraheem
Fatma,Ahmed
Doaa,Hamed
Amira,Sayed
Amira,Sayed
Aziza,Ahmed
Samar,Mohamed
Hala,Sayed
Amal,Mostafa
Nour,Osama
Sma,Yousef
Ahmed,Ramadan
Ahmed,Ramadan
Ahmed,Ramadan
Ahmed,Ramadan
Haidy,Raafat
Asmaa,Atef
GiGi,Remon
GiGi,Remon
Sama,Hamdy
Sama,Hamdy
Maha,Mehoo
Mahmoud,Kasem
اسيل,الحياه
Sara,Emad
Hassan,Ayman
Hassan,Ayman
گبریہائہہی,اآآسہطورھہہ
Marwa,Salah
Marwa,Salah
Merna,Refaat
Merna,Refaat
رحاب,عمر
Hazem,Moftah
Esraa,Elsaid
Esraa,Elsaid
Esraa,Elsaid
Esraa,Elsaid
Esraa,Elsaid
Esraa,Elsaid
Esraa,Elsaid
Rofida,Hashem
رحيق,الجنه
Hager,Sayed
Hager,Sayed
نسرين احمد,بخيت
Ash,Gan
Roaa,Ahmed
Roaa,Ahmed
Aya,Mohamed
Aya,Mohamed
Kholoud,Saad
Kholoud,Saad
Norhan,Fathy
Mero,Samir
Mero,Samir
Karem,Faroq
Asia,Mohsen
Mohmed,Elrahman
Roma,Boktor
Roma,Boktor
Maha,Mohammed
Maha,Mohammed
Karam,Ahmed
Koka,Mohamed
Ñourhan,Ķamal
Ñourhan,Ķamal
Nadia,Ali
Esraa,Esmail
Nour,Mahmoud
نور,الرحمن
Nada,Mohamed
Nada,Mohamed
Shimaa,Said
حمادة جمال,جمال عبدالناصر
Shimaa,Arafa
Shimaa,Arafa
Eman,Ibrahim
Ahmed,Talaat
Ahmed,Talaat
Hadeer,Mahmoud
شادي,شيكو
شادي,شيكو
Yomna,Mohamed
Hanen,Mostfa
Om,Farida
Nädä,Emäd
Rehab,Fathy
Twaby,Sud
Amal,Radwan
Ahmed,Helles
Hasnaa,Mostafa
Hasnaa,Mostafa
Nada,Ahmed Mohamed
مفيش,فايده
Qamar,Essam
Asmaa,Nabil
Manar,Bassam
Madona,Atef
تنه,ورنه
Hend,Ahmed
Tota,Khalid
Salma,Mostafa
Salma,Mostafa
Ana,Yose Ana
Asmaa,Sdiek
هبه محمد,بدر
Karas,Fathy
Maha,Hamdy
Maha,Hamdy
Ayat,Mustafa
Walaa,El Kady
Omneya,Ahmed
مﭑمي,گﭑريگﭑ
Rehab,Abdou
Rehab,Abdou
Youssef,Shenouda
Noha,Hassan
Noha,Hassan
Sara,Moustafa
Rehab,Musaa
Shahy,Sarhan
Gannat,Moustafa
Marwa,Ibrahiam
Mohamad,Hany
Sally,Mahmoud
Noor,Mohamed
Rana,Hamdy
NoUrhan,HaShem
Sara,Adel
Andy,Shenoda
Andy,Shenoda
Somaya,Emed
Rasha,Basha
Rasha,Basha
Logy,Waleed
Roka,S. Zaki
Hanan,Nona
Sa,MoRa
Śĥì,Màà
مها,اروي
Dina,Alaa
Aya,Ahmed
Aya,Ahmed
Amna,G. Mahmoud
Maria,Khaled
Has,Na
Has,Na
Eman,Hakim
Rahma,Seleim
Nada,FaRghali
Nermeen,Faried
Marmora,Boles
Khaled,Mohamed
Yassin Abdelrazek,Ahmed
Ahmed,Hegazy`;

const NameComponent: React.FC = () => {
  const entries = data.split("\n");
  const dataArray = entries.map((entry) => {
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

export default NameComponent;
