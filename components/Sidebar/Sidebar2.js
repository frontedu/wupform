import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-gray-200 m-8 rounded-lg">
      <div className="md:block lg:flex justify-center md:justify-between">
        <Link href="/">
          <button className="mx-8 my-6 py-3 px-8 ring-1 ring-black inline-block  rounded-full font-semibold text-2xl focus:outline-none">
            <i className="fa fa-angle-left mr-4 w-2"></i> Passo 2 de 6
          </button>
        </Link>

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
