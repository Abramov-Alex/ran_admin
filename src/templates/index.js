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
import Main from "./content/main/main";
import Admin from "./content/cabinet/admin";

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
                        {/*<Main />*/}
                        <Admin />
                    </Content>
                </Parallax>
            </Router>
        )
    }
}
