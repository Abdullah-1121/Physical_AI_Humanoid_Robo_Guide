import React, { useState } from 'react';
import styles from './TranslateToggle.module.css';

function TranslateToggle() {
  const [isUrdu, setIsUrdu] = useState(false);

  const handleChange = () => {
    setIsUrdu(!isUrdu);
    // Placeholder logic: content remains in English
    alert('Translation to Urdu is a placeholder. Content remains in English.');
  };

  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" checked={isUrdu} onChange={handleChange} />
      <span className={styles.slider}></span>
      <span className={styles.toggleText}>Translate to Urdu</span>
    </label>
  );
}

export default TranslateToggle;
