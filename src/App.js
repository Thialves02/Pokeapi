import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home'
import './App.css'
import CtxApp from './context/CtxApp';
import Time from './Pages/Time/Time';

export default function App() {
    return (
        <>
        <CtxApp>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact={true} component ={Home}/>
                    <Route path='/time' exact={true} component ={Time}/>
                </Switch>
            </Router>
        </CtxApp>
        </>
    )
}
