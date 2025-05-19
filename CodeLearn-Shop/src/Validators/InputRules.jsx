const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";
const MAX_LENGTH = "MAX_LENGTH";
const EMAIL = "EMAIL";
const CONFIRM_PASSWORD = "CONFIRM_PASSWORD";

export const requireRule = () => ({
  type: REQUIRED,
});

export const minLengthRule = (min) => ({
  type: MIN_LENGTH,
  min,
});

export const maxLengthRule = (max) => ({
  type: MAX_LENGTH,
  max,
});

export const emailRule = () => ({
  type: EMAIL,
});

export const confirmPasswordRule = () => ({
  type: CONFIRM_PASSWORD,
});

export default { REQUIRED, MIN_LENGTH, MAX_LENGTH, EMAIL, CONFIRM_PASSWORD };
