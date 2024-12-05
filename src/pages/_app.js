import { Fragment } from "react";

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
