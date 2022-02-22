export const getUserDetail = (value) => {
  const loggedInUser = JSON.parse(localStorage.getItem("selectedUser"));

  switch (value) {
    case "name":
      return loggedInUser.name;

    case "username":
      return loggedInUser.username;

    case "email":
      return loggedInUser.email;

    case "phone":
      return loggedInUser.phone;

    case "address": {
      let city = loggedInUser.address.city;
      let suite = loggedInUser.address.suite;
      let street = loggedInUser.address.street;
      return street + " " + suite + " " + city;
    }

    case "initials": {
      const loggedInUser = JSON.parse(localStorage.getItem("selectedUser"));
      const initials = loggedInUser.name.match(/\b(\w)/g).join("");
      return initials;
    }
  }
};
