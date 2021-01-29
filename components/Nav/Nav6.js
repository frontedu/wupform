import Link from "next/link";

export default function Nav4() {
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
        <h1 className="my-2 flex font-bold text-5xl">Dados bancários</h1>

        <div className="block my-16">
          <div className="flex">
            <input
              className="w-36 mr-4 outline-none p-2 text-xl bg-white border-b border-gray-400"
              id="bank"
              type="bank"
              aria-label="bank"
              placeholder="Banco  *"
            />

            <select
              className="w-56 mr-4 outline-none p-2 text-xl bg-white border-b border-gray-400"
              name="dropdown"
            >
              <option value="current account" selected>
                Conta-corrente
              </option>
              <option value="savings account">Poupança</option>
            </select>

            <br />
          </div>

          <div className="flex">
            <input
              className="w-36 mr-4 outline-none mt-11 p-2 text-xl bg-white border-b border-gray-400"
              id="branch"
              type="branch"
              aria-label="branch"
              placeholder="Agência  *"
            />

            <input
              className="w-56 outline-none mt-11 p-2 text-xl bg-white border-b border-gray-400"
              id="bank account"
              type="bank account"
              aria-label="bank account"
              placeholder="Conta  *"
            />
            <br />
          </div>

          <div className="flex">
            <input
              className="w-96 outline-none mt-11 p-2 text-xl bg-white border-b border-gray-400"
              id="name"
              type="name"
              aria-label="name"
              placeholder="Nome do titular  *"
            />
            <br />
          </div>

          <div className="flex">
            <input
              className="w-96 outline-none mt-11 p-2 text-xl bg-white border-b border-gray-400"
              id="cpf"
              type="cpf"
              aria-label="cpf"
              placeholder="CPF do titular  *"
            />
            <br />
          </div>
        </div>

        <Link href="enviado">
          <div
            className="flex bgwup rounded-full cursor-pointer justify-between py-6 px-12"
            id="submit"
            type="submit"
          >
            <h2 className="text-xl font-medium">Enviar</h2>

            <div className="">
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
