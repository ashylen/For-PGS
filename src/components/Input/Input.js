import React from "react";

import PropTypes from "prop-types";
import styles from "./Input.module.scss";
import classNames from "classnames";

const Input = ({
  tag: Tag,
  name,
  label,
  value,
  required,
  onChangeFn,
  errorMsg
}) => (
  <div
    className={classNames({
      [styles.formItem]: true,
      [styles.formItemInvalid]: errorMsg ? true : false
    })}
  >
    <Tag
      className={styles.formItemInput}
      type="text"
      name={name}
      id={name}
      placeholder=" "
      value={value}
      required={required ? 1 : 0}
      onChange={onChangeFn}
    />
    <label className={styles.formItemLabel} htmlFor={name}>
      {label}
      {required
        ? [
            <sup key={name} className={styles.required}>
              *
            </sup>
          ]
        : ""}
    </label>
    <div className={styles.formItemBar} />
    {errorMsg ? <div className={styles.errorMsg}>{errorMsg}</div> : ""}
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

Input.defaultProps = {
  tag: "input"
};

export default Input;
