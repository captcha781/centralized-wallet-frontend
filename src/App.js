import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import Navigation from "./components/Navigation";

import Home from "./pages/Home"
import Deposit from "./pages/Deposit"
import WithDraw from "./pages/Withdraw"
import fetchServerInfo from "./functions/fetchServerInfo";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchServerInfo(dispatch)
  },[dispatch])

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<WithDraw />} />
      </Routes>
      <ToastContainer autoClose={true} position="top-center" transition={"bounce"}  />
    </BrowserRouter>
  );
}

export default App;
