import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styles from "./CamItem.module.scss";

const CamItem = props => (
  <Fragment>
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.itemDate}>{props.date}</div>
        <div className={styles.itemHeading}>{props.heading}</div>
        <div className={styles.itemImage}>
          {props.images}
        </div>
      </div>
    </div>
  </Fragment>
);

CamItem.propTypes = {
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

CamItem.defaultProps = {
  description: "Default description - Lorem ipsum ..."
};
export default CamItem;
