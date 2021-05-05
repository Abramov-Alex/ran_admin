import React, {Component} from "react";
import {Affix, Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import {
    AppstoreOutlined,
    FileTextOutlined,
    OneToOneOutlined,
    ProfileOutlined,
    SettingOutlined
} from '@ant-design/icons';
import 'moment/locale/ru';

const { Sider } = Layout;

export default class Ptni extends Component {

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
                            <Link to="/ptni">Проекты тематик</Link>
                        </Menu.Item>
                        <Menu.Item
                            disabled
                            key="2"
                            icon={<OneToOneOutlined />}
                        >
                            <Link to="/ptni">Планы тематик</Link>
                        </Menu.Item>
                        <Menu.Item
                            disabled
                            key="3"
                            icon={<FileTextOutlined />}
                        >
                            <Link to="/ptni">Отчеты НИР</Link>
                        </Menu.Item>
                        <Menu.Item
                            disabled
                            key="4"
                            icon={<AppstoreOutlined />}
                        >
                            <Link to="/ptni">Иные карты</Link>
                        </Menu.Item>
                        <Menu.Item
                            disabled
                            key="5"
                            icon={<SettingOutlined />}
                        >
                            <Link to="/ptni">Конструктор карт</Link>
                        </Menu.Item>
                    </Menu>
                </Affix>
            </Sider>
        )
    }
}