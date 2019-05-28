import React, { Fragment } from "react";

import styles from "./Notification.module.scss";

const Notification = (props, ref) => (
  <Fragment>
    <div className={styles.wrapper}>
      <div className={styles.content}>{props.text}</div>
    </div>
  </Fragment>
);

export default Notification;
