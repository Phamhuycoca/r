// styles/useMyButtonStyle.ts
import { theme } from "antd";
import { useStyleRegister } from "@ant-design/cssinjs";

export const useMyButtonStyle = (prefix: string = "my-btn") => {
  const { useToken } = theme;
  const { token, theme: globalTheme } = useToken();
  console.log('globalTheme',globalTheme);
  
  const wrapSSR = useStyleRegister(
    { theme: globalTheme, token, path: [prefix] },
    () => ({
      [`.${prefix}`]: {
        padding: 16,
        border: `1px solid ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        background: token.colorBgContainer,
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: token.boxShadow,
          transform: "translateY(-2px)",
        },
      },
    })
  );

  return { wrapSSR, prefix };
};
