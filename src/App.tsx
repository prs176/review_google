import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/login/Login";
import Search from "./page/search/Search";
import My from "./page/my/My";
import Register from "./page/register/Register";
import Main from "./page/main/Main";
import DetailSubject from "./page/detailReview/DetailSubject";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my" element={<My />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/detail" element={<DetailSubject />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
