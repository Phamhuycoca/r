import { Col, Layout, Row, Menu, Drawer } from 'antd';
import { MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import { useHeaderStyle } from './HeaderStyle.ts';
import { useStickyHeader } from '../../../hooks/useStickyHeader.tsx';
import logo from '../../../assets/logo.webp';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import DrawerSearch from './drawerSearch.tsx';

const { Header: HeaderComponent } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Sản phẩm',
        key: 'SubMenu',
        children: [
            {
                type: 'group',
                label: 'Nội thất phòng khách',
                children: [
                    { label: 'Option 1', key: 'setting:1' },
                    { label: 'Option 2', key: 'setting:2' },
                ],
            },
            {
                type: 'group',
                label: 'Tủ quần áo',
                children: [
                    { label: 'Option 3', key: 'setting:3' },
                    { label: 'Option 4', key: 'setting:4' },
                ],
            },
        ],
    },
    { label: 'Thiết kế - Thi công', key: 'app1' },
    { label: 'Giới thiệu', key: 'app2' },
    { label: 'Đặt hàng', key: 'app3' },
    { label: 'Liên hệ', key: 'app4' },
];

const Header = () => {
    const { wrapSSR, prefix } = useHeaderStyle();
    const isSticky = useStickyHeader();
    const [current, setCurrent] = useState('mail');
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    const onShowSearch = () => {
        setIsShowSearch(true);
    };

    return wrapSSR(
        <>
            {!isShowSearch && (
                <HeaderComponent
                    className={`${prefix} ${isSticky ? `${prefix}-sticky` : ''}`}
                    style={{
                        height: 'auto',
                        position: 'sticky',
                        top: 0,
                        zIndex: 1000,
                        transition: 'all 0.3s ease',
                        background: '#fff',
                        padding: '0 24px',
                    }}
                >
                    <div className="flex items-center justify-between w-full">
                        <Row align="middle" justify="space-between" className="w-full">
                            {/* Logo */}
                            <Col xs={8} md={3}>
                                <div className="demo-logo flex items-center">
                                    <img src={logo} alt="logo" style={{ height: 50 }} />
                                </div>
                            </Col>

                            {/* Menu desktop */}
                            <Col xs={0} md={17}>
                                <Menu
                                    className={`${prefix}-menu`}
                                    onClick={onClick}
                                    selectedKeys={[current]}
                                    mode="horizontal"
                                    items={items}
                                />
                            </Col>

                            {/* Icons + Drawer menu button */}
                            <Col xs={8} md={4}>
                                <Row justify="end" align="middle" gutter={[16, 0]} style={{ fontSize: 18 }}>
                                    <Col>
                                        <SearchOutlined onClick={onShowSearch} className="cursor-pointer" />
                                    </Col>
                                    <Col>
                                        <ShoppingCartOutlined className="cursor-pointer" />
                                    </Col>
                                    <Col>
                                        <UserOutlined className="cursor-pointer" />
                                    </Col>
                                    {/* Icon menu mobile */}
                                    <Col xs={8} md={0}>
                                        <MenuOutlined
                                            className="cursor-pointer"
                                            onClick={() => setDrawerVisible(true)}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                    {/* Drawer menu mobile */}
                    <Drawer
                        title="Danh mục"
                        placement="left"
                        onClose={() => setDrawerVisible(false)}
                        open={drawerVisible}
                        closeIcon={<CloseOutlined />}
                        bodyStyle={{ padding: 0 }}
                    >
                        <Menu
                            mode="inline"
                            onClick={onClick}
                            selectedKeys={[current]}
                            items={items}
                            style={{ borderInlineEnd: 'none' }}
                        />
                    </Drawer>
                </HeaderComponent>
            )}

            <DrawerSearch
                className={`${prefix}-drawer-search`}
                open={isShowSearch}
                onClose={() => setIsShowSearch(false)}
            />
        </>,
    );
};

export default Header;
