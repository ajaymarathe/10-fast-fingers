import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap-spinner';


import Home from "./Pages/Home";
import Login from "./Pages/Login";
import WordBox from "./Components/WordBox";
import Navbar from "./Components/Navbar";
import Keyboard from "react-keyboard-package";
import { getParagraph } from "./ApiServices/paragraphService";

function App() {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
