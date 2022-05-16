import React from "react";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SignIn from "./components/body/authentication/Login";
import SignUp from "./components/body/authentication/Signup";
import ResetPassword from "./components/body/authentication/ResetPassword";
import { useSelector } from "react-redux";
import Tasks from "./components/body/tasks/Tasks";

function App() {
  // const store = createStore(rootReducer);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="App">
      <Header />
      {/* <Tasks/> */}
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={!isAuth ? <SignIn /> : <Tasks />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
