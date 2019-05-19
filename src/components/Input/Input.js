import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, label }) => (
  <div className={styles.formItem}>
    <Tag
      className={styles.input}
      type="text"
      name={name}
      id={name}
      placeholder=" "
      required
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

Input.defaultProps = {
    tag: 'input'
}

export default Input;