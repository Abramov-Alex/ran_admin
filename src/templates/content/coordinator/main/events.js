import React, {Component} from "react";
import {Alert, Calendar, Col, Layout, Pagination, Row, Timeline} from "antd";
import SiderMenu from './components/sider'

const { Content } = Layout;
function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
}

export default class Events extends Component {

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
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', marginBottom: '2px'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Последние события</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{minHeight: '85vh'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p/>
                                                <Timeline>
                                                    <Timeline.Item color="green">
                                                        <Alert
                                                            message="28.04.2021"
                                                            description="Оповещение о важном событии для кабинета главного координатора РАН ..."
                                                            type="success"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item color="green">
                                                        <Alert
                                                            message="28.04.2021"
                                                            description="Оповещение о важном событии для кабинета главного координатора РАН ..."
                                                            type="success"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item color="red">
                                                        <Alert
                                                            message="29.04.2021"
                                                            description="Оповещение о важном событии для кабинета главного координатора РАН ..."
                                                            type="error"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Alert
                                                            message="30.04.2021"
                                                            description="Оповещение о важном событии для кабинета главного координатора РАН ..."
                                                            type="info"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item color="gray">
                                                        <Alert
                                                            message="01.05.2021"
                                                            description="Оповещение о важном событии для кабинета главного координатора РАН ..."
                                                            type="warning"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item color="gray">
                                                        <Alert
                                                            message="01.05.2021"
                                                            description="Оповещение о важном событии для кабинета главного координатора РАН ..."
                                                            type="warning"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Alert
                                                            message="01.05.2021"
                                                            description="Оповещение о важном событии для кабинета главного координатора РАН ..."
                                                            type="info"
                                                        />
                                                    </Timeline.Item>
                                                </Timeline>
                                            </Col>
                                            <Col span={24} style={{textAlign: 'center'}}>
                                                <Pagination responsive={true} total={500} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', marginBottom: '2px'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Календарь событий</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{minHeight: '85vh'}}>
                                        <Calendar onPanelChange={onPanelChange} />
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