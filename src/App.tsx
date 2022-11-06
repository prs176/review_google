import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./page/login/LoginPage";
import SearchSubjectPage from "./page/search_subject/SearchSubjectPage";
import MyPage from "./page/my/MyPage";
import RegisterPage from "./page/register/RegisterPage";
import MainPage from "./page/main/MainPage";
import DetailSubjectPage from "./page/detail_subject/DetailSubjectPage";
import path from "path";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my" element={<MyPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/search_subject/" element={<SearchSubjectPage />}></Route>
        <Route path="/search_subject/">
          <Route path=":keyword" element={<SearchSubjectPage />} />
          <Route path="" element={<SearchSubjectPage />} />
        </Route>
        <Route path="/detail_subject/:id" element={<DetailSubjectPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
