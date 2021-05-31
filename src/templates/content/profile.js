import React, {Component} from "react";
import {Col, Layout, Row, Avatar, Divider, Button} from "antd";
import {AntDesignOutlined} from '@ant-design/icons';

const {Content} = Layout;

export default class Ptni extends Component {

    state = {
        collapsed: false,
    };

    render() {
        return (
            <div style={{background: '#f0f2f5'}}>
                <div style={{height: '74px'}}/>
                <Layout style={{background: '#f0f2f5', minHeight: '92vh'}}>
                    <Layout style={{padding: '0px 0px 0px 20px'}}>
                        <Content
                            className="site-layout-background"
                            style={{
                                paddingRight: 17,
                                margin: 0,
                                minHeight: '90.5vh',
                            }}
                        >
                            <Row justify="center" gutter={20}>
                                <Col span={24}>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', marginBottom: '3px'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Профиль пользователя</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="whiteDiv" style={{padding: '10px 10px 0', height: "85vh"}}>
                                        <Row justify="center">
                                            <Col span={12} style={{textAlign: 'center'}}>
                                                <br/>
                                                <Avatar
                                                    size={{xs: 30, sm: 40, md: 60, lg: 80, xl: 100, xxl: 150}}
                                                    icon={<AntDesignOutlined/>}
                                                />
                                            </Col>
                                        </Row>
                                        <Row justify="center">
                                            <Col span={12} style={{textAlign: 'center'}}>
                                                <br/>
                                                <br/>
                                                <p className="titleWhiteDiv">Абрамов Алексей Анатольевич</p>
                                                <Divider />
                                            </Col>
                                        </Row>
                                        <Row justify="center">
                                            <Col span={12} style={{textAlign: 'center'}}>
                                                <p className="titleWhiteDiv"><b>Роль:</b></p>
                                                <p className="titleWhiteDiv">Главный координатор</p>
                                                <Divider />
                                            </Col>
                                        </Row>
                                        <Row justify="center">
                                            <Col span={12} style={{textAlign: 'center'}}>
                                                <p className="titleWhiteDiv"><b>Логин:</b></p>
                                                <p className="titleWhiteDiv">admin</p>
                                                <Divider />
                                            </Col>
                                        </Row>
                                        <Row justify="center">
                                            <Col span={12} style={{textAlign: 'center'}}>
                                                <p className="titleWhiteDiv"><b>Пароль:</b></p>
                                                <p className="titleWhiteDiv">admin</p>
                                                <Divider />
                                            </Col>
                                        </Row>
                                        <Row justify="center">
                                            <Col span={12} style={{textAlign: 'center'}}>
                                                <br/>
                                                <Button type="primary" style={{margin: '0 5px 5px 5px', width: '145px'}}>
                                                    Изменить пароль
                                                </Button>
                                                <Button style={{width: '145px'}}>
                                                    Добавить фото
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}