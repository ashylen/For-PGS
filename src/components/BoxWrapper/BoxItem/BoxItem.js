import React from "react";
import PropTypes from 'prop-types';
import './BoxItem.css';

const BoxItem = ({
    image,
    heading,
    description
}) => (
  <div className="boxItem__wrapper">
    <div className="boxItem__inner">
      <div>
        <div
          className="boxItem__image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="boxItem__text-wrapper">
        <h2 className="boxItem__heading">{heading}</h2>
        <p className="boxItem__description">{description}</p>
      </div>
    </div>
  </div>
);

BoxItem.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string
};

BoxItem.defaultProps = {
    description: 'Default description - Lorem ipsum ...'
};
export default BoxItem;
