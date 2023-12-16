'use client'
import { useState } from 'react';
import styles from './globals.css'

const persons = [
  '1 - BADAR ',
  '2 - Usman',
  '3 - ABBAS',
  '4 - Ali',
  '5 - Zaid',
  '6 - FAISAL',
  '7 - Imran Khan',
  '8 - Hamza',
  '9 - Sameer',
  '10 - Faizi',
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % persons.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? persons.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{persons[currentIndex]}</h1>
        <div className={styles.buttons}>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </main>
    </div></>
  );
}
