import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, GetProducts, PostProducts, ProductDetail, ProductUpdate, Login} from "./components";

function App() {

  return (
    <div className="App">
        <Router>
          <Navigation />
            <Routes>
                <Route path="/flipkart_react" element={< Home />} />
                <Route path="/product/get" element={< GetProducts />} />
                <Route path="/product/post" element={< PostProducts />} />
                <Route path="/product/:id" element={< ProductDetail />} />
                <Route path="/product/:id/update" element={< ProductUpdate />} />
                <Route path="/login" element={< Login />} />
            </Routes>
        </Router>
    </div>
  )
  }


export default App;
