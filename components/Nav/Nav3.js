import Link from "next/link";

export default function Nav() {
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
        <h1 className="my-2 flex font-bold text-5xl">Dados pessoais</h1>

        <div className="block my-16">
          <div className="flex">
            <input
              className="w-96 outline-none p-2 text-xl bg-white border-b border-gray-400"
              id="name"
              type="name"
              aria-label="name"
              placeholder="Qual seu nome?  *"
            />
            <br />
          </div>

          

          <div className="flex">
            <select
              className="w-96 outline-none mt-11 p-2 text-xl bg-white border-b border-gray-400"
              name="dropdown"
            >
              <option value="current account" selected>
                Solteiro
              </option>
              <option value="savings account">Casado</option>
              <option value="savings account">Divorciado</option>
              <option value="savings account">Viúvo</option>
            </select>
            <br />
          </div>

          <div className="flex">
            <input
              className="w-96 outline-none mt-11 p-2 text-xl bg-white border-b border-gray-400"
              id="cpf"
              type="cpf"
              aria-label="cpf"
              placeholder="Qual seu CPF?  *"
            />
            <br />
          </div>

          <div className="flex">
            <input
              className="w-96 outline-none mt-11 p-2 text-xl bg-white border-b border-gray-400"
              id="rg"
              type="rg"
              aria-label="rg"
              placeholder="Qual seu RG?  *"
            />
            <br />
          </div>
        </div>


        <Link href="contato">
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