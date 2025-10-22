import React, { useState, useEffect } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 1000,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <button
        onClick={scrollToTop}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "3px solid #bfbfbf",
          backgroundColor: "#d9d9d9",
          color: "white",
          fontSize: "22px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
          overflow: "hidden",
          position: "relative",
        }}
        className="scroll-top-btn"
      >
        <ArrowUpOutlined className="arrow-icon" />
      </button>

      <style>
        {`
          .scroll-top-btn:hover {
            background-color: #bfbfbf;
          }

          .scroll-top-btn .arrow-icon {
            position: relative;
            display: inline-block;
            transition: transform 0.3s ease;
          }

          .scroll-top-btn:hover .arrow-icon {
            animation: arrowMove 0.8s ease-in-out infinite;
          }

          @keyframes arrowMove {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(-10px);
              opacity: 0;
            }
            51% {
              transform: translateY(10px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollToTopButton;
