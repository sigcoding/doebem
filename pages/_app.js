import { appWithTranslation } from 'next-i18next';
import Head from "next/head";
import { Fragment } from "react";
import Layout from '@components/Layout'
import "../src/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Home - DoeBem</title>
        <meta
          name="description"
          content="Nós fazemos a ponte entre doadores e
          organizações eficazes que promovem
          impacto social embasado em estudos
          e evidência. Junte-se a nós!"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
};
export default appWithTranslation(App);
