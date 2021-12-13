const getLocalRefreshToken = () => {
  let token = getToken();
  return token?.refresh_token;
};

const getLocalAccessToken = () => {
  let token = getToken();
  return token?.access_token;
};

const updateLocalAccessToken = (access_token: any) => {
  let token = getToken();
  token.access_token = access_token;
  localStorage.setItem("user", JSON.stringify(token));
};

const getUser = () => {
  let getData = localStorage.getItem("user");
  let user = getData ? JSON.parse(getData) : {};
  return user;
};

const setUser = (user: any) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const setToken = (user: any) => {
  localStorage.setItem("token", JSON.stringify(user));
};

const getToken = () => {
  let getData = localStorage.getItem("token");
  let token = getData ? JSON.parse(getData) : {};
  return token;
};

const removeUser = () => {
  localStorage.removeItem("user");
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  setToken,
  removeUser,
  getToken,
};

export default TokenService;
