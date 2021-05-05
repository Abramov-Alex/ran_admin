import React, {Component} from "react";
import {Col, Row} from "antd";
import {Layer} from "react-parallax-scroll";
import Tilt from "react-parallax-tilt";

const bigDoc = {
    width: 170,
    height: 170,
    background: "#d0dce8",
    clipPath: `polygon(20% 0%,80% 0%,100% 20%,100% 100%,80% 100%,20% 100%,0% 100%,0% 0%)`,
    borderBottom: `solid 5px rgb(9 168 138)`
}

export default class Documents extends Component {
    render() {
        return(
            <div id="documents" className="divThree">
                <Layer settings={{speed: 0.06, type: 'translateX'}}>
                    <Row justify="center">
                        <Col span="18">
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
                        </Col>
                    </Row>
                </Layer>
                <Row justify="center">
                    <Col xs={23} sm={22} md={20} lg={18} xl={18}>
                        <Layer settings={{speed: -0.05, type: 'translateX'}}>
                            <Row style={{minHeight: '200px', margin: '70px 0 50px'}}>
                                <Col
                                    xs={24} sm={24} md={24} lg={8} xl={6}
                                    style={{textAlign: "center", marginBottom: "20px"}}
                                >
                                    <Tilt scale={1.1} transitionSpeed={2500}>
                                        <lord-icon
                                            style={bigDoc}
                                            trigger="hover"
                                            src="./icons/pdf.json"
                                        />
                                    </Tilt>
                                </Col>
                                <Col
                                    xs={24} sm={24} md={24} lg={16} xl={18}
                                    style={{textAlign: "center", marginBottom: "20px"}}
                                >
                                    <p
                                        className="underIconDoc"
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
                            <Row style={{minHeight: '200px', margin: '50px 0 50px'}}>
                                <Col
                                    xs={24} sm={24} md={24} lg={8} xl={6}
                                    style={{textAlign: "center"}}
                                >
                                    <Tilt scale={1.1} transitionSpeed={2500}>
                                        <lord-icon
                                            style={bigDoc}
                                            trigger="hover"
                                            src="./icons/doc.json"
                                        />
                                    </Tilt>
                                </Col>
                                <Col
                                    xs={24} sm={24} md={24} lg={16} xl={18}
                                    style={{textAlign: "left"}}
                                >
                                    <p
                                        className="underIconDoc"
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
                            <Row style={{minHeight: '200px', margin: '50px 0 50px'}}>
                                <Col
                                    xs={24} sm={24} md={24} lg={8} xl={6}
                                    style={{textAlign: "center", marginBottom: "20px"}}
                                >
                                    <Tilt scale={1.1} transitionSpeed={2500}>
                                        <lord-icon
                                            style={bigDoc}
                                            trigger="hover"
                                            src="./icons/pdf.json"
                                        />
                                    </Tilt>
                                </Col>
                                <Col
                                    xs={24} sm={24} md={24} lg={16} xl={18}
                                    style={{textAlign: "left"}}
                                >
                                    <p
                                        className="underIconDoc"
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
        )
    }
}