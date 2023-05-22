import React from 'react';

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import GenericReviewContainer, { SocialMediaReview } from '../Reviews';

import styles from './styles.module.css';

export default function HomepageUserReviews() {
  const reviews = [
    {
      username: 'Maeglin',
      plattform: 'Twitter',
      profilePicture: '/img/pictures/reviews/maeglin.webp',
      fullText:
        "Day 49/100 set up Homarr just for a test spin. It's a nice dashboard and the Arrs integration especialy the calendar is awesome.",
      link: 'https://twitter.com/Maeglin931/status/1555725442744586240',
    },
    {
      username: 'IBRACORP',
      plattform: 'Youtube',
      profilePicture: '/img/pictures/reviews/ibracorp.webp',
      fullText: "Homarr Is Here To Stay. Here's Why | Selfhosted Homepage",
      link: 'https://www.youtube.com/watch?v=Mk9ZZiH5qi0',
    },
    {
      username: 'u/uncmnsense',
      plattform: 'r/selfhosted on Reddit',
      profilePicture: '/img/pictures/reviews/r_selfhosted.png',
      fullText: 'Anyone using homarr? check it out, its pretty fancy...',
      link: 'https://www.reddit.com/r/selfhosted/comments/wqxsk3/anyone_using_homarr_check_it_out_its_pretty_fancy',
    },
    {
      username: 'u/RoachedCoach',
      plattform: 'r/unRAID on Reddit',
      profilePicture: '/img/pictures/reviews/r_unraid.png',
      fullText:
        "I enjoy Homarr - mostly because it's very simple, straightforward, and attractive.",
      link: 'https://www.reddit.com/r/unRAID/comments/wk3x2s/comment/ijn4vpg/',
    },
    {
      username: 'u/YankeesIT',
      plattform: 'r/selfhosted on Reddit',
      profilePicture: '/img/pictures/reviews/r_selfhosted.png',
      fullText: 'My Homarr setup...',
      link: 'https://www.reddit.com/r/selfhosted/comments/x84c9v/my_homarr_setup/',
    },
  ];

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
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        style={{
          maxWidth: 835,
        }}
      >
        {reviews.map((item) => (
          <SwiperSlide key={`review-${item.username}`}>
            <SocialMediaReview
              username={item.username}
              plattform={item.plattform}
              profilePicture={item.profilePicture}
              fullText={item.fullText}
              link={item.link}
            />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <GenericReviewContainer>
            <img
              src="/img/undraw_illustrations/review.svg"
              width={120}
              height={120}
              className={styles.communityFeedbackPlaceholderImage}
            />
            <p className={styles.communityFeedbackPlaceholderText}>
              Let us know what you think of Homarr! We might include it on this page.
            </p>
          </GenericReviewContainer>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
