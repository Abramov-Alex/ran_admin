import React from "react";
import Login from "./login"
import Statistics from "./statistics"
import Documents from "./documents"
import Contacts from "./contacts"

export default function Index(props) {
    return (
        <>
            <Login {...props} />
            <Statistics/>
            <Documents/>
            <Contacts/>
        </>
    )
}