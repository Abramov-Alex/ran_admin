import React, {Component} from "react";
import {Layer} from "react-parallax-scroll";
import {Col, Row} from "antd";
import address from "../../../img/address.png"
import phone from "../../../img/phone.png"
import fax from "../../../img/fax.png"

export default class Contacts extends Component {
    render() {
        return(
            <div id="contacts" className="divFour">
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
                    <Col xs={23} sm={22} md={20} lg={18} xl={18}>
                        <Layer settings={{speed: 0.1, type: 'translateY'}}>
                            <Row justify="center" style={{marginTop: "40px", borderBottom: 'solid 1.5px whitesmoke'}} >
                                <Col xs={6} sm={6} md={5} lg={5} xl={4} style={{textAlign: "center"}}>
                                    <img className="contactsImg" alt="?" src={address} />
                                </Col>
                                <Col xs={18} sm={18} md={15} lg={14} xl={10}>
                                    <p className="contacts">
                                        <span style={{fontWeight: 400}}>Адрес:</span>
                                        <br/>
                                        119991 Москва, Ленинский просп., 14
                                    </p>
                                </Col>
                            </Row>
                            <Row justify="center" style={{marginTop: "20px",  borderBottom: 'solid 1.5px whitesmoke'}}>
                                <Col xs={6} sm={6} md={5} lg={5} xl={4} style={{textAlign: "center"}}>
                                    <img className="contactsImg" alt="?" src={phone} />
                                </Col>
                                <Col xs={18} sm={18} md={15} lg={14} xl={10}>
                                    <p className="contacts">
                                        <span style={{fontWeight: 400}}>Телефон:</span>
                                        <br/>
                                        8 (495) 938-03-09 (Справ. бюро)
                                    </p>
                                </Col>
                            </Row>
                            <Row justify="center" style={{marginTop: "20px"}}>
                                <Col xs={6} sm={6} md={5} lg={5} xl={4} style={{textAlign: "center"}}>
                                    <img className="contactsImg" alt="?" src={fax} />
                                </Col>
                                <Col xs={18} sm={18} md={15} lg={14} xl={10}>
                                    <p className="contacts">
                                        <span style={{fontWeight: 400}}>Факсы:</span>
                                        <br/>
                                        8 (495) 954-33-20 (Ленинский просп., 14)
                                    </p>
                                    <p className="contacts">8 (495) 938-18-44 (Ленинский просп., 32а)</p>
                                </Col>
                            </Row>
                        </Layer>
                    </Col>
                </Row>
                <br/><br/>
                <Row justify="space-between" align="bottom">
                    <div className="map">
                        <Col span={24}>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa33a425a8c77a17c22d9c97738d93bcd4475ce9de6bcefdd0d7a8518cc118196&amp;source=constructor"
                                width="100%"
                                height="428"
                                title="map"
                                frameBorder="0"
                            />
                        </Col>
                    </div>
                </Row>
            </div>
        )
    }
}