import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Profile from "./components/Dashboard/Profile";
import Home from "./components/home";
import Weather from "./components/apis/weather";
import Stocks from "./components/apis/stock";
import { AuthProvider } from "./contexts/authContext";
import DashNewsFeed from "./components/apis/newfeed";

/**
 *Routing for the web-app
 *
 * @return {*} 
 */

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Header /> */}
        <div className="w-full h-screen flex flex-col">
          <Routes>
            
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path='/profile' element={<Profile/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/newfeed" element={<DashNewsFeed />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/stocks" element={<Stocks />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
