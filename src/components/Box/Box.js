import React from 'react';

import BoxItem from './BoxItem/BoxItem'
import styles from './Box.module.scss'
import { boxItems } from '../../data/boxItems';

const Box = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.inner}>
        {boxItems.map((item, key) => (
          <BoxItem key={key} {...item} />
        ))}
      </div>
    </div>
  </div>
);

export default Box;