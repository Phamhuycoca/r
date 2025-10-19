import { theme } from 'antd';
import { useStyleRegister } from '@ant-design/cssinjs';

export const useHeaderStyle = (prefix: string = 'header-custom') => {
    const { useToken } = theme;
    const { token, theme: globalTheme } = useToken();

    const wrapSSR = useStyleRegister({ theme: globalTheme, token, path: [prefix] }, () => ({
        // ✅ Default
        [`.${prefix}`]: {
            background: 'transparent',
            backdropFilter: 'none',
            padding: '16px 20px',
            transition: 'all 0.3s ease',
            borderBottom: `1px solid transparent`,
        },

        // ✅ Sticky state
        [`.${prefix}-sticky`]: {
            background: 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(10px)',
            padding: '8px 20px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            borderBottom: `1px solid ${token.colorSplit}`,
            animation: 'fade-in 0.3s ease-out',
        },

        // ✅ Logo container
        [`.${prefix} .demo-logo`]: {
            float: 'left',
            left: 0,
            maxWidth: 40,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexShrink: 0, // tránh bị kéo giãn
        },

        // ✅ Logo img style
        [`.${prefix} .demo-logo img`]: {
            display: 'block',
            width: 40,
            height: 40,
            objectFit: 'contain',
            background: 'transparent !important',
            transition: 'transform 0.25s ease, filter 0.25s ease',
        },

        [`.${prefix}-sticky .demo-logo img`]: {
            transform: 'scale(0.92)',
            filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))',
        },

        [`.${prefix} .demo-logo img:hover`]: {
            transform: 'scale(1.05)',
        },

        // ✅ Animation mượt hơn khi chuyển sticky
        '@keyframes fade-in': {
            '0%': { opacity: 0, transform: 'translateY(-8px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        //Style menu
        [`.${prefix} .ant-menu`]: {
            background: 'transparent',
            lineHeight: '64px',
            borderBottom: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },

        [`.${prefix} .ant-menu-item`]: {
            margin: '0 12px',
            transition: 'color 0.3s ease, transform 0.2s ease',
        },

        [`.${prefix} .ant-menu-item:hover`]: {
            color: 'black',
            transform: 'scale(1.05)',
        },

        [`.${prefix} .ant-menu-item-selected`]: {
            color: 'black',
            fontWeight: 600,
        },

        [`.${prefix}-sticky .ant-menu`]: {
            background: 'transparent',
        },

        [`.${prefix}-sticky .ant-menu-item`]: {
            color: token.colorText, // nếu muốn sticky đổi màu khác thì chỉnh ở đây
        },

        [`.ant-menu-light.ant-menu-horizontal >.ant-menu-submenu-open::after`]: {
            borderBottomWidth: 0,
            borderBottomColor: 'transparent !important',
        },

        [`.ant-menu-light.ant-menu-horizontal >.ant-menu-item-selected::after`]: {
            borderBottomWidth: 0,
            borderBottomColor: 'transparent !important',
        },

        [`.ant-menu-light.ant-menu-horizontal >.ant-menu-item:hover::after`]: {
            borderBottomWidth: 0,
            borderBottomColor: 'transparent !important',
        },

        [`.ant-menu-light.ant-menu-horizontal >.ant-menu-submenu-active::after`]: {
            borderBottomWidth: 0,
            borderBottomColor: 'transparent !important',
        },

        [`.ant-menu-light.ant-menu-horizontal >.ant-menu-submenu-selected::after`]: {
            borderBottomWidth: 0,
            borderBottomColor: 'transparent !important',
        },

        [`.ant-menu-light.ant-menu-horizontal >.ant-menu-item-selected`]: {
            color: 'black',
        },

        [`.ant-menu-light .ant-menu-submenu-selected>.ant-menu-submenu-title`]: {
            color: 'black',
            fontWeight: 600,
        },

        [`.${prefix}-sticky .ant-menu-light.ant-menu-horizontal >.ant-menu-item-selected`]: {
            color: 'white',
        },

        [`.${prefix}-sticky .ant-menu-light.ant-menu-horizontal >.ant-menu-item-selected::after`]: {
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            color: 'white',
        },

        [`.${prefix}-sticky .ant-menu-light.ant-menu-horizontal >.ant-menu-item:hover::after`]: {
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
        },
    }));

    return { wrapSSR, prefix };
};
