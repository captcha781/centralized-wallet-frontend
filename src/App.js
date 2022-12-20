import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import Navigation from "./components/Navigation";

import Home from "./pages/Home"
import Deposit from "./pages/Deposit"
import WithDraw from "./pages/Withdraw"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Transfer from "./pages/Transfer"

import HelperRoutes from "./config/HelperRoute"
import store from "./redux/store"

import fetchServerInfo from "./functions/fetchServerInfo";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./config/ProtectedRoutes";
import isLogin from "./functions/isLogin";
import decodeJWT from "./functions/decodeJWT"
import getAuthToken from "./functions/getAuthToken"

function App() {
  const dispatch = useDispatch()
  const { auth } = store.getState().auth

  useEffect(() => {
    fetchServerInfo(dispatch)
  }, [dispatch])

  useEffect(() => {
    if (!auth && isLogin()) {
      decodeJWT(getAuthToken(), store.dispatch);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <HelperRoutes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deposit" element={<ProtectedRoute type={"private"} children={<Deposit />} />} />
        <Route path="/withdraw" element={<ProtectedRoute type={"private"} children={<WithDraw />} />} />
        <Route path="/transfer" element={<ProtectedRoute type={"private"} children={<Transfer />} />} />
        <Route path="/signin" element={<ProtectedRoute type={"auth"} children={<Signin />} />} />
        <Route path="/signup" element={<ProtectedRoute type={"auth"} children={<Signup />} />} />
      </Routes>
      <ToastContainer autoClose={true} position="top-center" transition={"bounce"} />
    </BrowserRouter>
  );
}

export default App;
