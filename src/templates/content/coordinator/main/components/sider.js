import React, {Component} from "react";
import {Affix, Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import {BarChartOutlined, ExclamationCircleOutlined, NotificationOutlined} from '@ant-design/icons';
import 'moment/locale/ru';

const { Sider } = Layout;

export default class Admin extends Component {

    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return(
            <Sider
                width={230}
                collapsible
                collapsed={collapsed}
                onCollapse={this.onCollapse}>
                <div className="userName">Абрамов А.А.</div>
                <Affix offsetTop={75}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{borderRight: 0, fontFamily: 'Nunito'}}
                    >
                        <Menu.Item
                            key="1"
                            icon={<ExclamationCircleOutlined />}
                        >
                            <Link to="/events">События</Link>
                        </Menu.Item>
                        <Menu.Item
                            key="2"
                            icon={<BarChartOutlined />}
                        >
                            <Link to="/dashboard">Инфопанели</Link>
                        </Menu.Item>
                        <Menu.Item
                            key="3"
                            icon={<NotificationOutlined />}
                        >
                            <Link to="/news">Новости</Link>
                        </Menu.Item>
                    </Menu>
                </Affix>
            </Sider>
        )
    }
}