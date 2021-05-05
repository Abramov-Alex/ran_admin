import React, {Component} from "react";
import {BackTop, Layout, ConfigProvider} from "antd";
import Parallax from 'react-parallax-scroll';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {VerticalAlignTopOutlined} from "@ant-design/icons";
import "ant-design-pro/dist/ant-design-pro.css";
import Menu from './menu/menu'
import Main from "./content/main";
import Ptni from "./content/coordinator/expertise/ptni";
import Events from "./content/coordinator/main/events";
import Dashboard from "./content/coordinator/main/dashboard";
import News from "./content/coordinator/main/news";
import 'moment/locale/ru';
import ruRU from "antd/lib/locale/ru_RU";

const {Content} = Layout;

export default class Index extends Component {
    render() {
        return (
            <ConfigProvider locale={ruRU}>
                <Router>
                    <BackTop>
                        <div className="backToTop">
                            <VerticalAlignTopOutlined/>
                        </div>
                    </BackTop>
                    <Parallax>
                        <Menu/>
                        <Content className="site-layout">
                            <div className="bgheader"/>
                            {/*<Ptni />*/}
                            <Switch>
                                <Route path="/" exact component={Main}/>
                                <Route path="/events" exact>
                                    <Events/>
                                </Route>
                                <Route path="/dashboard" exact>
                                    <Dashboard/>
                                </Route>
                                <Route path="/news" exact>
                                    <News/>
                                </Route>
                                <Route path="/ptni" exact>
                                    <Ptni/>
                                </Route>
                            </Switch>
                        </Content>
                    </Parallax>
                </Router>
            </ConfigProvider>
        )
    }
}
