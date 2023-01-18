import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Sleek and modern design',
    Svg: require('@site/static/img/undraw_illustrations/modern_design.svg').default,
    description: (
      <>
        Homarr is designed to be modern and sleek. It is built with the latest technologies and is
        easy to use
      </>
    ),
  },
  {
    title: 'Integrate your apps',
    Svg: require('@site/static/img/undraw_illustrations/integrate.svg').default,
    description: (
      <>
        Homarr seamlessly integrates with the apps you've added, providing you with valuable
        information and giving you complete control.
      </>
    ),
  },
  {
    title: 'Open source and free',
    Svg: require('@site/static/img/undraw_illustrations/open_source.svg').default,
    description: (
      <>
        Homarr is open source and free to use. You can use it for personal or commercial projects.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <h2 className={styles.featuresTitle} id="features">
        A quick glance at our features 👀
      </h2>

      <div className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
