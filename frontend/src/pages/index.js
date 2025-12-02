import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo.svg" alt="Axionics Logo" className={styles.heroLogo} />
        <h1 className="hero__title neon-text">{siteConfig.title}</h1>
        <p className="hero__subtitle glass-effect">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--neon button--lg"
            to="/docs/intro">
            Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
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

function Feature({title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md glassmorphism-card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
