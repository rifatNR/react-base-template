import axios from 'axios';
import React, {createContext, useReducer} from 'react'
import { login_url } from '../Utility/url';
import { authReducer } from "./AuthReducer";

export const AuthContext = createContext();


const AuthContextProvider = (props) => {

    const initialState = {
        token: localStorage.getItem('limadi_token'),
        isAuth: false,
        login_loading: false,
        loading: true,
        user: null,
        active_route: localStorage.getItem('limadi_active_route') ?? '/dashboard',
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const LoadUser = async () => {
        if(localStorage.limadi_token) {
            setDefaultHeader(localStorage.limadi_token)
        }
        try {
            dispatch({ type: "SET_LOADING" });
            const res = await axios.get('/auth/user')
            console.log(res)
            if(res.data.success)
                dispatch({type: "LOAD_USER", payload: res.data})
            else {
              dispatch({ type: "UNSET_LOADING" });
              console.log(res.data.message)
            }
        } catch(err) {
            dispatch({ type: "UNSET_LOADING" });
            console.log(err)
            toast.error("Something went wrong.", { autoClose: 2000, position: toast.POSITION.TOP_CENTER});
        }
    }

    const Login = async (formData) => {
      try {
        dispatch({ type: "LOGIN_LOADING", payload: true });
        const res = await axios.post(login_url, formData);
        console.log(res.data);
        if (res.data.success) {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          dispatch({ type: "LOGIN_LOADING", payload: false });
        //   LoadUser();
        } else {
          dispatch({ type: "LOGIN_LOADING", payload: false });
          console.log(res.data.message);
        //   toast.error(res.data.message, { autoClose: 2000, position: toast.POSITION.TOP_CENTER});
        }
      } catch (err) {
        dispatch({ type: "LOGIN_LOADING", payload: false });
        console.log(err);
      }
    };

    // const Logout = async () => {
    //   if (localStorage.limadi_token) {
    //     setDefaultHeader(localStorage.limadi_token);
    //   }

    //   try {
    //     const res = await axios.post("/auth/logout");
    //     console.log(res.data);
    //     if (res.data.success) dispatch({ type: "LOGOUT" });
    //     else console.log(res.data.message);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    return (
      <AuthContext.Provider
        value={{
          token: state.token,
          isAuth: state.isAuth,
          user: state.user,
          loading: state.loading,
          login_loading: state.login_loading,
          active_route: state.active_route,
          Login,
        //   LoadUser,
        //   Logout,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
}

export default AuthContextProvider;
