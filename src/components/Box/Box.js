import React from 'react';
import BoxItem from './BoxItem/BoxItem'
import styles from './Box.module.scss'
import { boxItems } from '../../data/boxItems';

const Box = () => (
  <div className={styles.wrapper}>
    {boxItems.map((item, key) => (
      <BoxItem key={key} {...item} />
    ))}
  </div>
);

export default Box;