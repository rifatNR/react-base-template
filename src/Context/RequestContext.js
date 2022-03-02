import axios from 'axios';
import React, {createContext, useReducer} from 'react'
import { requestReducer } from "./RequestReducer";

export const RequestContext = createContext();

const RequestContextProvider = (props) => {

    const initialState = {
        // ! Basic Control States
        is_submit_enabled: false,
        
        // ! Request related core Data
        id: null,
        type: 'simple',
        status: 'companies',
        action: 'save',

        // ! Request Form related Data
        title: null,
        transport_type: null,
        pickup_date: null,
        pickup_start_time: null,
        pickup_end_time: null,
        delivery_start_time: null,
        delivery_end_time: null,
        pickup_address: null,
        delivery_address: null,
        pickup_comment: null,
        pickup_attachment: null,
    }

    const [state, dispatch] = useReducer(requestReducer, initialState)

    const ChangeType = async (type) => {
        dispatch({ type: "CHANGE_TYPE", payload: type });
        const status = type === 'simple' ? 'init' : 'pickup1'
        dispatch({ type: "CHANGE_STATUS", payload: status });
        // TODO: Clear Form
    };
    const ChangeValue = async (name, value) => {
        console.log(`${name}: ${value}`);
        dispatch({ type: "CHANGE_VALUE", payload: {name, value} });
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
            // ! Basic Control States
            is_submit_enabled: state.is_submit_enabled,

            // ! Request related core Data
            id: state.id,
            type: state.type,
            status: state.status,
            
            // ! Request Form related Data
            title: state.title,
            transport_type: state.transport_type,
            pickup_date: state.pickup_date,
            pickup_start_time: state.pickup_start_time,
            pickup_end_time: state.pickup_end_time,
            delivery_start_time: state.delivery_start_time,
            delivery_end_time: state.delivery_end_time,
            pickup_address: state.pickup_address,
            delivery_address: state.delivery_address,
            pickup_comment: state.pickup_comment,
            pickup_attachment: state.pickup_attachment,

            // ! Functions
            ChangeType,
            ChangeValue,
            LoadRequest,
        }}
      >
        {props.children}
      </RequestContext.Provider>
    );
}

export default RequestContextProvider;
