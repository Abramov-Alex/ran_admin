import React, {Component} from "react";
import {Layout, Menu, Affix} from "antd";
import {Link} from "react-router-dom";
import {NotificationOutlined, ProfileOutlined, ExclamationCircleOutlined, BarChartOutlined} from '@ant-design/icons';
import 'moment/locale/ru';

const { SubMenu } = Menu;
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
                        {/*<SubMenu key="4" icon={<ProfileOutlined />} title="Дополнительно">*/}
                        {/*    <Menu.Item key="5"> ... </Menu.Item>*/}
                        {/*    <Menu.Item key="6"> ... </Menu.Item>*/}
                        {/*    <Menu.Item key="7"> ... </Menu.Item>*/}
                        {/*</SubMenu>*/}
                    </Menu>
                </Affix>
            </Sider>
        )
    }
}