import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home/Home";
import ProtectedRoute from "./Utility/ProtectedRoute";
import AxiosHeader from "./Utility//AxiosHeader";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Context/AuthContext";
import RandomPage from "./Pages/RandomPage/RandomPage";
import Error404 from "./Pages/Errors/Error404";


if (localStorage.limadi_token) {
  AxiosHeader(localStorage.limadi_token)
} else {
  AxiosHeader()
}


function App() {
  const { isAuth, LoadUser } = useContext(AuthContext);

  useEffect(() => {
    if(!isAuth) LoadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Error404/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/' element={<Home/>}/>
        </Route>
        <Route exact path='/random-page' element={<ProtectedRoute/>}>
            <Route exact path='/random-page' element={<RandomPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
