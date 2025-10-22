import { Carousel, Col, Row, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import BannerSection from '../BannerSection/BannerSection';

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
            <BannerSection />
        </div>
    );
};

export default Main;
