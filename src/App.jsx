import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Account from "./Components/Account";

React;
const App = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold">
        Firebase Auth & Context
      </h1>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
};

export default App;
