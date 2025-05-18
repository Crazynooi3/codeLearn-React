import { useReducer } from "react";

const formStateReducer = (state, action) => {
  //   console.log(state.inputs);

  switch (action.type) {
    case "UPDATE_INPUT": {
      let isFormValid = true;
      for (const inputID in state.inputs) {
        if (inputID === action.inputID) {
          isFormValid = isFormValid && action.isValid;
        } else {
          isFormValid = isFormValid && state.inputs[inputID].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputID]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isFormValid: isFormValid,
      };
    }

    default: {
      return state;
    }
  }
};

export const useForm = (initInputs, initIsFormValid) => {
  const [formState, dispatch] = useReducer(formStateReducer, {
    inputs: initInputs,
    isFormValid: initIsFormValid,
  });

  const onInputChange = (id, value, isValid) => {
    dispatch({
      type: "UPDATE_INPUT",
      value,
      isValid,
      inputID: id,
    });
  };
  return [formState, onInputChange];
};
