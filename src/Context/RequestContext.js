import axios from 'axios';
import React, {createContext, useReducer} from 'react'
import { requestReducer } from "./RequestReducer";

export const RequestContext = createContext();

const RequestContextProvider = (props) => {

    const initialState = {
        id: null,
        type: 'simple',
        status: 'init',
    }

    const [state, dispatch] = useReducer(requestReducer, initialState)

    const ChangeType = async (type) => {
        dispatch({ type: "CHANGE_TYPE", payload: type });
        const status = type === 'simple' ? 'init' : 'pickup1'
        dispatch({ type: "CHANGE_STATUS", payload: status });
    };
    
    const LoadRequest = async (formData) => {
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
      <RequestContext.Provider
        value={{
            id: state.id,
            type: state.type,
            status: state.status,
            ChangeType,
            LoadRequest,
        }}
      >
        {props.children}
      </RequestContext.Provider>
    );
}

export default RequestContextProvider;
