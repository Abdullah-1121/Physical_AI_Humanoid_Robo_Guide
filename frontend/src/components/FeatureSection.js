import React from 'react';
import clsx from 'clsx';
import styles from './FeatureSection.module.css';

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--6', styles.featureItem)}>
      <div className="text--center padding-horiz--md glassmorphism-card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureSection() {
  return (
    <section className={clsx('section-padding', styles.features)}>
      <div className="container">
        <div className="row">
          <Feature title="Learning physical AI" description="Dive deep into the mechanics of physical AI and humanoid robotics." />
          <Feature title="Personalized content experience" description="Tailored learning paths and interactive content coming soon." />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
