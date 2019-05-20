import React from 'react';
import HeaderNavigation from './HeaderNavigation';

import styles from './Header.module.scss';

const Header = () => (
  <header>
    <div className={styles.wrapper}>
      <HeaderNavigation />
    </div>
  </header>
);

export default Header;