import React from 'react';
import { IconArrowRight } from '@tabler/icons';

import styles from './styles.module.css';

export default function HomepageInstallNow() {
  return (
    <section className={styles.installNow}>
      <h2 className={styles.installNowText}>Install Homarr now 🚀</h2>
      <a className={styles.installNowButton} href="/docs/about">
        Read the docs <IconArrowRight />
      </a>
    </section>
  );
}
