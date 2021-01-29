import Link from "next/link";

export default function Nav2() {
  return (
    <div className="bg-white m-8 rounded-lg">
      <img
        src="/wup.svg"
        alt="Logo da Wake Up"
        className="mx-16 my-8 cursor-pointer"
        width={200}
      />
      <div className="mx-16">
        <p className="font-normal text-2xl text-primary">
          Pedido de Integração e Parceria
        </p>
        <h1 className="my-2 flex font-bold text-5xl">Soluções</h1>

        <h2 className="mt-12 font-medium text-2xl text-gray">
          Que produtos gostaria de obter?
          <strong className="text-danger"> * </strong>
        </h2>

        <div id="check-container" className="block my-8 text-xl shadow-sm">
          <label>
            <div className="py-4 px-10 mb-4 border rounded-lg cursor-pointer flex justify-start">
              <input type="checkbox" value="naty" name="product" />
              <span className="mx-6">Secretária Virtual Naty</span>
              <br />
            </div>
          </label>

          <label>
            <div className="radio py-4 px-10 mb-4 border rounded-lg cursor-pointer flex justify-start">
              <input type="checkbox" value="boletos" name="product" />
              <span className="mx-6">Wake Up Boletos</span>
              <br />
            </div>
          </label>

          <label>
            <div className="radio py-4 px-10 mb-4 border rounded-lg cursor-pointer flex justify-start">
              <input type="checkbox" value="recupera" name="product" />
              <span className="mx-6">Recupera Plus</span>
              <br />
            </div>
          </label>

          <label>
            <div className="radio py-4 px-10 mb-4 border rounded-lg cursor-pointer flex justify-start">
              <input type="checkbox" value="analises" name="product" />
              <span className="mx-6">Análise de Carteira e Crédito</span>
              <br />
            </div>
          </label>
        </div>

        <Link href="pessoais">
          <div
            className="flex bgwup rounded-full cursor-pointer justify-between py-6 px-12"
            id="submit"
            type="submit"
          >
            <h2 className="text-xl font-medium">Continuar</h2>

            <div className="">
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
