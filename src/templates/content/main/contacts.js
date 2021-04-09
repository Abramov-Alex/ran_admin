import React, {Component} from "react";
import {Layer} from "react-parallax-scroll";
import {Col, Row} from "antd";

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
        )
    }
}