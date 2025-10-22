import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Col, Drawer, Input, Row, type GetProps } from 'antd';
import React from 'react';

type SearchProps = GetProps<typeof Input.Search>;

type PropsDrawerSearch = {
    open: boolean;
    onClose: () => void;
    className?: string;
};

const DrawerSearch: React.FC<PropsDrawerSearch> = ({ open, onClose, className = '' }) => {
    const onSearch: SearchProps['onSearch'] = (value) => {
        console.log('Search:', value);
    };

    return (
        <Drawer
            placement="top"
            height={100}
            closable={false}
            onClose={onClose}
            open={open}
            rootClassName={`${className}`}
            bodyStyle={{
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 20px',
            }}
            style={{
                transition: 'all 0.3s ease-in-out',
            }}
        >
            <Row
                justify="center"
                align="middle"
                gutter={16}
                style={{
                    width: '100%',
                    maxWidth: 1000,
                    position: 'relative',
                }}
            >
                {/* Ô tìm kiếm */}
                <Col span={22} md={18}>
                    <Input
                        prefix={<SearchOutlined style={{ color: '#999', fontSize: 18 }} />}
                        placeholder="Nhập thông tin cần tìm kiếm..."
                        size="large"
                        onPressEnter={(e) => onSearch((e.target as HTMLInputElement).value)}
                        style={{
                            width: '100%',
                            borderRadius: 50,
                            padding: '10px 20px',
                            border: '2px solid #d9d9d9',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                        }}
                        onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#000';
                        }}
                        onBlur={(e) => {
                            e.currentTarget.style.borderColor = '#d9d9d9';
                        }}
                    />
                </Col>

                {/* Nút đóng */}
                <div
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                        fontSize: 22,
                        color: '#999',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.color = '#000';
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-50%) rotate(90deg)';
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.color = '#999';
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-50%) rotate(0deg)';
                    }}
                >
                    <CloseOutlined />
                </div>
            </Row>
        </Drawer>
    );
};

export default DrawerSearch;
