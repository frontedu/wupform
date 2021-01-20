import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (

<div class="grid grid-cols-1 gap-4">

<div class="ml-8">
  <div class="mt-12 md:ml-0">
    <img class="h-9 mb-12" src="/logo@2x.png"/>
    <p class="text-xl font-regular text-gray-600">
      Pedido de Integração e Parceria
    </p>
    <h1 class="mt-2 text-4xl font-bold text-gray-700">
      Dados pessoais
    </h1>
    <p class="mt-4 font-medium text-gray-600">
      <strong class="text-red-500">*</strong> são obrigatórios
    </p>
  </div>

  <div class="pointer mt-6 space-y-2 sm:text-left">
    <button class="text-base px-7 py-2 text-lg text-gray-600 font-semibold rounded-full border border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-all">Passo 4 de 6</button>
  </div>
  </div>

  <div class="fixed bottom-0 pointer">
    <button class="text-left transition w-screen py-6 px-12 bg-gray-200 text-2xl font-medium text-gray-400 focus:outline-none focus:bg-gray-600 focus:text-gray-200">
      Continuar
    </button>
  </div>

  <div>

  <form className='flex'>
    <input class="outline-none m-8 p-2 text-xl bg-white border-b border-gray-400" id='email' type='email' aria-label='email' placeholder='Qual seu e-mail?  *'
    />
  </form>

  <form className='flex'>
    <input class="outline-none m-8 mt-4 p-2 text-xl bg-white border-b border-gray-400" id='phone' type='phone' aria-label='phone' placeholder='Telefone pessoal  *'
    />
  </form>

  <form className='flex'>
    <input class="outline-none m-8 mt-4 p-2 text-xl bg-white border-b border-gray-400" id='phone' type='whatsapp' aria-label='whatsapp' placeholder='WhatsApp pessoal  *'
    />
  </form>

  <form className='flex'>
    <input class="outline-none m-8 mt-4 p-2 text-xl bg-white border-b border-gray-400" id='landline' type='landline' aria-label='tel comercial' placeholder='Telefone comercial  *'
    />
  </form>

  </div>


  </div>
    
  )
}
