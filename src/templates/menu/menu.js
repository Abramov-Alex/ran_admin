import React, {useState} from "react";
import {Col, Drawer, Layout, Row} from "antd";
import {Squash as Hamburger} from "hamburger-react";
import {Link} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';
import {defineLordIconElement} from "lord-icon-element";
import {loadAnimation} from "lottie-web";
import {useSelector} from "react-redux";
import {menuLogin} from "./menuSlice";
// import citis from "../../img/citis.png"

defineLordIconElement(loadAnimation);

function Menu() {
    const {Header} = Layout;
    const login = useSelector(menuLogin);
    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: "smooth"
        });
    };
    const [visible, setVisible] = useState(false);
    const onToggle = (toggled) => {
        if (toggled) {
            showDrawer();
        } else {
            onClose();
        }
    }
    const onClose = () => {
        setVisible(false);
    };
    const showDrawer = () => {
        setVisible(true);
    };
    const [isOpen, setOpen] = useState(false);
    const menuIcon = {
        width: 46,
        height: 46,
        marginTop: 5
    }

    return (
        <>
            <Header
                style={{
                    position: "fixed",
                    zIndex: 9999,
                    width: "100%",
                    padding: 0,
                }}
            >
                <Row>
                    {login ?
                        <Col xs={15} sm={15} md={3} lg={2} xl={2} className="headerBurger">
                            <Hamburger
                                rounded
                                color="white"
                                size={40}
                                classNane="mainBurger"
                                toggled={isOpen}
                                toggle={setOpen}
                                onToggle={onToggle}
                            />
                        </Col>
                        :
                        <Col span={1} className="headerBurger">
                            {/*<a href="https://citis.ru/" target="_blank">*/}
                            {/*    <img className="citis" alt="?" src={citis} />*/}
                            {/*</a>*/}
                        </Col>
                    }
                    <Col xs={0} sm={0} md={0} lg={6} xl={5}>
                        <p className="nameMain">
                            <span className="nameOne">ИС НМРиЭД</span>{" "}
                            <span className="nameTwo">РАН</span>
                        </p>
                    </Col>
                    {login ?
                        <>
                            <Col xs={0} sm={0} md={12} lg={10} xl={11}>
                                <p className="cabinetName">
                                    Кабинет <span style={{fontWeight: 700}}>главного координатора</span>
                                </p>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="menuBtn">
                                <Link to="/">
                                    <lord-icon
                                        style={menuIcon}
                                        trigger="morph"
                                        src="./icons/arrow.json"
                                    />
                                </Link>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="menuBtn">
                                <Link to="/profile">
                                    <lord-icon
                                        style={menuIcon}
                                        trigger="hover"
                                        src="./icons/avatar.json"
                                    />
                                </Link>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="menuBtn">
                                <Link to="/information">
                                    <lord-icon
                                        style={menuIcon}
                                        trigger="hover"
                                        src="./icons/info.json"
                                    />
                                </Link>
                            </Col>
                        </>
                        :
                        <Col xs={21} sm={22} md={22} lg={{span: 9, offset: 8}} xl={{span: 8, offset: 10}}
                             className="menuAnchor">
                            <NavHashLink
                                activeClassName="selected"
                                smooth to="/#login"
                            >
                                Главная
                            </NavHashLink>
                            <NavHashLink
                                scroll={el => scrollWithOffset(el, 55)}
                                activeClassName="selected"
                                smooth
                                to="/#statistics"
                            >
                                Статистика
                            </NavHashLink>
                            <NavHashLink
                                scroll={el => scrollWithOffset(el, 55)}
                                activeClassName="selected"
                                smooth
                                to="/#documents"
                            >
                                Документы
                            </NavHashLink>
                            <NavHashLink
                                scroll={el => scrollWithOffset(el, 55)}
                                activeClassName="selected"
                                smooth
                                to="/#contacts"
                            >
                                Контакты
                            </NavHashLink>
                        </Col>
                    }
                </Row>
            </Header>
            <Drawer
                className="mainDrawer"
                placement="top"
                closable={false}
                onClose={onClose}
                visible={visible}
                height="100vh"
            >
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Row style={{minHeight: "40vh"}}>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{textAlign: "center"}}>
                        <Link to="/events" onClick={() => {
                            onClose();
                            setOpen();
                        }}>
                            <lord-icon
                                class="big"
                                trigger="hover"
                                src="./icons/home.json"
                            />
                            <p className="underIcon">Главная</p>
                        </Link>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{textAlign: "center"}}>
                        <Link to="/ptni" onClick={() => {
                            onClose();
                            setOpen();
                        }}>
                            <lord-icon
                                class="big"
                                trigger="hover"
                                src="./icons/cards.json"
                            />
                            <p className="underIcon">Объекты экспертизы</p>
                        </Link>
                    </Col>
                    <Col
                        xs={12} sm={12} md={12} lg={6} xl={6}
                        className="divIcon"
                        style={{textAlign: "center"}}
                    >
                        <a href="http://85.142.162.158:8899/db_analytics/" target="_blank">
                            <lord-icon
                                class="big"
                                trigger="hover"
                                src="./icons/analytics.json"
                            />
                            <p className="underIcon">Аналитика</p>
                        </a>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="morph"
                            src="./icons/registry.json"
                        />
                        <p className="underIcon">Реестры</p>
                    </Col>
                </Row>
                <Row style={{minHeight: "40vh"}}>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/finance.json"
                        />
                        <p className="underIcon">Финансы</p>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/competitions.json"
                        />
                        <p className="underIcon">Конкурсы</p>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/expert.json"
                        />
                        <p className="underIcon">Экспертные советы</p>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/question.json"
                        />
                        <p className="underIcon">База знаний</p>
                    </Col>
                </Row>
            </Drawer>
        </>
    )
}

export default Menu;
