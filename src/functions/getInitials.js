export const getInitials = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("selectedUser"));
    const initials= loggedInUser.name.match(/\b(\w)/g).join("");
    return initials
}
