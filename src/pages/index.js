import React from 'react';

import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import { IconDownload } from '@tabler/icons';
import { IconInfoCircle } from '@tabler/icons';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageShowcase from '@site/src/components/HomepageShowcase';
import HomepageUserReviews from '../components/HomepageUserReviews';

import styles from './index.module.css';
import CtaSection from '../components/CTA/ctaSection';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.hero)}>
      <div className="container" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col">
            <h1>A simple, yet powerful dashboard for your server.</h1>
            <p>
              Simplify the management of your server with Homarr - a sleek, modern dashboard that
              puts all of your apps and services at your fingertips. With Homarr, you can access and
              control everything in one convenient location. Homarr seamlessly integrates with the
              apps you've added, providing you with valuable information and giving you complete
              control. Installation is a breeze, and Homarr supports a wide range of deployment
              methods.
            </p>

            <div className={styles.heroButtons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.heroButton)}
                to="/docs/about"
              >
                Learn More
                <IconInfoCircle size={20} />
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.heroButton)}
                to="/docs/introduction/installation"
              >
                Install
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
            <ThemedDevicePreview />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={'Home'}
      description="Simplify the management of your server with Homarr - a sleek, modern dashboard that puts all of your apps and services at your fingertips. With Homarr, you can access and control everything in one convenient location. Homarr seamlessly integrates with the apps you've added, providing you with valuable information and giving you complete control. Installation is a breeze, and Homarr supports a wide range of deployment methods."
    >
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
          d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,149.3C672,139,768,85,864,58.7C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <main className='mx-auto w-full md:w-2/3 ps-10 pr-10'>
        <HomepageFeatures />
        <HomepageShowcase />
        <HomepageUserReviews />
        <CtaSection />
      </main>
    </Layout>
  );
}

const ThemedDevicePreview = () => {
  const { colorMode } = useColorMode();

  return (
    <img
      className={styles.heroImage}
      src={`/img/pictures/homarr-devices-preview/compressed/homarr-devices-2d-mockup-flat-shadow-${colorMode}-compressed.webp`}
      style={{
        filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))',
      }}
    />
  );
};
