import React from "react";
import {Table, Tag, Dropdown, Menu} from "antd";

const menuIcon = {
    width: 47,
    height: 47
}
const menu = (
    <Menu>
        <Menu.Item key="0">
            Посмотреть
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
            Подтвердить
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            Удалить
        </Menu.Item>
    </Menu>
);

const TableExample = () => {
    const columns = [
        {
            title: 'Наименование тематики',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Заявитель',
            dataIndex: 'applicant',
            key: 'applicant',
        },
        {
            title: (
                <>
                    ИНН /<br />
                    Номер по РП РФ
                </>
            ),
            dataIndex: 'number',
            key: 'number',
            align: 'center',
            width: 160,
        },
        {
            title: 'Статус',
            key: 'statys',
            dataIndex: 'statys',
            align: 'center',
            width: 200,
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = '#4ecb73';
                        if (tag === 'Возвращено') {
                            color = '#f2637b';
                        } else if (tag === 'Черновик') {
                            color = '#41a1ff';
                        }
                        return (
                            <Tag className="tagWidth" color={color} key={tag}>
                                {tag}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Дата присвоения статуса',
            dataIndex: 'date',
            key: 'date',
            align: 'center',
            width: 150,
        },
        {
            title: 'Действия',
            key: 'action',
            align: 'center',
            fixed: 'right',
            width: 100,
            render: () => (
                <Dropdown overlay={menu} trigger={['click']}>
                    <lord-icon
                        onClick={e => e.preventDefault()}
                        style={menuIcon}
                        trigger="morph"
                        src="./icons/actions.json"
                    />
                </Dropdown>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Развитие теории разрушения горного массива и геомеханического обоснования инновационных технологий ведения горных работ на глубоких карьерах и рудниках при комплексном освоении недр (FMMS-2021-0006)',
            applicant: 'Федеральное государственное бюджетное учреждение науки Физический институт им. П.Н. Лебедева Российской академии наук',
            number: '7736037394 / 19',
            statys: ['Сохранено'],
            date: '27.04.2021',
        },
        {
            key: '2',
            name: 'Развитие теории многофазных гео- и газодинамических процессов в техногенно изменяемом газонасыщенном углепородном массиве (FMMS-2021-0004)',
            applicant: 'Федеральное государственное бюджетное учреждение науки Институт проблем комплексного освоения недр им. академика Н.В. Мельникова Российской академии наук',
            number: '7722013467 / 117',
            statys: ['Возвращено'],
            date: '27.04.2021',
        },
        {
            key: '3',
            name: 'Развитие электронного библиотековедения как научной и учебной дисциплины в условиях трансформации библиотечных фондов, справочно-библиографического и документного обслуживания в цифровой среде (FNEG-2022-0004)',
            applicant: 'Федеральное государственное бюджетное учреждение "Государственная публичная научно-техническая библиотека России"',
            number: '7702058702 / 584',
            statys: ['Черновик'],
            date: '27.04.2021',
        },
    ];

    return (
        <Table scroll={{ x: 1200 }} columns={columns} dataSource={data} />
    );
};

export default TableExample;