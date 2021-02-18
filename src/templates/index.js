import React, {useState} from "react";
import {Layout, Drawer, Button, Row, Col, Input, Anchor, BackTop} from "antd";
import {Squash as Hamburger} from "hamburger-react";
import {Parallax} from "react-scroll-parallax";
import {VerticalAlignTopOutlined} from "@ant-design/icons";
import {Pie, Bar, TimelineChart} from "ant-design-pro/lib/Charts";
import {defineLordIconElement} from "lord-icon-element";
import {loadAnimation} from "lottie-web";
import "antd/dist/antd.css";
import "ant-design-pro/dist/ant-design-pro.css";
import Ran1 from "../img/ran333.png";

defineLordIconElement(loadAnimation);

function Index() {
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

    const {Link} = Anchor;
    const {Header, Content} = Layout;
    const [visible, setVisible] = useState(false);
    const [childrenDrawer, setVisibleTwo] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const onChildrenDrawerClose = () => {
        setVisibleTwo(false);
    };
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <BackTop>
                <div className="backToTop">
                    <VerticalAlignTopOutlined/>
                </div>
            </BackTop>
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
                                href="#one"
                                title="Главная"
                            />
                            <Link
                                className="nameMenu"
                                href="#two"
                                title="Статистика"
                            />
                            <Link
                                className="nameMenu"
                                href="#three"
                                title="Документы"
                            />
                            <Link
                                className="nameMenu"
                                href="#four"
                                title="Контакты"
                            />
                        </Anchor>
                    </Col>
                </Row>
            </Header>
            <Content className="site-layout">
                <div className="bgheader"/>
                <div id="one">
                    <Parallax className="coloredDiv custom-class" y={[-20, 31]}>
                        <br/>
                        <Row justify="center">
                            <Col span="12" style={{textAlign: "center"}}>
                                <p className="name">
                                    Информационная система научно-методического
                                    руководства и экспертной деятельности
                                    Российской Академии Наук
                                </p>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col span="8" style={{textAlign: "center"}}>
                                <img className="logo" src={Ran1} alt="?"/>
                            </Col>
                        </Row>
                        <br/>
                        <Row justify="center">
                            <Col span="8" style={{textAlign: "center"}}>
                                <br/>
                                <Input
                                    size="large"
                                    className="login"
                                    placeholder="Логин ..."
                                />
                                <br/>
                                <br/>
                                <br/>
                                <Input
                                    size="large"
                                    className="password"
                                    placeholder="Пароль ..."
                                />
                                <br/>
                                <br/>
                                <br/>
                                <Button
                                    className="btnLogin"
                                    size="large"
                                    ghost
                                    block
                                >
                                    Войти
                                </Button>
                                <br/>
                                <br/>
                                <br/>
                                <p className="namePassword">Забыли пароль?</p>
                            </Col>
                        </Row>
                    </Parallax>
                </div>
                <div id="two" className="whiteDiv">
                    <Row justify="center">
                        <Col span="18">
                            <Row style={{marginTop: "40px"}}>
                                <Col span={24}>
                                    <span className="divNameOne">Общая</span>
                                    <span className="divNameTwo">
                                        {" "}
                                        статистика
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={11} style={{marginTop: "40px"}}>
                                    <Parallax
                                        className="custom-class"
                                        x={[-8, 8]}
                                    >
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
                                    </Parallax>
                                </Col>
                                <Col span={10} offset={2}>
                                    <Parallax
                                        className="custom-class"
                                        x={[8, -8]}
                                    >
                                        <TimelineChart
                                            height={260}
                                            data={chartData}
                                            titleMap={{
                                                y1: "Показатель 1",
                                                y2: "Показатель 2",
                                            }}
                                        />
                                    </Parallax>
                                </Col>
                            </Row>
                            <Row
                                justify="center"
                                style={{marginTop: "120px"}}
                            >
                                <Col span="18">
                                    <Parallax
                                        className="custom-class"
                                        y={[-30, 30]}
                                    >
                                        <Bar title='' height={260} data={salesData}/>
                                    </Parallax>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div id="three" className="whiteSmokeDiv">
                    <Row justify="center">
                        <Col span="18">
                            <Row style={{marginTop: "40px"}}>
                                <Col span={24}>
                                    <span className="divNameOne">Основные</span>
                                    <span className="divNameTwo">
                                        {" "}
                                        документы
                                    </span>
                                </Col>
                            </Row>
                            <Parallax className="custom-class" y={[-20, 30]}>
                                <Row
                                    style={{
                                        height: "35vh",
                                        marginTop: "50px",
                                    }}
                                >
                                    <Col
                                        span={4}
                                        style={{textAlign: "center"}}
                                    >
                                        <lord-icon
                                            class="bigDoc"
                                            trigger="hover"
                                            src="./icons/78-document-PDF-outline-edited.json"
                                        />
                                    </Col>
                                    <Col
                                        span={20}
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
                            </Parallax>
                            <Parallax className="custom-class" y={[-20, 30]}>
                                <Row style={{height: "40vh"}}>
                                    <Col
                                        span={4}
                                        style={{textAlign: "center"}}
                                    >
                                        <lord-icon
                                            class="bigDoc"
                                            trigger="hover"
                                            src="./icons/80-document-DOC-outline-edited.json"
                                        />
                                    </Col>
                                    <Col
                                        span={20}
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
                            </Parallax>
                        </Col>
                    </Row>
                </div>
                <div id="four" className="beigeDiv">
                    <Row justify="center">
                        <Col span="18">
                            <Row style={{marginTop: "40px"}}>
                                <Col span={24}>
                                    <span className="divNameOne">
                                        Контактная
                                    </span>
                                    <span className="divNameTwo">
                                        {" "}
                                        информация
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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
    );
}

export default Index;
