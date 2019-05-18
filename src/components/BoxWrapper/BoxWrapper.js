import React from 'react';
import BoxItem from './BoxItem/BoxItem'
import styles from './BoxWrapper.module.scss'
import { boxItems } from '../../data/boxItems';

const BoxWrapper = () => (
  <div className={styles.wrapper}>
    {boxItems.map((item, key) => (
      <BoxItem key={key} {...item} />
    ))}
  </div>
);

export default BoxWrapper;