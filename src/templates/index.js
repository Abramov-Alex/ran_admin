import React, {Component} from "react";
import {Layout, BackTop} from "antd";
import Parallax from 'react-parallax-scroll';
import {VerticalAlignTopOutlined} from "@ant-design/icons";
import "ant-design-pro/dist/ant-design-pro.css";
import Menu from './menu/menu'
import Main from "./content/main/main";

const {Content} = Layout;

export default class Index extends Component {
    render() {
        return (
            <>
                <BackTop>
                    <div className="backToTop">
                        <VerticalAlignTopOutlined/>
                    </div>
                </BackTop>
                <Parallax>
                    <Menu />
                    <Content className="site-layout">
                        <div className="bgheader"/>
                        <Main />
                    </Content>
                </Parallax>
            </>
        )
    }
}
