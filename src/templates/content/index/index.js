import React, {Component} from "react";
import Login from "./login"
import Statistics from "./statistics"
import Documents from "./documents"
import Contacts from "./contacts"

export default class Index extends Component {
    render() {
        return(
            <>
                <Login />
                <Statistics />
                <Documents />
                <Contacts />
            </>
        )
    }
}