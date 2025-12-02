import React from 'react';
import { PrimaryButton } from './Button';
import styles from './PersonalizeButton.module.css'; // Assuming PrimaryButton is the desired button type

function PersonalizeButton() {
  const handleClick = () => {
    alert('Personalization coming soon');
  };

  return (
    <PrimaryButton onClick={handleClick} className={styles.personalizeButton}>
      Personalize
    </PrimaryButton>
  );
}

export default PersonalizeButton;
