import { Row, Col, Menu, Carousel } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const categories = ['Living Room', 'Bedroom', 'Office', 'Kitchen', 'Outdoor', 'Lighting', 'Decor'];

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

export default function BannerSection() {
    return (
        <Row
            gutter={24}
            align="stretch"
            style={{
                height: 400,
                marginTop: 16,
            }}
        >
            {/* Cột trái: Menu danh mục */}
            <Col xs={24} md={6}>
                <div
                    style={{
                        border: '1px solid #f0f0f0',
                        borderRadius: 4,
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
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
                        }}
                    >
                        <MenuOutlined />
                        BROWSE CATEGORIES
                    </div>

                    {/* Menu */}
                    <Menu
                        mode="inline"
                        style={{
                            borderInlineEnd: 'none',
                            flex: 1,
                        }}
                        items={categories.map((item) => ({
                            key: item,
                            label: item,
                        }))}
                    />
                </div>
            </Col>

            {/* Cột phải: Banner Carousel */}
            <Col xs={24} md={18}>
                <Carousel
                    autoplay
                    dots={true}
                    style={{ height: '100%', border: '1px solid #f0f0f0', borderRadius: 4, overflow: 'hidden' }}
                >
                    {banners.map((banner, i) => (
                        <div
                            key={i}
                            style={{
                                height: 400,
                                backgroundColor: '#f9f9f9',
                                borderRadius: 4,
                                overflow: 'hidden',
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
            </Col>
        </Row>
    );
}
