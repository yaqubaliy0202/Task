import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./ProtectedRoute/index";
import CrudePage from "./pages/crud/index";
import SignInPage from "./pages/auth/SignIn/index";
import SignUpPage from "./pages/auth/SignUp/index";
import DashboardPage from "./user/Dashboard";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/userPage/usersPage";
import Header from "./src/pages/nav/nav";
function App() {
  const user = localStorage.getItem("user");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUpPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/usersPage" element={<UsersPage />} />
          <Route path="/signin" element={<SignInPage />} />
          {/* <Route path="/header" element={<H/>}/> */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/crudePage" element={<CrudePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
