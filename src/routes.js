import React from "react";
import { Homepage } from "./homepage/Homepage";
import NotFound from "./homepage/NotFound";
import Drivers from "./drivers/Drivers";
import Vehicles from "./vehicles/Vehicles";
import About from "./about/About";

const ROUTES = [
    {
        path: "/",
        element: <Homepage />,
        children: []
    },
    {
        path: "drivers",
        element: <Drivers />,
        children: []
    },
    {
        path: "vehicles",
        element: <Vehicles />,
        children: []
    },
    {
        path: "about",
        element: <About />,
        children: []
    },
    {
        path: "*",
        element: <NotFound />,
        children: []
    }
]

export default ROUTES