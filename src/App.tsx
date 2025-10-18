import { Button } from "antd";
import { useMyButtonStyle } from "./style/useMyButtonStyle";

function App() {
  const { wrapSSR, prefix } = useMyButtonStyle("my-btn");

  return wrapSSR(
    <>
      <button className={prefix}>Custom Button</button>
      <Button>ANTD Styled</Button>
    </>
  );
}

export default App;
