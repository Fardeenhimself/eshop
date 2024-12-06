import { Fragment } from "react";
import "../styles/index.css";
const App = ({ Component, pageProps }) => {
  let Layout = Component.layout || Fragment;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
