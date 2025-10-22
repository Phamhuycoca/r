import { Carousel, Col, Row, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const categories = [
    "Women's Clothing",
    'Man Fashion',
    'Computer & Office',
    'Jewelry & Watches',
    'Men’s Clothing',
    'Bags & Shoes',
    'Toys & Kids & Baby',
    'Automobiles',
    'Consumer Electronics',
    'All Accessories',
];

const banners = [
    {
        title1: 'New Product',
        title2: 'Collection',
        image: 'https://htmldemo.net/tmart/tmart/images/slider/bg/2.png',
    },
    {
        title1: 'Modern Sofa',
        title2: 'Up to 40% OFF',
        image: 'https://htmldemo.net/tmart/tmart/images/slider/bg/2.png',
    },
    {
        title1: 'Elegant Lamps',
        title2: 'Summer Sale',
        image: 'https://htmldemo.net/tmart/tmart/images/slider/bg/2.png',
    },
];

const Main = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#fff',
                padding: '24px 40px',
            }}
        >
            <Row
                gutter={24}
                align="stretch"
                style={{
                    height: 400,
                }}
            >
                {/* Cột trái: Menu danh mục */}
                <Col xs={24} md={6}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            border: '1px solid #f0f0f0',
                            borderRadius: 4,
                            overflow: 'hidden',
                            backgroundColor: '#fff',
                        }}
                    >
                        {/* Header */}
                        <div
                            style={{
                                backgroundColor: '#222',
                                color: '#fff',
                                padding: '12px 16px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                flexShrink: 0, // ngăn header bị co lại
                            }}
                        >
                            <MenuOutlined />
                            BROWSE CATEGORIES
                        </div>

                        {/* Menu */}
                        <div style={{ flex: 1, overflowY: 'auto' }}>
                            <Menu
                                mode="inline"
                                style={{
                                    borderInlineEnd: 'none',
                                    height: '100%',
                                }}
                                items={categories.map((item) => ({
                                    key: item,
                                    label: item,
                                }))}
                            />
                        </div>
                    </div>
                </Col>

                {/* Cột phải: Banner Carousel */}
                <Col xs={24} md={18}>
                    <div
                        style={{
                            height: '100%',
                            borderRadius: 4,
                            overflow: 'hidden',
                        }}
                    >
                        <Carousel autoplay dots={true} style={{ height: '100%' }}>
                            {banners.map((banner, i) => (
                                <div
                                    key={i}
                                    style={{
                                        height: '400px',
                                        backgroundColor: '#f9f9f9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '0 40px',
                                    }}
                                >
                                    <img
                                        src={banner.image}
                                        alt={banner.title1}
                                        style={{
                                            height: '90%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                    <div style={{ textAlign: 'right' }}>
                                        <h1 style={{ fontSize: 48, margin: 0 }}>{banner.title1}</h1>
                                        <h1 style={{ fontSize: 48, color: '#ff4d4f', margin: 0 }}>{banner.title2}</h1>
                                        <a
                                            href="#"
                                            style={{
                                                marginTop: 20,
                                                display: 'inline-block',
                                                textTransform: 'uppercase',
                                                color: '#000',
                                                fontWeight: 500,
                                            }}
                                        >
                                            Shop Now —
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Main;
