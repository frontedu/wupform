import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedido de Integração e Parceria — Wake Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div class="mt-32 grid sm:md:grid-cols-1 md:grid-cols-2 gap-2">
          <div className="ml-32">
            <img src="/inteiro.png" alt="Ilustração" width={700} />
          </div>

          <div className="mt-40 mr-auto">
            <img
              src="/wup.svg"
              alt="Logo da Wake Up"
              className=" cursor-pointer"
              width={180}
            />

            <h1 className="mt-8 font-bold text-5xl">Enviado com sucesso!</h1>
            <p className="mt-2 font-base text-2xl text-primary">
              Entraremos em contato assim que possível.
            </p>

            <Link href="/">
              <div
                className="flex mt-8 voltar rounded-xl cursor-pointer    justify-between py-6 px-12 mr-auto"
                id="submit"
                type="submit"
              >
                <h2 className="text-xl font-medium mr-8">
                  Voltar a página inicial
                </h2>

                <div className="">
                  <i className="fas fa-long-arrow-alt-right w-5"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
