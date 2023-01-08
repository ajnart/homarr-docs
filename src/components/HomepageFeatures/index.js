import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modern and Simple Design',
    Svg: require('@site/static/img/undraw_illustrations/modern_design.svg').default,
    description: (
      <>
        Homarr has a simple yet modern design for organizing all of your services in a central place
        📦
      </>
    ),
  },
  {
    title: 'Integrate existing services easily',
    Svg: require('@site/static/img/undraw_illustrations/integrate.svg').default,
    description: (
      <>
        Homarr lets you integrate your existing services and applications quick and easily.
        Integrations can be tailored and configured to your needs 🖌️
      </>
    ),
  },
  {
    title: 'Open Source and active community',
    Svg: require('@site/static/img/undraw_illustrations/open_source.svg').default,
    description: (
      <>
        Homarr is open source and licensed under MIT. Users are welcome to contribute or suggest
        improvements 💪
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
        Features
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
