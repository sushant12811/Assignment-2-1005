import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Profile from "./components/Dashboard/Profile";
import Home from "./components/home";
import Weather from "./components/apis/weather";
import Stocks from "./components/apis/stock";
import { AuthProvider } from "./contexts/authContext";
import DashNewsFeed from "./components/apis/newfeed";
import Sidebar from "./components/Dashboard/Sidebar"; 
import Navbar from "./components/Dashboard/Navbar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />

          
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/newfeed" element={<DashNewsFeed />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/stocks" element={<Stocks />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}


//render with sidebar
function PrivateRoute() {
  return (
    <div className="flex-direction-row">
      <Sidebar /> 
      <Navbar></Navbar>
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/newfeed" element={<DashNewsFeed />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/stocks" element={<Stocks />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
