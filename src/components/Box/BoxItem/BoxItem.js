import React from "react";

import PropTypes from 'prop-types';
import styles from './BoxItem.module.scss';

const BoxItem = ({ image, heading, description }) => (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
      <div>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className={styles.text_wrapper}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  </div>
);

BoxItem.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string
};

BoxItem.defaultProps = {
    description: 'Default description - Lorem ipsum ...'
};
export default BoxItem;
