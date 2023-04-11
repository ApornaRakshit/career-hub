import React from "react";
import Header from './components/Header'
import Card from "./components/card";

import { Outlet } from "react-router-dom";
const App = () => {
    return (
        <div>
           <Header />
           <Outlet />
           <Card />
        </div>
    )
}

export default App 