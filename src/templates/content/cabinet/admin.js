import React, {Component} from "react";
import {Row, Col, Layout, Menu, Affix, Input, Select, DatePicker, Button, ConfigProvider} from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'moment/locale/ru';
import ruRU from 'antd/lib/locale/ru_RU';
import TableExample from '../cabinet/table'
import {Pie} from "ant-design-pro/lib/Charts";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const { Option } = Select;
const salesPieData = [
    {
        x: "2015",
        y: 4544,
    },
    {
        x: "2016",
        y: 3321,
    },
    {
        x: "2017",
        y: 3113,
    },
    {
        x: "2018",
        y: 2341,
    },
    {
        x: "2019",
        y: 1231,
    },
    {
        x: "2020",
        y: 1231,
    },
];

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
            <div style={{background: '#f0f2f5'}}>
                <br/><br/><br/><br/>
                <Layout style={{background: '#f0f2f5', minHeight: '89vh'}}>
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
                                defaultOpenKeys={['sub1']}
                                style={{borderRight: 0, fontFamily: 'Nunito'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="Личный кабинет">
                                    <Menu.Item key="1">Проект тематик</Menu.Item>
                                    <Menu.Item key="2">Планы тематик</Menu.Item>
                                    <Menu.Item key="3">Отчеты НИР</Menu.Item>
                                    <Menu.Item key="4">Архивы файлов</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Affix>
                    </Sider>
                    <Layout style={{ padding: '0px 0px 0px 20px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                paddingRight: 17,
                                margin: 0,
                                minHeight: '90.5vh',
                            }}
                        >
                            <Row gutter={20}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div className="whiteDiv">
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Фильтры</p>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <label>Статус</label>
                                                <Select style={{ width: '100%' }} placeholder="..." allowClear>
                                                    <Option value="1">Сохранено</Option>
                                                    <Option value="2">Возвращено</Option>
                                                    <Option value="3">Черновик</Option>
                                                </Select>
                                            </Col>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <label>Организация</label>
                                                <Select style={{ width: '100%' }} placeholder="..." allowClear>
                                                    <Option value="1">1 ...</Option>
                                                    <Option value="2">2 ...</Option>
                                                    <Option value="3">3 ...</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <label>Заявитель</label>
                                                <Input placeholder="..." allowClear/>
                                            </Col>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <label>ИНН</label>
                                                <Input placeholder="..." allowClear/>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <label>Наименование</label>
                                                <Input placeholder="..." allowClear/>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <label>Дата</label>
                                                <ConfigProvider locale={ruRU}>
                                                    <DatePicker placeholder="..." style={{width: '100%'}} allowClear/>
                                                </ConfigProvider>
                                            </Col>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <label>Дата</label>
                                                <ConfigProvider locale={ruRU}>
                                                    <DatePicker placeholder="..." style={{width: '100%'}} allowClear/>
                                                </ConfigProvider>
                                            </Col>
                                        </Row>
                                        <Row gutter={10} style={{marginTop: '10px'}}>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                                <Button style={{width: '100%'}} type="primary">
                                                    Сформировать
                                                </Button>
                                            </Col>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                                <Button style={{width: '100%'}} type="primary" danger>Очистить</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div className="whiteDiv">
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Статистика</p>
                                            </Col>
                                        </Row>
                                        <Pie
                                            hasLegend
                                            subTitle="Всего"
                                            total={() => (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: salesPieData.reduce(
                                                            (pre, now) =>
                                                                now.y + pre,
                                                            0
                                                        ),
                                                    }}
                                                />
                                            )}
                                            data={salesPieData}
                                            valueFormat={(val) => (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: val,
                                                    }}
                                                />
                                            )}
                                            height={250}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <div className="whiteDiv">
                                        <TableExample/>
                                    </div>
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}