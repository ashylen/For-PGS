import React from 'react';
import BoxItem from './BoxItem/BoxItem'
import './BoxWrapper.css'
import { boxItems } from '../../data/boxItems';

const BoxWrapper = () => (
  <div className="boxWrapper__wrapper">
    {boxItems.map((item, key) => (
      <BoxItem key={key} {...item}/>
    ))}
  </div>
);

export default BoxWrapper;