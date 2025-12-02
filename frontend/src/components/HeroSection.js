import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo.svg" alt="Axionics Logo" className={styles.heroLogo} />
        <h1 className="hero__title neon-text">Axionics</h1>
        <p className="hero__subtitle glass-effect">Master Physical AI & Humanoid Robotics</p>
        <div className={styles.buttons}>
          <Link
            className="button button--neon button--lg"
            to="/docs/intro">
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
