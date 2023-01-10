import React from 'react';
import { IconExternalLink } from '@tabler/icons';

import styles from './styles.module.css';

export default function HomepageShowcase() {
  return (
    <section className={styles.showcase}>
      <h2 className={styles.showcaseText}>See a live demo ✨</h2>
      <img
        className={styles.showcaseImage}
        src="/img/gifs/showcase.gif"
        alt="Homarr showcase GIF"
      />

      <a className={styles.showcaseButton} href="https://homarr.ajnart.fr/" target={'_blank'}>
        Go to demo <IconExternalLink />
      </a>
    </section>
  );
}
