import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const InputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = InputRef.current.value;
    const enterAmountNumber = +enterAmount;
    if (
      enterAmount.trim().length === 0 ||
      enterAmountNumber < 0 ||
      enterAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={InputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter valid amount 1-5.</p>}
    </form>
  );
};

export default MealItemForm;
