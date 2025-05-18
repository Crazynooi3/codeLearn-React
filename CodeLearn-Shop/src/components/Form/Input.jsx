import React, { useEffect, useReducer } from "react";
import "./Input.css";

import validateInput from "../../Validators/validateInput";

export default function Input(props) {
  //  User Type somthing => fieldReducer for one field called from onChangeHandler
  const fieldReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE": {
        return {
          ...state,
          value: action.value,
          isValid: validateInput(action.value, action.validations).isValid,
        };
      }

      default: {
        return state;
      }
    }
  };

  // User Type somthing => inputState will Change ( value and isValid)
  const [inputState, dispatch] = useReducer(fieldReducer, {
    value: "",
    isValid: false,
  });

  const { value, isValid } = inputState;

  const { id, onInputChange } = props;

  useEffect(() => {
    onInputChange(id, value, isValid);
  }, [value]);

  const onChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validations: props.validations,
    });
  };
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${
          inputState.isValid === true ? "success" : "error"
        }`}
        value={inputState.value}
        validations={props.validations}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={props.className}
        value={inputState.value}
        validations={props.validations}
        onChange={onChangeHandler}
      />
    );
  return <div>{element}</div>;
}
