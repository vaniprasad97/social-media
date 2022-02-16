export const getUserAddress = () => {
  const loggedinUser = JSON.parse(localStorage.getItem("selectedUser"));
    let city = loggedinUser.address.city;
    let suite = loggedinUser.address.suite;
    let street = loggedinUser.address.street;
  return street + " " + suite + " " + city;
};
