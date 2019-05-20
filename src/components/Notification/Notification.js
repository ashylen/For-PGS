import React, { Fragment } from "react";

import styles from "./Notification.module.scss";

const Notification = props => (
  <Fragment>
    <div id={props.id} className={styles.wrapper}>
      <div className={styles.content}>{props.text}</div>
    </div>
  </Fragment>
);

export default Notification;
