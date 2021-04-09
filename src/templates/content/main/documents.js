import React, {Component} from "react";
import {Col, Row} from "antd";
import {Layer} from "react-parallax-scroll";
import Tilt from "react-parallax-tilt";

const bigDoc = {
    width: 220,
    height: 220,
    background: "#d0dce8"
}

export default class Documents extends Component {
    render() {
        return(
            <div id="documents" className="divThree">
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
                                            style={bigDoc}
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
                                            style={bigDoc}
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
        )
    }
}