import React from "react";
// import Login from './pages/Login'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Homepage/>

            <Routes>
                <Route path="/">
                    
                </Route>
            </Routes>
        </Router>
    )
}