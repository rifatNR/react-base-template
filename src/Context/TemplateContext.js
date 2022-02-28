import axios from 'axios';
import React, {createContext, useReducer} from 'react'
import { templateReducer } from "./TemplateReducer";

export const TemplateContext = createContext();

const TemplateContextProvider = (props) => {

    const initialState = {
        data: []
    }

    const [state, dispatch] = useReducer(templateReducer, initialState)

    const xFunction = async (formData) => {
      try {
        const res = await axios.post("Random URL", formData);
        console.log(res.data);
        if (res.data.success) {
          dispatch({ type: "SET_DATA", payload: res.data });
        } else {
          console.log(res.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <TemplateContext.Provider
        value={{
          data: state.data,
          xFunction,
        }}
      >
        {props.children}
      </TemplateContext.Provider>
    );
}

export default TemplateContextProvider;
