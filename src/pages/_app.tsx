import "./index.css";
import "@fontsource/dm-sans";
import { AppProps } from "next/app";
import { Chakra } from "systems/Core";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Component {...pageProps} />
    </Chakra>
  )
};

export default App;
