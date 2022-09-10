import React from 'react';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import GenericReviewContainer, { SocialMediaReview } from '../Reviews';

import styles from './styles.module.css';

export default function HomepageUserReviews() {
  return (
    <div className={styles.swiperContainer}>
      <h2 className={styles.swiperText}>Here's what our community says 🙌</h2>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <SocialMediaReview
            username="Maeglin"
            plattform="Twitter"
            profilePicture="https://pbs.twimg.com/profile_images/1457253211564228608/rTEKzWBT_200x200.jpg"
            fullText="Day 49/100 set up Homarr just for a test spin. It's a nice dashboard and the Arrs integration especialy the calendar is awesome."
            link="https://twitter.com/Maeglin931/status/1555725442744586240"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SocialMediaReview
            username="IBRACORP"
            plattform="Youtube"
            profilePicture="https://ibracorp.io/assets/logo.png"
            fullText="Homarr Is Here To Stay. Here's Why | Selfhosted Homepage"
            link="https://www.youtube.com/watch?v=Mk9ZZiH5qi0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SocialMediaReview
            username="u/uncmnsense"
            plattform="r/selfhosted on Reddit"
            profilePicture="https://styles.redditmedia.com/t5_32hch/styles/communityIcon_b2t5inv46z331.png?width=256&s=5d284561c13dd03558bf82907d5c7438b0eba1f6"
            fullText="Anyone using homarr? check it out, its pretty fancy..."
            link="https://www.reddit.com/r/selfhosted/comments/wqxsk3/anyone_using_homarr_check_it_out_its_pretty_fancy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SocialMediaReview
            username="u/RoachedCoach"
            plattform="r/unRAID on Reddit"
            profilePicture="https://styles.redditmedia.com/t5_2sn94/styles/communityIcon_dvuyt8m6z9y41.png?width=256&s=68c8955c01a2b2284730775ff26cf17a06352655"
            fullText="I enjoy Homarr - mostly because it's very simple, straightforward, and attractive."
            link="https://www.reddit.com/r/unRAID/comments/wk3x2s/comment/ijn4vpg/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SocialMediaReview
            username="u/YankeesIT"
            plattform="r/selfhosted on Reddit"
            profilePicture="https://styles.redditmedia.com/t5_32hch/styles/communityIcon_b2t5inv46z331.png?width=256&s=5d284561c13dd03558bf82907d5c7438b0eba1f6"
            fullText="My Homarr setup"
            link="https://www.reddit.com/r/selfhosted/comments/x84c9v/my_homarr_setup/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GenericReviewContainer>
            <img
              src="/img/undraw_illustrations/undraw_feedback_re_urmj.svg"
              width={200}
              height={200}
              className={styles.communityFeedbackPlaceholderImage}
            />
            <p className={styles.communityFeedbackPlaceholderText}>
              Let us know what you think of Homarr. Send us your honest feedback and we'll include
              it in this page!
            </p>
          </GenericReviewContainer>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
