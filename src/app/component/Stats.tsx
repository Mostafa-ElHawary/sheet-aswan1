"use client";
import { useEffect } from 'react';

const StatusComponent: React.FC = () => {
  const statuses = `Married
Single
Married
Single
Married
Single

Married
Single
Married
Single

Single
Married

Single
Single

Married
Married
Single
Single

Single

Married

Single
Single

Married

Married
Married
Single
Single
Single

Single
Single

Married


In an open relationship
In an open relationship
In an open relationship
In an open relationship
Single
Single

Single
Single
Single
Single

It's complicated
It's complicated
It's complicated

Single
Single
Single

Married
Married
Married
Married
Married

Married
Married

Single
Single

Engaged
Engaged

Single

Single
Engaged
Engaged

Married
Single

Single

Single

Single
Married

Single

Engaged
Married

Married

Married

Married

Single
Married
Married
Married

Single
Single
Married
Single
Single
Single
Single

Single

Single
Single
Married
Married`
    .split('\n')
    .filter(Boolean)
    .map((line) => line.trim());

  useEffect(() => {
    const statusElement = document.getElementById('p-STUTAS');

    if (statusElement) {
      statuses.forEach((status, index) => {
        const pElement = document.createElement('p');
        pElement.innerText = `${index + 1} - ${status}`;
        statusElement.appendChild(pElement);
      });
    }
  }, [statuses]);

  return null;
};

export default StatusComponent;
