export const authReducer = (state, action) => {
    switch (action.type) {
      case "USER_LOADING":
        return {
          ...state,
          loading: action.payload,
        };
      case "AUTH_LOADING":
        return {
          ...state,
          auth_loading: action.payload
        };
      case "LOAD_USER":
        return {
          ...state,
          isAuth: true,
          user: action.payload,
          loading: false,
        };
      case "LOGIN_SUCCESS":
      case "REGISTER_SUCCESS":
        localStorage.setItem("limadi_token", action.payload.data.token);
        return {
          ...state,
          isAuth: true
        };
      case "LOAD_USER_ERROR":
      case "LOGIN_FAIL":
      case "LOGOUT":
        localStorage.removeItem("limadi_token");
        return {
          ...state,
          token: null,
          isAuth: false,
          user: null,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
}