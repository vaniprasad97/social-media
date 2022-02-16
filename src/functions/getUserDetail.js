export const getUserDetail = (value) => {
  const loggedinUser = JSON.parse(localStorage.getItem("selectedUser"));
  return loggedinUser[value];
};
