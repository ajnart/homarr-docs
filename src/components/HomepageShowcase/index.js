import React from 'react';

import styles from './styles.module.css';

export default function HomepageShowcase() {
  return (
    <section className={styles.showcase}>
      <h2 className={styles.showcaseText}>Simple and modern user interface</h2>
      <img
        className={styles.showcaseImage}
        src="https://user-images.githubusercontent.com/71191962/169860380-856634fb-4f41-47cb-ba54-6a9e7b3b9c81.gif"
        alt="homarr showcase gif"
      />
    </section>
  );
}
