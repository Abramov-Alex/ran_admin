import React, {Component} from "react";
import {Alert, Col, Image, Layout, Row, Timeline} from "antd";
import {ClockCircleOutlined} from '@ant-design/icons';
import SiderMenu from './components/sider'
import news from '../../../../img/news.jpg'

const {Content} = Layout;

export default class News extends Component {

    render() {
        return (
            <div style={{background: '#f0f2f5'}}>
                <div style={{height: '74px'}}/>
                <Layout style={{background: '#f0f2f5', minHeight: '92vh'}}>
                    <SiderMenu/>
                    <Layout style={{padding: '0px 0px 0px 20px'}}>
                        <Content
                            className="site-layout-background"
                            style={{
                                paddingRight: 17,
                                margin: 0,
                                minHeight: '90.5vh',
                            }}
                        >
                            <Row gutter={20}>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <div className="whiteDiv" style={{minHeight: '90vh'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Новости</p>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p/>
                                                <Timeline>
                                                    <Timeline.Item
                                                        dot={<ClockCircleOutlined className="timeline-clock-icon"/>} color="red">
                                                        <Alert
                                                            className="blank activeAlert"
                                                            message="27.04.2021"
                                                            description="Состоялось 19 заседание Межправительственной комиссии по экономическому сотрудничеству между Российской Федерацией и Азербайджанской Республикой."
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item
                                                        dot={<ClockCircleOutlined className="timeline-clock-icon"/>}>
                                                        <Alert
                                                            className="blank"
                                                            message="27.04.2021"
                                                            description="Научно-практическая конференция учащихся базовых школ РАН в Пермском крае"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item
                                                        dot={<ClockCircleOutlined className="timeline-clock-icon"/>}>
                                                        <Alert
                                                            className="blank"
                                                            message="26.04.2021"
                                                            description="Профессиональная ориентация старшеклассников Шуховского лицея Белгородской области"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item
                                                        dot={<ClockCircleOutlined className="timeline-clock-icon"/>}>
                                                        <Alert
                                                            className="blank"
                                                            message="26.04.2021"
                                                            description="В РАН считают, что проект о просветительской деятельности нуждается в доработке"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item
                                                        dot={<ClockCircleOutlined className="timeline-clock-icon"/>}>
                                                        <Alert
                                                            className="blank"
                                                            message="25.04.2021"
                                                            description="Дмитрий Чернышенко провёл совещание по квантовым технологиям"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item
                                                        dot={<ClockCircleOutlined className="timeline-clock-icon"/>}>
                                                        <Alert
                                                            className="blank"
                                                            message="24.04.2021"
                                                            description="Ученые описали разнообразие жирных кислот в микроводорослях"
                                                        />
                                                    </Timeline.Item>
                                                    <Timeline.Item
                                                        dot={<ClockCircleOutlined className="timeline-clock-icon"/>}>
                                                        <Alert
                                                            className="blank"
                                                            message="23.04.2021"
                                                            description="Просветительский проект в Лицее № 15 имени академика Юлия Борисовича Харитона г. Сарова"
                                                        />
                                                    </Timeline.Item>
                                                </Timeline>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <div className="whiteDiv" style={{minHeight: '90vh'}}>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <p className="titleWhiteDiv">Подробнее</p>
                                            </Col>
                                        </Row>
                                        <Row gutter={10}>
                                            <Col span={24}>
                                                <Image
                                                    width="100%"
                                                    src={news}
                                                />
                                            </Col>
                                            <Col span={24}>
                                                <p className="pNews">
                                                    27 апреля 2021 года в гостинице Президент-отель (г. Москва), под
                                                    председательством Заместителя Председателя
                                                    Правительства Российской Федерации Алексея Логвиновича Оверчука и
                                                    заместителя Премьер-министра Азербайджанской
                                                    Республики Шахина Абдуллы оглы Мустафаева состоялось 19 заседание
                                                    Межправительственной комиссии по экономическому
                                                    сотрудничеству между Российской Федерацией и Азербайджанской
                                                    Республикой.
                                                </p>
                                                <p className="pNews">
                                                    В ходе заседания Российская академия наук и Национальная академия
                                                    наук Азербайджана (НАН Азербайджана) обсудили вопросы проведения
                                                    международного форума «Наука без границ: Каспийская перспектива»,
                                                    подписания Азербайджано-Российской дорожной карты сотрудничества в
                                                    области науки, научных исследований и инноваций, а также привлечения
                                                    ученых Российской академии наук в качестве официальных научных
                                                    рецензентов конкурсов проектов, проводимых НАН Азербайджана.
                                                </p>
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