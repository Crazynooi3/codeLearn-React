import inputRouls from "./InputRules";
// console.log(inputRouls);

const validateInput = (value, rules) => {
  //   console.log("validator =>", value, validations);

  let errors = [];

  for (const rule of rules) {
    // console.log(rule.type);
    // console.log(inputRouls.REQUIRED);
    // console.log(errors);

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
      if (!value.trim().includes("@")) {
        errors.push("ایمیل نامعتبر است");
      }
    }
  }
  //   console.log(validationRouls);
  return {
    isValid: errors.length === 0,
    errors,
  };
};

export default validateInput;
