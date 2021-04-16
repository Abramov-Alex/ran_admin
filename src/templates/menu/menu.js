import React, {useState} from "react";
import {Layout, Row, Col, Drawer, Button} from "antd";
import {Squash as Hamburger} from "hamburger-react";
import {Link} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';
import {defineLordIconElement} from "lord-icon-element";
import {loadAnimation} from "lottie-web";

defineLordIconElement(loadAnimation);

function Menu() {

    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: "smooth"
        });
    };
    const [visible, setVisible] = useState(false);
    const [childrenDrawer, setVisibleTwo] = useState(false);
    const onClose = () => {
        setVisible(false);
    };
    const onChildrenDrawerClose = () => {
        setVisibleTwo(false);
    };
    const {Header} = Layout;
    const showDrawer = () => {
        setVisible(true);
    };
    const [isOpen, setOpen] = useState(false);

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
                    <Col xs={3} sm={3} md={2} lg={2} xl={2} className="headerBurger">
                        <Hamburger
                            rounded
                            color="white"
                            size={60}
                            classNane="mainBurger"
                            toggled={isOpen}
                            toggle={setOpen}
                            onToggle={(toggled) => {
                                if (toggled) {
                                    showDrawer();
                                } else {
                                    onClose();
                                }
                            }}
                        />
                    </Col>
                    <Col xs={0} sm={0} md={10} lg={12} xl={14}>
                        <p className="nameMain">
                            <span className="nameOne">ИС НМРиЭД</span>{" "}
                            <span className="nameTwo">РАН</span>
                        </p>
                    </Col>
                    <Col xs={21} sm={21} md={12} lg={10} xl={8} className="menuAnchor">
                        <NavHashLink activeClassName="selected" smooth to="/#login">Главная</NavHashLink>
                        <NavHashLink scroll={el => scrollWithOffset(el, 68)} activeClassName="selected" smooth to="/#statistics">Статистика</NavHashLink>
                        <NavHashLink scroll={el => scrollWithOffset(el, 68)} activeClassName="selected" smooth to="/#documents">Документы</NavHashLink>
                        <NavHashLink scroll={el => scrollWithOffset(el, 68)} activeClassName="selected" smooth to="/#contacts">Контакты</NavHashLink>
                    </Col>
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
                <Row style={{height: "40vh"}}>
                    <Col span={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/19-magnifier-zoom-search-outline-edited.json"
                        />
                        <p className="underIcon">Поиск</p>
                    </Col>
                    <Col
                        span={6}
                        className="divIcon"
                        style={{textAlign: "center"}}
                    >
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/152-bar-chart-arrow-growth-outline-edited.json"
                        />
                        <p className="underIcon">Аналитика</p>
                    </Col>
                    <Col span={6} style={{textAlign: "center"}}>
                        <Link to="/admin">
                            <lord-icon
                                class="big"
                                trigger="hover"
                                src="./icons/312-avatar-Icon-calm-search-outline-edited.json"
                            />
                            <p className="underIcon">Кабинет</p>
                        </Link>
                    </Col>
                    <Col span={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/39-gear-settings-single-outline-edited.json"
                        />
                        <p className="underIcon">Настройки</p>
                    </Col>
                </Row>
                <Row style={{height: "40vh"}}>
                    <Col span={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/60-documents-outline-edited.json"
                        />
                        <p className="underIcon">Формы</p>
                    </Col>
                    <Col span={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/245-edit-document-outline-edited.json"
                        />
                        <p className="underIcon">Редактирование</p>
                    </Col>
                    <Col span={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/403-museum-authority-outline-edited.json"
                        />
                        <p className="underIcon">Архив</p>
                    </Col>
                    <Col span={6} style={{textAlign: "center"}}>
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/113-atom-outline-edited.json"
                        />
                        <p className="underIcon">Наука</p>
                    </Col>
                </Row>
                {/*<Button type="primary" onClick={showChildrenDrawer}>
                    Пункт 1
                </Button>*/}
                <Drawer
                    title="Подпункты"
                    placement="top"
                    closable={true}
                    onClose={onChildrenDrawerClose}
                    visible={childrenDrawer}
                >
                    <Button type="primary" onClick={onChildrenDrawerClose}>
                        Пункт 1.1
                    </Button>
                </Drawer>
            </Drawer>
        </>
    )
}

export default Menu;
