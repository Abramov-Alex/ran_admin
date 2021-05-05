import React from "react";
import "antd/dist/antd.css";
import "./css/base.css"
import "./css/responcive.css"
import Index from "./templates/index";
import {Provider} from "react-redux";
import {store} from "./store";

export default function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Index/>
            </div>
        </Provider>
    );
}
