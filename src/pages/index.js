import React, { useCallback } from 'react';
import clsx from 'clsx';
import { IconDownload } from "@tabler/icons";
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageShowcase from '@site/src/components/HomepageShowcase';
import HomepageUserReviews from '../components/HomepageUserReviews';

import styles from './index.module.css';
import StyledDivider from '../components/Divider/StyledDivider';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function HomepageHeader() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.hero)}>
      <div className="container" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col">
            <h1>A modern and leightweight homepage for your server</h1>
            <p>
              Homarr is a simple and modern homepage for your server, that helps you access all of
              your services in one place. It integrates with the services you use to display useful
              information or control them. It's easy to install and supports many different devices.
            </p>

            <div className={styles.heroButtons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.heroButton)}
                to="#features"
              >
                Learn more about Homarr
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.heroButton)}
                to="/docs/quick-start"
              >
                <span>Install</span>
                <IconDownload size={20} />
              </Link>
            </div>

            <div className={clsx(styles.heroButtons, styles.shieldBadges)}>
              <Link to="https://github.com/ajnart/homarr">
                <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
              </Link>
              <Link to="https://discord.com/invite/aCsmEV5RgA">
                <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              className={styles.heroImage}
              src="/img/pictures/homarr-devices-preview.png"
              style={{
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))',
                border: '1px solid #ffffff30'
              }}
            />
          </div>
        </div>
      </div>

      <Particles
        url="/particles/particlesjs-config.json"
        init={particlesInit}
        canvasClassName={styles.particleCanvas}
        style={{ position: 'absolute' }}
      />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="">
      <HomepageHeader />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        className={styles.heroWave}
      >
        <path
          fill="#fa5252"
          fillOpacity="1"
          d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,218.7C672,224,768,256,864,266.7C960,277,1056,267,1152,256C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          data-darkreader-inline-fill=""
        />
      </svg>
      <main>
        <HomepageShowcase />
        <StyledDivider />
        <HomepageFeatures />
        <StyledDivider />
        <HomepageUserReviews />
      </main>
    </Layout>
  );
}