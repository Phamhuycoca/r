import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Hàm kiểm tra cuộn trang
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsVisible(true); // Hiển thị nút khi cuộn xuống hơn 50px
        } else {
            setIsVisible(false); // Ẩn nút khi cuộn lên trên
        }
    };

    // Hàm cuộn trang lên trên
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Dùng useEffect để lắng nghe sự kiện cuộn
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 1000,
                transition: 'transform 0.3s ease-in-out',
                transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
            }}
        >
            <Button
                shape="circle"
                size="large"
                variant="outlined"
                onClick={scrollToTop}
                style={{
                    display: isVisible ? 'inline-block' : 'none',
                }}
            >
                a
            </Button>
        </div>
    );
};

export default ScrollToTopButton;
