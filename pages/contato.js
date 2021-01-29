import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar4";
import Nav from "../components/Nav/Nav4";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedido de Integração e Parceria — Wake Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-2 m-2 lg:mx-64 lg:my-20">
          <div className="sm:mr-0 lg:mr-24">
            <Nav />
          </div>

          <Sidebar />
        </div>
      </Layout>
    </>
  );
}
