import { BackTop } from "antd";
import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BackTop />
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
