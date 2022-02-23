import axios from "axios";
import BaseUrl from "./url";

const AxiosHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }

  axios.defaults.baseURL = BaseUrl;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common['app_role'] = 'customer'; // TODO: Make it dynamic
};

export default AxiosHeader;



// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//     'role': 'sa'
//   }
// }

// export {config}