export const getUserValidation = (user, formData) => {
  const errors = {};
  const enteredUsername = formData.userName;
  const enteredPassword = formData.passWord;

  user.forEach((item) => {
    if (item.email !== enteredUsername) {
      errors.userName = "Invalid username or password";
    } else if (item.username + "123" !== enteredPassword) {
      errors.passWord = "Invalid username or password";
    } else {
      localStorage.setItem("selectedUser", JSON.stringify(item));
      errors.err = false;
    }
  });
  return errors;
};
