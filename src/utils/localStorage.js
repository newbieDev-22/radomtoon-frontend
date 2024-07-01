const ACCESS_TOKEN = "ACCESS_TOKEN";

const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

export { setAccessToken, getAccessToken, removeAccessToken };
