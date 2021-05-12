import React, {Component} from "react";
import {Col, Layout, Row} from "antd";

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
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', height: "44vh"}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Документация по работе с системой</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', height: "44vh"}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Контактная информация</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', height: "44vh"}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Часто задаваемые вопросы</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', height: "44vh"}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Дополнительная информация</p>
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