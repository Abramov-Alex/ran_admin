import React, {Component} from "react";
import {Button, Col, DatePicker, Input, Layout, Row, Select, Collapse} from "antd";
import { SettingOutlined } from '@ant-design/icons'
import 'moment/locale/ru';
import SiderMenu from '../expertise/components/sider'
import TableExample from '../expertise/components/table'

const { Content } = Layout;
const { Option } = Select;
const { Panel } = Collapse;
function callback(key) {
    console.log(key);
}
const genExtra = () => (
    <SettingOutlined />
);

export default class Ptni extends Component {

    state = {
        collapsed: false,
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
                                    <div className="whiteDiv" style={{padding: '10px', marginBottom: '2px'}}>
                                        <Collapse className="filter" expandIconPosition="right" extra={genExtra()} onChange={callback}>
                                            <Panel header="Фильтры" key="1">
                                                <Row gutter={10}>
                                                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                                                        <label>Статус</label>
                                                        <Select style={{ width: '100%' }} placeholder="..." allowClear>
                                                            <Option value="1">Сохранено</Option>
                                                            <Option value="2">Возвращено</Option>
                                                            <Option value="3">Черновик</Option>
                                                        </Select>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                                                        <label>Организация</label>
                                                        <Select style={{ width: '100%' }} placeholder="..." allowClear>
                                                            <Option value="1">1 ...</Option>
                                                            <Option value="2">2 ...</Option>
                                                            <Option value="3">3 ...</Option>
                                                        </Select>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                                                        <label>Ключевые слова</label>
                                                        <Input placeholder="..." allowClear/>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
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
                                                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                                                        <label>Дата начала</label>
                                                        <DatePicker placeholder="..." style={{width: '100%'}} allowClear/>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                                                        <label>Дата окончания</label>
                                                        <DatePicker placeholder="..." style={{width: '100%'}} allowClear/>
                                                    </Col>
                                                    <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                                                        <Button style={{width: '100%', marginTop: '22px'}} type="primary" danger>Очистить</Button>
                                                    </Col>
                                                    <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                                                        <Button style={{width: '100%', marginTop: '22px'}} type="primary">
                                                            Сформировать
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Panel>
                                        </Collapse>
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