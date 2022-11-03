import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/login/Login";
import Search from "./page/search/Search";
import My from "./page/my/My";
import Register from "./page/register/Register";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/my" element={<My />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
