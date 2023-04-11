import React from "react";
import Header from './components/Header'
import Card from "./components/card";
import { Outlet } from "react-router-dom";
import Cards from "./components/Cards";
const App = () => {
    return (
        <div>
           <Header />
           <Outlet />
           <Card />
           <Cards />
        </div>
    )
}

export default App 