import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import AdminPage from "../pages/AdminPage/AdminPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";
import { isLoginSelector } from "../util/TokenAtom";
import ProtectedRoute from "./ProtectedRoute";
import Header from "../layout/Header";

const App = () => {
  const isLogin = useRecoilValue(isLoginSelector);

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
