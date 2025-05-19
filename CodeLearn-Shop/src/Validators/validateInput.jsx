import inputRouls from "./InputRules";
import Regex from "./Regex";

const validateInput = (value, rules, formState, inputId) => {
  let errors = [];

  for (const rule of rules) {
    if (rule.type === inputRouls.REQUIRED) {
      if (value.trim().length === 0) {
        errors.push("فیلد اجباری است");
      }
    }
    if (rule.type === inputRouls.MIN_LENGTH) {
      if (value.trim().length < rule.min) {
        errors.push(`حداقل ${rule.min} کاراکتر`);
      }
    }
    if (rule.type === inputRouls.MAX_LENGTH) {
      if (value.trim().length > rule.max) {
        errors.push(`حداکثر ${rule.max} کاراکتر`);
      }
    }
    if (rule.type === inputRouls.EMAIL) {
      if (!Regex.regexEmail(value)) {
        errors.push("ایمیل نامعتبر است");
      }
    }
    if (
      rule.type === inputRouls.CONFIRM_PASSWORD &&
      inputId === "confirmPassword"
    ) {
      const passwordValue = formState?.inputs?.password?.value || "";
      if (value !== passwordValue) {
        errors.push("تکرار رمز عبور با رمز عبور مطابقت ندارد");
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export default validateInput;
