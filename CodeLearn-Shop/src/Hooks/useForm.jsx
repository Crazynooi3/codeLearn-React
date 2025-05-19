import { useReducer } from "react";
import validateInput from "../Validators/validateInput";

const formStateReducer = (state, action) => {
  console.log(state.inputs[action.inputID]);

  switch (action.type) {
    case "UPDATE_INPUT": {
      let isFormValid = true;
      const updatedInputs = {
        ...state.inputs,
        [action.inputID]: {
          value: action.value,
          isValid: action.isValid,
          errors: action.errors,
          validations: state.inputs[action.inputID].validations,
        },
      };

      for (const inputID in updatedInputs) {
        isFormValid = isFormValid && updatedInputs[inputID].isValid;
      }

      return {
        inputs: updatedInputs,
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
    // errors: [],
  });
  console.log(formState);

  const onInputChange = (id, value, isValid, errors) => {
    dispatch({
      type: "UPDATE_INPUT",
      value,
      isValid,
      inputID: id,
      errors,
    });
  };
  return [formState, onInputChange];
};
