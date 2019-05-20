import React, { Fragment } from "react";

import styles from "./Notification.module.scss";

const Notification = React.forwardRef((props, ref) => (
  <Fragment>
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.content}>{props.text}</div>
    </div>
  </Fragment>
));

export default Notification;
