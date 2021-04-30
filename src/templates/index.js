import React, {Component} from "react";
import {Layout, BackTop} from "antd";
import Parallax from 'react-parallax-scroll';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {VerticalAlignTopOutlined} from "@ant-design/icons";
import "ant-design-pro/dist/ant-design-pro.css";
import Menu from './menu/menu'
import Main from "./content/index";
import Admin from "./content/coordinator/expertise/admin";
import Events from "./content/coordinator/main/events";
import Dashboard from "./content/coordinator/main/dashboard";
import News from "./content/coordinator/main/news";

const {Content} = Layout;

export default class Index extends Component {
    render() {
        return (
            <Router>
                <BackTop>
                    <div className="backToTop">
                        <VerticalAlignTopOutlined/>
                    </div>
                </BackTop>
                <Parallax>
                    <Menu />
                    <Content className="site-layout">
                        <div className="bgheader"/>
                        {/*<Admin />*/}
                        <Switch>
                            <Route path="/" exact>
                                <Main />
                            </Route>
                            <Route path="/events" exact>
                                <Events />
                            </Route>
                            <Route path="/dashboard" exact>
                                <Dashboard />
                            </Route>
                            <Route path="/news" exact>
                                <News />
                            </Route>
                            <Route path="/admin" exact>
                                <Admin />
                            </Route>
                        </Switch>
                    </Content>
                </Parallax>
            </Router>
        )
    }
}
