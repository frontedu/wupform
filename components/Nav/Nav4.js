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
        <h1 className="my-2 flex font-bold text-5xl">Contato</h1>

        <div className="block my-16">
          <div className="flex">
            <input
              className="w-96 outline-none p-2 text-xl bg-white border-b border-gray-400"
              id="email"
              type="email"
              aria-label="email"
              placeholder="Qual seu e-mail?  *"
            />
            <br />
          </div>

          <div className="flex">
            <input
              className="w-96 outline-none mt-11 p-2 text-xl bg-white border-b border-gray-400"
              id="phone"
              type="phone"
              aria-label="phone"
              placeholder="Telefone pessoal  *"
            />
            <br />
          </div>

          <div className="flex">
            <input
              className="w-96 outline-none mt-11 p-2 text-xl bg-white border-b border-gray-400"
              id="whatsapp"
              type="whatsapp"
              aria-label="whatsapp"
              placeholder="WhatsApp pessoal  *"
            />
            <br />
          </div>

          <div className="flex">
            <input
              className="w-96 outline-none mt-11 p-2 text-xl bg-white border-b border-gray-400"
              id="landline"
              type="landline"
              aria-label="landline"
              placeholder="Telefone comercial  *"
            />
            <br />
          </div>
        </div>

        <Link href="organizacao">
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
