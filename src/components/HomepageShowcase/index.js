import React from 'react';
import { IconExternalLink } from '@tabler/icons';

import styles from './styles.module.css';

export default function HomepageShowcase() {
  return (
    <section className={styles.showcase}>
      <h2 className={styles.showcaseText}>See a live demo ✨</h2>

      <video className={styles.showcaseImage} controls preload='auto' autoplay >
        <source src="/img/videos/showcase.mp4" type="video/mp4" />
          <p>
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
        </p>
      </video>

      <a className={styles.showcaseButton} href="https://demo.homarr.dev/" target={'_blank'}>
        Go to demo <IconExternalLink />
      </a>
    </section>
  );
}
