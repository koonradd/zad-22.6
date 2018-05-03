import React, { PropTypes } from "react";
import styles from "./Navigation.css";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <div>
      <Link className={styles["link"]} to="/home">
        Home
      </Link>
      <Link className={styles["link"]} to="/">
        Posts
      </Link>
      <Link className={styles["link"]} to="/about">
        About
      </Link>
    </div>
  );
};

export default Navigation;
