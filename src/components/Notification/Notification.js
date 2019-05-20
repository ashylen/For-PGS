import React from "react";
import styles from "./Notification.module.scss";

const Notification = props => (
  <>
    <div id={props.id} className={styles.wrapper}>
      <div className={styles.content}>{props.text}</div>
    </div>
  </>
);

export default Notification;
