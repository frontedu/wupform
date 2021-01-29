export default function Sidebar() {
  return (
    <div className="bg-gray-200 m-8 rounded-lg">
      <div className="md:block lg:flex justify-center md:justify-between">
        <button className="flex mx-8 my-6 py-3 px-8 ring-1 ring-black rounded-full font-semibold text-2xl focus:outline-none">
          Passo 1 de 6
        </button>

        <p className="mx-1 md:mx-8 my-6 py-3 px-8 inline-block text-xl text-gray-700">
          <strong className="text-medium text-danger">* </strong>são
          obrigatórios
        </p>
      </div>

      <div className="bg-bottom">
        <img src="/man.png" width={600} alt="Ilustração" />
      </div>
    </div>
  );
}
