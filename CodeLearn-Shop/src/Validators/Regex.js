const regexEmail = (Value) => {
  const emailPattern = /[a-z-A-z-0-9]+@[a-z-A-Z]+\.+[a-z-A-Z]{2,3}$/g;
  return emailPattern.test(Value);
};

export default {
  regexEmail,
};
