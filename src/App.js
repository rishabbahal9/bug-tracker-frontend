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
import store from "./store/index";
import { Provider } from "react-redux";

function App() {
  // const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        {/* <Tasks/> */}
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
}

export default App;
