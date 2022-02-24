import axios from 'axios';
import React, {createContext, useReducer} from 'react'
import { auth_user_url, login_url, register_url } from '../Utility/url';
import { authReducer } from "./AuthReducer";
import AxiosHeader from "../Utility/AxiosHeader";

export const AuthContext = createContext();


const AuthContextProvider = (props) => {

    const initialState = {
        token: localStorage.getItem('limadi_token'),
        isAuth: false,
        auth_loading: false,
        loading: true,
        user: null,
        active_route: localStorage.getItem('limadi_active_route') ?? '/dashboard',
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const LoadUser = async () => {
        if(localStorage.limadi_token) {
            AxiosHeader(localStorage.limadi_token)
        }
        try {
            dispatch({ type: "USER_LOADING", payload: true });
            const res = await axios.get(auth_user_url)
            console.log(res.data)
            if(res.data.success)
                dispatch({type: "LOAD_USER", payload: res.data.data})
            else {
              dispatch({ type: "USER_LOADING", payload: false });
              console.log(res.data.message)
            }
        } catch(err) {
            dispatch({ type: "USER_LOADING", payload: false });
            console.log(err)
        }
    }

    const Login = async (formData) => {
      try {
        dispatch({ type: "AUTH_LOADING", payload: true });
        const res = await axios.post(login_url, formData);
        console.log(res.data);
        if (res.data.success) {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          dispatch({ type: "AUTH_LOADING", payload: false });
          LoadUser();
        } else {
          dispatch({ type: "AUTH_LOADING", payload: false });
          console.log(res.data.message);
        }
      } catch (err) {
        dispatch({ type: "AUTH_LOADING", payload: false });
        console.log(err);
      }
    };

    const Register = async (formData) => {
      try {
        dispatch({ type: "AUTH_LOADING", payload: true });
        const res = await axios.post(register_url, formData);
        console.log(res.data);
        if (res.data.success) {
          dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
          dispatch({ type: "AUTH_LOADING", payload: false });
          LoadUser();
        } else {
          dispatch({ type: "AUTH_LOADING", payload: false });
          console.log(res.data.message);
        }
      } catch (err) {
        dispatch({ type: "AUTH_LOADING", payload: false });
        console.log(err);
      }
    };

    const Logout = async () => {
      if (localStorage.limadi_token) {
        AxiosHeader(localStorage.limadi_token);
      }

      try {
        const res = await axios.post("/auth/logout");
        console.log(res.data);
        if (res.data.success) dispatch({ type: "LOGOUT" });
        else console.log(res.data.message);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <AuthContext.Provider
        value={{
          token: state.token,
          isAuth: state.isAuth,
          user: state.user,
          loading: state.loading,
          auth_loading: state.auth_loading,
          active_route: state.active_route,
          Login,
          Register,
          LoadUser,
          Logout,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
}

export default AuthContextProvider;
