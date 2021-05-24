import React, {Component} from "react";
import {Col, Layout, Row, Button, Pagination, Avatar} from "antd";
import { SnippetsOutlined } from '@ant-design/icons';

const { Content } = Layout;

export default class Ptni extends Component {

    state = {
        collapsed: false,
    };

    render() {
        return(
            <div style={{background: '#f0f2f5'}}>
                <div style={{height: '74px'}}/>
                <Layout style={{background: '#f0f2f5', minHeight: '92vh'}}>
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
                                <Col span={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', marginBottom: '5px'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Правительственные документы РАН</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Приказ Министерства науки и высшего образования Российской Федерации от 18.01.21 №22</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Приказ Министерства науки и высшего образования Российской Федерации от 18.01.21 №23</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Постановление Правительства Российской Федерации от 30.07.14 № 718 (с изменениями от 30.12.18)</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Постановление Правительства Российской Федерации от 06.12.17 № 1482 (с изменениями от 12.04.20)</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Постановление Правительства Российской Федерации от 08.04.09 № 312 (изменениями от 8.06.19)</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Постановление Правительства Российской Федерации от 12.04.13 № 327 (с изменениями от 01.10.18)</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Постановление Правительства Российской Федерации от 14.11.14 № 1195 (с изменениями от 30.12.18)</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Приказ Министерства науки и высшего образования РФ от 5.03.14 № 161 (с изменениями от 29.11.17)</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Приказ Министерства науки и высшего образования РФ от 05.03.14 № 162 (с изменениями от 03.03.16)</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Приказ Министерства науки и высшего образования РФ от 20.05.19 № 49н</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Приказ Министерства науки и высшего образования РФ от 31.03.16 № 341</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Федеральный закон о науке и государственной научно-технологической политике от 23.08.96 № 127-ФЗ (с изменениями от 31.07.20)</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Федеральный закон о науке и государственной научно-технологической политике от 27.09.13 № 253-ФЗ (с изм от 19.07.18)</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <br/>
                                    <Col span={24} style={{textAlign: 'center'}}>
                                        <Pagination responsive={true} total={500}/>
                                    </Col>
                                </Col>
                                <Col span={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', marginBottom: '5px'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Документация по работе с Системой</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Основная инструкция по работе с информационной системой НМРиЭД РАН</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Автаризация в Системе и смена пользователя</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 10px', marginBottom: '5px'}}>
                                        <Row align="middle">
                                            <Col xs={0} sm={0} md={0} lg={2} xl={1}>
                                                <Avatar size="small" icon={<SnippetsOutlined />}/>
                                            </Col>
                                            <Col xs={24} sm={24} md={19} lg={18} xl={20}>
                                                <p className="pDoc">Инструкция по работе с картами</p>
                                            </Col>
                                            <Col xs={24} sm={24} md={5} lg={4} xl={3} style={{textAlign: 'center'}}>
                                                <Button type="link">Открыть</Button>
                                            </Col>
                                        </Row>
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