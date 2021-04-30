import React, {Component} from "react";
import {Layout, Menu, Affix} from "antd";
import {Link} from "react-router-dom";
import {FileTextOutlined, ProfileOutlined, OneToOneOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
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
                            icon={<ProfileOutlined />}
                        >
                            <Link to="/admin">Проекты тематик</Link>
                        </Menu.Item>
                        <Menu.Item
                            key="2"
                            icon={<OneToOneOutlined />}
                        >
                            <Link to="/admin">Планы тематик</Link>
                        </Menu.Item>
                        <Menu.Item
                            key="3"
                            icon={<FileTextOutlined />}
                        >
                            <Link to="/admin">Отчеты НИР</Link>
                        </Menu.Item>
                        <Menu.Item
                            key="4"
                            icon={<AppstoreOutlined />}
                        >
                            <Link to="/admin">Иные карты</Link>
                        </Menu.Item>
                        <Menu.Item
                            key="5"
                            icon={<SettingOutlined />}
                        >
                            <Link to="/admin">Конструктор карт</Link>
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