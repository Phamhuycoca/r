import { Col, Input, Layout, Row } from 'antd';
import { useHeaderStyle } from './HeaderStyle.ts';
import { useStickyHeader } from '../../../hooks/useStickyHeader.tsx';
import logo from '../../../assets/logo.webp';
const { Header: HeaderComponent } = Layout;
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { CloseOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import DrawerSearch from './drawerSearch.tsx';

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
                    { label: 'Option 2', key: 'setting:22' },
                ],
            },
            {
                type: 'group',
                label: 'Tủ quần áo',
                children: [
                    { label: 'Option 3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', key: 'setting:33' },
                    { label: 'Option 4', key: 'setting:4' },
                ],
            },
            {
                type: 'group',
                label: 'Nội thất phòng ngủ',
                children: [
                    { label: 'Option 3', key: 'setting:323' },
                    { label: 'Option 4', key: 'setting:41' },
                ],
            },
            {
                type: 'group',
                label: 'Nội thất nhà bếp',
                children: [
                    { label: 'Option 3', key: 'setting:3' },
                    { label: 'Option 4', key: 'setting:42' },
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
    const [isShowSearch, setIsShowSearch] = useState(false);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const onShowSearch = () => {
        setIsShowSearch(true);
        console.log('Show search');
    };
    return wrapSSR(
        <>
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
                                    {
                                        !isShowSearch ? <Menu
                                        className={`${prefix}-menu`}
                                        onClick={onClick}
                                        selectedKeys={[current]}
                                        mode="horizontal"
                                        items={items}
                                    />:
                                    <div className='h-full flex items-center'>
                                        <Input.Search
                                        size="large"
                                        style={{ width: '100%' }}
                                    />
                                    </div>
                                    }
                                </Col>
                                <Col span={2}>
                                    <Row className="cursor-pointer h-full" justify="space-around" gutter={[16, 16]}>
                                        { !isShowSearch ?
                                            <SearchOutlined
                                            onClick={onShowSearch}
                                            style={{
                                                fontSize: '18px',
                                            }}
                                            />
                                            :
                                            <CloseOutlined onClick={()=>{
                                                setIsShowSearch(false);
                                            }} />}
                                        <ShoppingCartOutlined
                                            style={{
                                                fontSize: '18px',
                                            }}
                                        />
                                        <UserOutlined
                                            style={{
                                                fontSize: '18px',
                                            }}
                                        />
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </HeaderComponent>
          
            {/* <DrawerSearch
                className={`${prefix}-drawer-search`}
                open={isShowSearch}
                onClose={() => {
                    setIsShowSearch(!isShowSearch);
                }}
            /> */}
        </>,
    );
};

export default Header;
