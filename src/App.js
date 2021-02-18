import React from "react";
import "antd/dist/antd.css";
import "./css/style.css";
import Index from "./templates/index";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
    return (
        <div className="App">
            <ParallaxProvider>
                <Index />
            </ParallaxProvider>
        </div>
    );
}
