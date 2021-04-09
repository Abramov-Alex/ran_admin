import React, {useState} from "react";
import {Layout, Row, Col, Anchor, Drawer, Button} from "antd";
import {Squash as Hamburger} from "hamburger-react";
import {defineLordIconElement} from "lord-icon-element";
import {loadAnimation} from "lottie-web";

defineLordIconElement(loadAnimation);

function Menu() {

    const [visible, setVisible] = useState(false);
    const [childrenDrawer, setVisibleTwo] = useState(false);
    const onClose = () => {
        setVisible(false);
    };
    const onChildrenDrawerClose = () => {
        setVisibleTwo(false);
    };
    const {Link} = Anchor;
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
                    <Col span={2} className="headerBurger">
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
                    <Col span={14}>
                        <p className="nameMain">
                            <span className="nameOne">ИС НМРиЭД</span>{" "}
                            <span className="nameTwo">РАН</span>
                        </p>
                    </Col>
                    <Col span={8}>
                        <Anchor
                            offsetTop={70}
                            affix={false}
                            showInkInFixed={false}
                        >
                            <Link
                                className="nameMenu"
                                href="#login"
                                title="Главная"
                            />
                            <Link
                                className="nameMenu"
                                href="#statistics"
                                title="Статистика"
                            />
                            <Link
                                className="nameMenu"
                                href="#documents"
                                title="Документы"
                            />
                            <Link
                                className="nameMenu"
                                href="#contacts"
                                title="Контакты"
                            />
                        </Anchor>
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
                        <lord-icon
                            class="big"
                            trigger="hover"
                            src="./icons/312-avatar-Icon-calm-search-outline-edited.json"
                        />
                        <p className="underIcon">Кабинет</p>
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
