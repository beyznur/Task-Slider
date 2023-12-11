import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from './pages/Home';   /* --Slider Screen-- */
import JewelryDetail from './pages/JewelryDetail';  /* --Ring Detail-- */

import Header from "../src/components/Header";

function App() {
   return (
      <BrowserRouter >
        <Header />
        <Routes >
            <Route index element={<Home />} /> 
            <Route path="jewelry/:id" element={<JewelryDetail/>} /> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;
