import React, {Component} from "react";
import {Alert, Col, Image, Layout, Row, Timeline} from "antd";
import {ClockCircleOutlined} from '@ant-design/icons';
import SiderMenu from './components/sider'
import news from '../../../../img/news.jpg'

const { Content } = Layout;

export default class News extends Component {

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
                                <Col span={12}>
                                    <div className="whiteDiv" style={{minHeight: '90vh'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Новости</p>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p/>
                                                <Timeline>
                                                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />}>
                                                        <Alert
                                                            className="blank"
                                                            message="01.05.2021"
                                                            description="Additional description and information about copywriting."
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />}>
                                                        <Alert
                                                            className="blank"
                                                            message="01.05.2021"
                                                            description="Additional description and information about copywriting."
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />}>
                                                        <Alert
                                                            className="blank"
                                                            message="01.05.2021"
                                                            description="Additional description and information about copywriting."
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />}>
                                                        <Alert
                                                            className="blank"
                                                            message="01.05.2021"
                                                            description="Additional description and information about copywriting."
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />}>
                                                        <Alert
                                                            className="blank"
                                                            message="01.05.2021"
                                                            description="Additional description and information about copywriting."
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />}>
                                                        <Alert
                                                            className="blank"
                                                            message="01.05.2021"
                                                            description="Additional description and information about copywriting."
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />}>
                                                        <Alert
                                                            className="blank"
                                                            message="01.05.2021"
                                                            description="Additional description and information about copywriting."
                                                        />
                                                    </Timeline.Item>
                                                </Timeline>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="whiteDiv" style={{minHeight: '90vh'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Подробнее</p>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <Image
                                                    width="100%"
                                                    src={news}
                                                />
                                            </Col>
                                            <Col span={24}>
                                                <p className="pNews">
                                                    Приказ Министерства образования и науки Российской Федерации от 29 декабря 2017 г.
                                                    № 1286 Об отнесении научных организаций, подведомственных Министерству образования
                                                    и науки Российской Федерации, выполняющих научно-исследовательские, опытно-конструкторские
                                                    и технологические работы гражданского назначения, к соответствующей категории научных организаций
                                                </p>
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