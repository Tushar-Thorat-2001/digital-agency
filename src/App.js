import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./screens/Home";
import Studio from "./screens/Studio";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />

        <Box marginX={10}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/studio" element={<Studio />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
