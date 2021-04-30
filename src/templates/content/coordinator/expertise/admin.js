import React, {Component} from "react";
import {Row, Col, Layout, Input, Select, DatePicker, Button, ConfigProvider} from "antd";
import 'moment/locale/ru';
import ruRU from 'antd/lib/locale/ru_RU';
import SiderMenu from '../expertise/components/sider'
import TableExample from '../expertise/components/table'

const { Content } = Layout;
const { Option } = Select;

export default class Admin extends Component {

    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return(
            <div style={{background: '#f0f2f5'}}>
                <div style={{height: '74px'}}/>
                <Layout style={{background: '#f0f2f5', minHeight: '92vh'}}>
                    <SiderMenu />
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
                                <Col span={24}>
                                    <div className="whiteDiv">
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Фильтры</p>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                                                <label>Статус</label>
                                                <Select style={{ width: '100%' }} placeholder="..." allowClear>
                                                    <Option value="1">Сохранено</Option>
                                                    <Option value="2">Возвращено</Option>
                                                    <Option value="3">Черновик</Option>
                                                </Select>
                                            </Col>
                                            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                                                <label>Организация</label>
                                                <Select style={{ width: '100%' }} placeholder="..." allowClear>
                                                    <Option value="1">1 ...</Option>
                                                    <Option value="2">2 ...</Option>
                                                    <Option value="3">3 ...</Option>
                                                </Select>
                                            </Col>
                                            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                                                <label>Ключевые слова</label>
                                                <Input placeholder="..." allowClear/>
                                            </Col>
                                            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                                                <label>ИНН</label>
                                                <Input placeholder="..." allowClear/>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <label>Наименование</label>
                                                <Input placeholder="..." allowClear/>
                                            </Col>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <label>Заявитель</label>
                                                <Input placeholder="..." allowClear/>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                                                <label>Дата начала</label>
                                                <ConfigProvider locale={ruRU}>
                                                    <DatePicker placeholder="..." style={{width: '100%'}} allowClear/>
                                                </ConfigProvider>
                                            </Col>
                                            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                                                <label>Дата окончания</label>
                                                <ConfigProvider locale={ruRU}>
                                                    <DatePicker placeholder="..." style={{width: '100%'}} allowClear/>
                                                </ConfigProvider>
                                            </Col>
                                            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                                <Button style={{width: '100%', marginTop: '22px'}} type="primary" danger>Очистить</Button>
                                            </Col>
                                            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                                <Button style={{width: '100%', marginTop: '22px'}} type="primary">
                                                    Сформировать
                                                </Button>
                                            </Col>
                                        </Row>
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