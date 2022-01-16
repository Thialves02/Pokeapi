import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home'
import './App.css'

export default function App() {
    return (
        <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact={true} component ={Home}/>
            </Switch>
        </Router>
        </>
    )
}
