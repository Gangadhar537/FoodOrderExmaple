import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>A React Meals</h2>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="delicious food pic" />
      </div>
    </Fragment>
  );
};

export default Header;
