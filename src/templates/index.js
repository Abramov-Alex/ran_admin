import React, {Component} from "react";
import {Layout, Button, Row, Col, Input, BackTop} from "antd";
import Tilt from 'react-parallax-tilt';
import Parallax, {Layer} from 'react-parallax-scroll';
import {VerticalAlignTopOutlined} from "@ant-design/icons";
import {Pie, Bar, TimelineChart} from "ant-design-pro/lib/Charts";
import "antd/dist/antd.css";
import "ant-design-pro/dist/ant-design-pro.css";
import Menu from './menu/menu'
import Ran1 from "../img/ran333.png";

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
const {Content} = Layout;

export default class Index extends Component {
    render() {
        return (
            <>
                <BackTop>
                    <div className="backToTop">
                        <VerticalAlignTopOutlined/>
                    </div>
                </BackTop>
                <Parallax>
                    <Menu/>
                    <Content className="site-layout">
                        <div className="bgheader"/>
                        <div id="one" className="divOne">
                            <br/><br/><br/>
                            <Layer settings={{speed: 0.4, type: 'translateY'}}>
                                <Row justify="center">
                                    <Col xs={22} sm={22} md={22} lg={22} xl={12} style={{textAlign: "center"}}>
                                        <p className="name">
                                            Информационная система научно-методического
                                            руководства и экспертной деятельности
                                            Российской Академии Наук
                                        </p>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col xs={0} sm={0} md={0} lg={22} xl={22} style={{textAlign: "center"}}>
                                        <img className="logo" src={Ran1} alt="?"/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row justify="center">
                                    <Col xs={22} sm={22} md={12} lg={12} xl={8} style={{textAlign: "center"}}>
                                        <br/>
                                        <Input
                                            size="large"
                                            className="login"
                                            placeholder="Логин ..."
                                        />
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col xs={22} sm={22} md={12} lg={12} xl={8} style={{textAlign: "center"}}>
                                        <br/><br/><br/>
                                        <Input
                                            size="large"
                                            className="password"
                                            placeholder="Пароль ..."
                                        />
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col xs={22} sm={22} md={12} lg={12} xl={8} style={{textAlign: "center"}}>
                                        <br/><br/><br/>
                                        <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="#ffffff"
                                              glarePosition="bottom" tiltAxis='y' scale={1.1} transitionSpeed={2500}>
                                            <Button
                                                className="btnLogin"
                                                size="large"
                                                ghost
                                                block
                                            >
                                                Войти
                                            </Button>
                                        </Tilt>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col xs={22} sm={22} md={12} lg={12} xl={8} style={{textAlign: "center"}}>
                                        <br/><br/><br/>
                                        <p className="namePassword">Забыли пароль?</p>
                                    </Col>
                                </Row>
                            </Layer>
                        </div>
                        <div id="two" className="divTwo">
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
                        <div id="three" className="divThree">
                            <Row justify="center">
                                <Col span={18}>
                                    <Layer settings={{speed: 0.06, type: 'translateX'}}>
                                        <Row style={{marginTop: "40px"}}>
                                            <Col span={24}>
                                                <span className="divNameOne">
                                                    Основные
                                                </span>
                                                <span className="divNameTwo">
                                                    документы
                                                </span>
                                            </Col>
                                        </Row>
                                    </Layer>
                                    <br/><br/><br/><br/><br/>
                                    <Layer settings={{speed: 0.2, type: 'translateY'}}>
                                        <Row
                                            style={{
                                                height: "35vh",
                                                marginTop: "50px",
                                            }}
                                        >
                                            <Col
                                                xs={24} sm={24} md={24} lg={8} xl={5}
                                                style={{textAlign: "center"}}
                                            >
                                                <Tilt scale={1.1} transitionSpeed={2500}>
                                                    <lord-icon
                                                        class="bigDoc"
                                                        trigger="hover"
                                                        src="./icons/78-document-PDF-outline-edited.json"
                                                    />
                                                </Tilt>
                                            </Col>
                                            <Col
                                                xs={24} sm={24} md={24} lg={16} xl={19}
                                                style={{textAlign: "left"}}
                                            >
                                                <p
                                                    className="underIconDoc"
                                                    style={{marginTop: "65px"}}
                                                >
                                                    Федеральный закон "О Российской
                                                    академии наук, реорганизации
                                                    государственных академий наук и
                                                    внесении изменений в отдельные
                                                    законодательные акты Российской
                                                    Федерации" от 27.09.2013 №253-ФЗ
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row style={{height: "40vh"}}>
                                            <Col
                                                xs={24} sm={24} md={24} lg={8} xl={5}
                                                style={{textAlign: "center"}}
                                            >
                                                <Tilt scale={1.1} transitionSpeed={2500}>
                                                    <lord-icon
                                                        class="bigDoc"
                                                        trigger="hover"
                                                        src="./icons/80-document-DOC-outline-edited.json"
                                                    />
                                                </Tilt>
                                            </Col>
                                            <Col
                                                xs={24} sm={24} md={24} lg={16} xl={19}
                                                style={{textAlign: "left"}}
                                            >
                                                <p
                                                    className="underIconDoc"
                                                    style={{marginTop: "10px"}}
                                                >
                                                    Постановление Правительства РФ от
                                                    30.12.2018 №1781 "Об осуществлении
                                                    федеральным государственным
                                                    бюджетным учреждением "Российская
                                                    академия наук" научного и научно-
                                                    методического руководства научной и
                                                    научно-технической деятельностью
                                                    научных организаций и
                                                    образовательных организаций высшего
                                                    образования, а также экспертизы
                                                    научных и научно-технических
                                                    результатов, полученных этими
                                                    организациями, и о внесении
                                                    изменений в некоторые акты
                                                    Правительства Российской Федерации"
                                                </p>
                                            </Col>
                                        </Row>
                                    </Layer>
                                </Col>
                            </Row>
                        </div>
                        <div id="four" className="divFour">
                            <Layer settings={{speed: 0.06, type: 'translateX'}}>
                                <Row justify="center">
                                    <Col span="18">
                                        <Row style={{marginTop: "40px"}}>
                                            <Col span={24}>
                                                <span className="divNameOne">
                                                    Контактная
                                                </span>
                                                <span className="divNameTwo">
                                                    информация
                                                </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Layer>
                            <Row justify="center">
                                <Col span="18">
                                    <Row style={{marginTop: "40px"}}>
                                        <Col span={24} style={{height: "35vh"}}>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row justify="space-between" align="bottom">
                                <Col span={24}>
                                    <iframe
                                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa33a425a8c77a17c22d9c97738d93bcd4475ce9de6bcefdd0d7a8518cc118196&amp;source=constructor"
                                        width="100%"
                                        height="428"
                                        title="map"
                                        frameBorder="0"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Content>
                </Parallax>
            </>
        )
    }
}
