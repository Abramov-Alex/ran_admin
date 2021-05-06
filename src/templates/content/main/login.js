import React from "react";
import {Layer} from "react-parallax-scroll";
import {Button, Col, Input, Row} from "antd";
import Ran from "../../../img/ran.png";
import Down from "../../../img/down.png";
import Tilt from "react-parallax-tilt";
import {setMenuLogin} from "../../menu/menuSlice";
import {useDispatch} from "react-redux";

export default function Menu(props) {

    const dispatch = useDispatch();
    const changeMenu = () => {
        dispatch(setMenuLogin("Pekhov"));
        props.history.push('/events')
    }

    return (
        <div id="login" className="divOne">
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
                        <img className="logo" src={Ran} alt="?"/>
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
                        <br/><br/>
                        <Input
                            size="large"
                            className="password"
                            placeholder="Пароль ..."
                        />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col xs={22} sm={22} md={12} lg={12} xl={8} style={{textAlign: "center"}}>
                        <br/><br/>
                        <div onClick={changeMenu}>
                            <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.15}
                                glareColor="#ffffff"
                                glarePosition="bottom"
                                tiltAxis='y'
                                scale={1.1}
                                transitionSpeed={2500}
                            >
                                <Button
                                    type="button"
                                    className="btnLogin"
                                    size="large"
                                    ghost
                                    block
                                >
                                    Войти
                                </Button>
                            </Tilt>
                        </div>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col xs={22} sm={22} md={12} lg={12} xl={8} style={{textAlign: "center"}}>
                        <br/><br/>
                        <p className="forgotPassword">Забыли пароль?</p>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col xs={22} sm={22} md={12} lg={12} xl={8} style={{textAlign: "center"}}>
                        <br/><br/>
                        <img className="arrowDown" src={Down} alt="?"/>
                    </Col>
                </Row>
            </Layer>
        </div>
    )
}