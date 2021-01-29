import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="bg-white m-8 rounded-lg">
        <img
          src="/wup.svg"
          alt="Logo da Wake Up"
          className="mx-16 my-8 cursor-pointer"
          width={200}
        />

        <div className="mx-16">
          <h1 className="flex font-bold text-5xl">Comece agora</h1>
          <p className="my-2 font-normal text-2xl text-primary">
            Pedido de Integração e Parceria
          </p>

          <h2 className="mt-12 font-medium text-2xl text-gray">
            Qual a sua função?<strong className="text-danger"> * </strong>
          </h2>

          <div id="radio-container" className="block my-8 text-xl shadow-sm">
            <label>
              <div className="py-4 px-8 mb-4 border rounded-lg cursor-pointer flex justify-start">
                <input type="radio" value="entrepreneur" name="role" />
                <span className="mx-6">Empresário/Logista</span>
                <br />
              </div>
            </label>

            <label>
              <div className="py-4 px-8 mb-4 border rounded-lg cursor-pointer flex justify-start">
                <input type="radio" value="agent" name="role" />
                <span className="mx-6">Representante</span>
                <br />
              </div>
            </label>

            <label>
              <div className="py-4 px-8 mb-4 border rounded-lg cursor-pointer flex justify-start">
                <input type="radio" value="crm" name="role" />
                <span className="mx-6">CRM/ERP</span>
                <br />
              </div>
            </label>

            <label>
              <div className="py-4 px-8 mb-4 border rounded-lg cursor-pointer flex justify-start">
                <input type="radio" value="provider" name="role" />
                <span className="mx-6">Fornecedor</span>
                <br />
              </div>
            </label>
          </div>

          <Link href="solucoes">
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
    </>
  );
}
