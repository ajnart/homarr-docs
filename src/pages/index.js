import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageShowcase from '@site/src/components/HomepageShowcase';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/favicon.png" height={200} style={{filter: 'brightness(500%)'}} />
        <h1 className="hero__title">Homarr 🦞</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: -5 }}>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/quick-start">
              Get Started with Homarr 🚀
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={'Landing Page 🚀'}
      description="Homarr is a simple and lightweight homepage for your server, that helps you easily access all of your services in one place. It integrates with the services you use to display information on the homepage and helps your organize your services."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <HomepageShowcase />
      </main>
    </Layout>
  );
}
