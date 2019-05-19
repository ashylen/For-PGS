import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, label, required }) => (
  <div className={styles.formItem}>
    <Tag
      className={styles.input}
      type="text"
      name={name}
      id={name}
      placeholder=" "
      required={required ? 1 : 0}
    />
    <label className={styles.label} htmlFor={name}>
      {label}{required ? [<sup key={name} className={styles.required}>*</sup>] : ""}
    </label>
    <div className={styles.formItemBar} />
  </div>
);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

Input.defaultProps = {
    tag: 'input'
}

export default Input;