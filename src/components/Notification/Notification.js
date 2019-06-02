import React, { Fragment } from "react";

import classNames from "classnames";

import styles from "./Notification.module.scss";

const Notification = (props) => (
  <Fragment>
    <div className={styles.wrapper}>
      <div className={styles.content}>{props.text}</div>
    </div>
  </Fragment>
);

export default Notification;
