import React from "react";
import PropTypes from "prop-types";
import styles from "./CamItem.module.scss";

const CamItem = props => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.itemDate}>{props.date}</div>
        <div className={styles.itemHeading}>{props.heading}</div>
        <div className={styles.itemImage}>
          {props.images}
        </div>
      </div>
    </div>
  </>
);

CamItem.propTypes = {
  heading: PropTypes.string,
  date: PropTypes.string
};

CamItem.defaultProps = {
  description: "Default description - Lorem ipsum ..."
};
export default CamItem;
