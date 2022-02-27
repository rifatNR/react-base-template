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
import Layout from "./Components/Layout/Layout";
import LayoutTest from "./Pages/Test/LayoutTest";
import LayoutTest02 from "./Pages/Test/LayoutTest02";
import InBidding from "./Pages/Request/InBidding/InBidding";
import Saved from "./Pages/Request/Saved/Saved";


if (localStorage.limadi_token) {
  AxiosHeader(localStorage.limadi_token)
} else {
  AxiosHeader()
}


function App(props) {
  const { isAuth, LoadUser } = useContext(AuthContext);

  useEffect(() => {
    if(!isAuth) LoadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Routes>

        {/* ========================== 404 Error =========================== */}
        {/* <Route path='*' element={<Error404/>} /> */}
        <Route exact path='/*' element={<ProtectedRoute/>}>
          <Route path='*' element={<Layout {...props}><Error404/></Layout>} />
        </Route>
        {/* ========================== 404 Error =========================== */}

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/' element={<Layout {...props}><Home/></Layout>}/>
        </Route>

        {/* ================= */}
        {/* Request           */}
        {/* ================= */}
        <Route exact path='/request/saved' element={<ProtectedRoute/>}>
            <Route exact path='/request/saved' element={<Layout {...props}><Saved/></Layout>}/>
        </Route>
        <Route exact path='/request/in-bidding' element={<ProtectedRoute/>}>
            <Route exact path='/request/in-bidding' element={<Layout {...props}><InBidding/></Layout>}/>
        </Route>
        
        
        {/********************** Testing Only ***********************/}
        <Route exact path='/random-page' element={<ProtectedRoute/>}>
            <Route exact path='/random-page' element={<RandomPage/>}/>
        </Route>
        <Route path="/layout-test-1" element={<LayoutTest/>} />
        <Route path="/layout-test-2" element={<LayoutTest02/>} />
        {/********************** Testing Only ***********************/}

      </Routes>
    </div>
  );
}

export default App;
