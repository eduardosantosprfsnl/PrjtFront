import { useEffect, useState } from "react";
import Modal from "react-modal";
import NavBar from "../components/navBar";

export default function Financa() {
  const [isOpen, setIsOpen] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState(0);
  const [despesas, setDespesas] = useState([]);

  const summary = despesas.reduce((acc, despesa) => {
    if (despesa.tipo === 'Crédito') {
      acc.entradas += despesa.valor;
      acc.total += despesa.valor;
    } else {
      acc.saidas -= despesa.valor;
      acc.total -= despesa.valor;
    }

    return acc;
  }, {
    entradas: 0,
    saidas: 0,
    total: 0

  })


  function submitForm() {
    const data = new Date().toLocaleDateString();
    setDespesas([...despesas, {
      descricao,
      valor: parseFloat(valor),
      tipo,
      data
    }])
    setDescricao('');
    setValor(0);
    setTipo('');
    setIsOpen(false);
  }

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-neutral-200">

        <Modal
          isOpen={isOpen}
          overlayClassName="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-700 bg-opacity-80"
          className="w-full max-w-lg bg-white p-6 relative outline-none rounded"
        >
          <button
            className="absolute right-4 top-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-3xl mb-4">Criar nova transação</h2>
          <label className="flex flex-col mb-2">
            Descrição
            <input
              className="py-2 px-3 outline-none border border-gray-300 mt-1 rounded"
              type="text"
              value={descricao}
              onChange={(ev) => setDescricao(ev.target.value)}
            />
          </label>
          <label>Tipo</label>
          <div className="flex gap-4 mt-1">
            <button
              className="flex-1 p-3 rounded bg-emerald-600 text-white"
              onClick={() => setTipo('Crédito')}
            >
              Crédito
            </button>
            <button
              className="flex-1 p-3 rounded bg-red-600 text-white"
              onClick={() => setTipo('Débito')}
            >
              Débito
            </button>
          </div>
          <label className="flex flex-col my-2">
            Valor
            <label className="flex py-2 px-3 outline-none border border-gray-300 mt-1 rounded">
              R$
              <input
                className="outline-none pl-2 w-full"
                type="text"
                value={valor}
                onChange={(ev) => setValor(ev.target.value)}
              />
            </label>
          </label>
          <div className="flex justify-center">
            <button
              className="p-3 bg-green-500 rounded text-white mt-4"
              onClick={() => submitForm()}
            >
              Nova transação
            </button>
          </div>
        </Modal>

        <section className="h-40 bg-emerald-600 pt-8">
          <div className="max-w-5xl mx-auto flex justify-between">
            <h1 className="text-white text-4xl font-semibold">Finanças</h1>
            <button
              className="flex items-center gap-2 rounded p-2 bg-emerald-500 text-white"
              onClick={() => setIsOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>

              Nova transacao
            </button>
          </div>
        </section>
        <section className="max-w-5xl mx-auto">
          <div className="max-w-5xl mx-auto flex gap-5 h-[120px] -mt-[60px]">
            <div className="flex flex-col flex-1 bg-gray-100 rounded border-gray-300 shadow-md shadow-gray-300 p-3 justify-between">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl text-emerald-700 font-semibold">Entradas</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-emerald-700">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h1 className="text-3xl font-semibold">
                R$ {summary.entradas}
              </h1>
            </div>
            <div className="flex flex-col flex-1 bg-gray-100 rounded border-gray-300 shadow-md shadow-gray-300 p-3 justify-between">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl text-red-700 font-semibold">Saidas</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-red-700">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h1 className="text-3xl font-semibold">
                R$ {summary.saidas}
              </h1>
            </div>
            <div className="flex flex-col flex-1 bg-green-400 rounded border-gray-300 shadow-md shadow-gray-300 p-3 justify-between">
              <div className="flex justify-between items-center text-white">
                <h3 className="text-3xl font-semibold">Total</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-white-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h1 className="text-white text-3xl font-semibold">
                R$ {summary.total}
              </h1>
            </div>
          </div>
          <table className="max-w-5xl w-full mt-10 border-separate border-spacing-1 border-spacing-x-0">
            <thead>
              <tr>
                <th className="px-3 py-4 text-left">Data</th>
                <th className="px-3 py-4 text-left">Descrição</th>
                <th className="px-3 py-4 text-left">Preço</th>
                <th className="px-3 py-4 text-left">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {despesas.map((item) => {
                return (
                  <tr>
                    <td className="text-gray-400 px-3 py-4 bg-white rounded-1-1g">{item.data}</td>
                    <td className="text-gray-400 px-3 py-4 bg-white">{item.descricao}</td>
                    <td className="text-gray-400 px-3 py-4 bg-white">R$ {item.valor}</td>
                    <td className={`text-gray-400 px-3 py-4 bg-white font-semibold rounded-r-1g ${item.tipo === 'Crédito' ? 'text-green-600' : 'text-red-600'} `}>{item.tipo}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
