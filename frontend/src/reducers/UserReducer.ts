import TokenService from "../service/TokenService";

const user = (user: any, token: any) => {
  TokenService.setUser(user);
  TokenService.setToken(token);
  return {};
}

export const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...user(action.payload.user, action.payload.token),
        user: action.payload.user,
      };
    default:
      return state;
  }
};
