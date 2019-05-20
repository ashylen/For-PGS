import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";
import Logo from "../Logo/Logo"

const HeaderNavigation = () => (
  <nav>
    <div className={styles.navWrapper}>
      <div className={styles.logoWrapper}>
        <NavLink
          exact
          to="/"
        >
          <Logo />
        </NavLink>
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <NavLink
            exact
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/"
          >
            About Us
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/skicams"
          >
            Skicams
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default HeaderNavigation;
