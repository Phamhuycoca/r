import { Col, Layout, Row } from 'antd';
import { useHeaderStyle } from './HeaderStyle.ts';
import { useStickyHeader } from '../../../hooks/useStickyHeader.tsx';
import logo from '../../../assets/logo.webp';
const { Header: HeaderComponent } = Layout;
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Sản phẩm',
        key: 'SubMenu',
        children: [
            {
                type: 'group',
                label: 'Nội thất phòng khác',
                children: [
                    { label: 'Option 1', key: 'setting:1' },
                    { label: 'Option 2', key: 'setting:2' },
                ],
            },
            {
                type: 'group',
                label: 'Tủ quần áo',
                children: [
                    { label: 'Option 3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', key: 'setting:3' },
                    { label: 'Option 4', key: 'setting:4' },
                ],
            },
            {
                type: 'group',
                label: 'Nội thất phòng ngủ',
                children: [
                    { label: 'Option 3', key: 'setting:3' },
                    { label: 'Option 4', key: 'setting:4' },
                ],
            },
            {
                type: 'group',
                label: 'Nội thất nhà bếp',
                children: [
                    { label: 'Option 3', key: 'setting:3' },
                    { label: 'Option 4', key: 'setting:4' },
                ],
            },
        ],
    },
    {
        label: 'Thiết kế - Thi công',
        key: 'app1',
    },
    {
        label: 'Giới thiệu',
        key: 'app2  ',
    },
    {
        label: 'Đặt hàng',
        key: 'app',
    },
    {
        key: 'alipay',
        label: 'Liên hệ',
    },
];
const Header = () => {
    const { wrapSSR, prefix } = useHeaderStyle();
    const isSticky = useStickyHeader();
    const [current, setCurrent] = useState('mail');
    console.log('isSticky', isSticky);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return wrapSSR(
        <HeaderComponent
            className={`${prefix} ${isSticky ? `${prefix}-sticky` : ''}`}
            style={{
                height: '100%',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
            }}
        >
            <div className="flex h-full w-full items-center justify-between">
                <Row className="w-full" justify={'space-evenly'}>
                    <Col span={2}>
                        <div className="demo-logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </Col>
                    <Col span={18}>
                        <Menu
                            className={`${prefix}-menu`}
                            onClick={onClick}
                            selectedKeys={[current]}
                            mode="horizontal"
                            items={items}
                        />
                    </Col>
                    <Col span={2}>
                        <Row className="cursor-pointer h-full" justify="space-around" gutter={[16, 16]}>
                            <SearchOutlined />
                            <UserOutlined />
                            <ShoppingCartOutlined />
                        </Row>
                    </Col>
                </Row>
            </div>
        </HeaderComponent>,
    );
};

export default Header;
