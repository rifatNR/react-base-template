import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home/Home";
import ProtectedRoute from "./Utility/ProtectedRoute";
import AxiosHeader from "./Utility//AxiosHeader";


if (localStorage.maway_token) {
  AxiosHeader(localStorage.maway_token)
} else {
  AxiosHeader()
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login/>} />

        <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
