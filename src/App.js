import "./App.css";
import React from "react";


import ReactDOM from 'react-dom/client';
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import 'antd/dist/antd.css';
import { Navbar,Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News } from "./components/indexExport";



function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes" >
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/crypto/:uuid" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/" element={<Homepage />} />
            </Routes>
          </div>
        </Layout>
      <div className="footer" >
        <Typography.Title  level={5} style={{color:'white', textAlign:'center'}}>
          Cryptoverse <br/>
          All Rights Reserved 
        </Typography.Title>
        <Space>
          <Link to="./">Home</Link>
          <Link to="./exchanges">Exchanges</Link>
          <Link to="./News">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;