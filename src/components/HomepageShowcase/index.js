import React from 'react';

import styles from './styles.module.css';

export default function HomepageShowcase() {
  return (
    <section className={styles.showcase}>
      <h2 className={styles.showcaseText}>Simple yet modern user interface</h2>
      <img
        className={styles.showcaseImage}
        src="/img/gifs/showcase.gif"
        alt="Homarr showcase GIF"
      />
    </section>
  );
}
