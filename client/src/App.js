
import './App.css';
import { Navbar } from './components/Navbar';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom"

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
      // console.log(response)
      var responseData = await response.json()
      console.log(responseData)
      if (responseData.user) {
        setUser(responseData.user)
      } else {
        throw new Error("authentication failed")
      }

    }
    getUser()

  }, []);
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/" />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
