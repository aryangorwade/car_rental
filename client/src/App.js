import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Add";
import Tasks from "./Tasks";
import Update from "./Update";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
