import React, {Component} from "react";
import {Col, Layout, Row} from "antd";
import 'moment/locale/ru';
import SiderMenu from './components/sider'
import {Bar, Pie, TimelineChart} from "ant-design-pro/lib/Charts";

const { Content } = Layout;
const salesPieData1 = [
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

const salesPieData2 = [
    {
        x: "2015",
        y: 1345,
    },
    {
        x: "2016",
        y: 1568,
    },
    {
        x: "2017",
        y: 2347,
    },
    {
        x: "2018",
        y: 236,
    },
    {
        x: "2019",
        y: 834,
    },
    {
        x: "2020",
        y: 2635,
    },
];

const salesData1 = [];
for (let i = 0; i < 12; i += 1) {
    salesData1.push({
        x: `${i + 1}`,
        y: Math.floor(Math.random() * 1000) + 200,
    });
}

const salesData2 = [];
for (let i = 0; i < 8; i += 1) {
    salesData2.push({
        x: `${i + 1}`,
        y: Math.floor(Math.random() * 500) + 100,
    });
}

const chartData1 = [];
for (let i = 0; i < 20; i += 1) {
    chartData1.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 250) + 150,
        y2: Math.floor(Math.random() * 120) + 1,
    });
}

const chartData2 = [];
for (let i = 0; i < 20; i += 1) {
    chartData2.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 100,
        y2: Math.floor(Math.random() * 100) + 1,
    });
}

export default class Dashboard extends Component {

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
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', marginBottom: '3px'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Типы объектов экспертизы</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv">
                                        <Pie
                                            hasLegend
                                            subTitle="Всего"
                                            total={() => (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: salesPieData2.reduce(
                                                            (pre, now) =>
                                                                now.y + pre,
                                                            0
                                                        ),
                                                    }}
                                                />
                                            )}
                                            data={salesPieData2}
                                            valueFormat={(val) => (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: val,
                                                    }}
                                                />
                                            )}
                                            height={320}
                                        />
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', marginBottom: '3px'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Поступления заключений по типам</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv">
                                        <TimelineChart
                                            height={300}
                                            width={"100%"}
                                            data={chartData2}
                                            titleMap={{
                                                y1: "Показатель 1",
                                                y2: "Показатель 2",
                                            }}
                                        />
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', marginBottom: '3px'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Объекты экспертизы на разной стадии</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv">
                                        <Pie
                                            hasLegend
                                            subTitle="Всего"
                                            total={() => (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: salesPieData1.reduce(
                                                            (pre, now) =>
                                                                now.y + pre,
                                                            0
                                                        ),
                                                    }}
                                                />
                                            )}
                                            data={salesPieData1}
                                            valueFormat={(val) => (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: val,
                                                    }}
                                                />
                                            )}
                                            height={320}
                                        />
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', marginBottom: '3px'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Финансирование по месяцам</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv">
                                        <Bar title='' height={330} data={salesData1}/>
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