import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarPage from "./components/carPage";
import { data } from "./data/data";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={
            <CarPage data={data} searchQuery={searchQuery} currentPage={1} />
          }
        />
        <Route
          path="/page/:page"
          element={<CarPage data={data} searchQuery={searchQuery} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
