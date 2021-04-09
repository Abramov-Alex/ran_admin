import React, {Component} from "react";
import {Col, Row} from "antd";
import {Layer} from "react-parallax-scroll";
import {Bar, Pie, TimelineChart} from "ant-design-pro/lib/Charts";

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
const salesData = [];
for (let i = 0; i < 12; i += 1) {
    salesData.push({
        x: `${i + 1}`,
        y: Math.floor(Math.random() * 1000) + 200,
    });
}
const chartData = [];
for (let i = 0; i < 20; i += 1) {
    chartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10,
    });
}

export default class Statistics extends Component {
    render() {
        return(
            <div id="statistics" className="divTwo">
                <Row justify="center">
                    <Col span={18}>
                        <Layer settings={{speed: 0.06, type: 'translateX'}}>
                            <Row style={{marginTop: "40px"}}>
                                <Col span={24}>
                                    <span className="divNameOne">
                                        Общая
                                    </span>
                                    <span className="divNameTwo">
                                        статистика
                                    </span>
                                </Col>
                            </Row>
                        </Layer>
                        <Layer settings={{speed: -0.1, type: 'translateY'}}>
                            <Row>
                                <Col xs={22} sm={22} md={22} lg={22} xl={11} style={{marginTop: "40px"}}>
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
                                        height={260}
                                    />
                                </Col>
                                <Col xs={21} sm={21} md={21} lg={21} xl={10} offset={2}>
                                    <TimelineChart
                                        height={260}
                                        data={chartData}
                                        titleMap={{
                                            y1: "Показатель 1",
                                            y2: "Показатель 2",
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Layer>
                        <br/><br/><br/>
                        <Layer settings={{speed: 0.1, type: 'translateY'}}>
                            <Row
                                justify="center"
                                style={{marginTop: "120px"}}
                            >
                                <Col span={20}>
                                    <Bar title='' height={260} data={salesData}/>
                                </Col>
                            </Row>
                        </Layer>
                    </Col>
                </Row>
            </div>
        )
    }
}