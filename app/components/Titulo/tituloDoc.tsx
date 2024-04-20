export default function TituloDoc({
  titulo,
  arquivo,
  pontos,
}: {
  titulo: string;
  arquivo: string;
  pontos: number;
}) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-full flex flex-col ">
        <h2 className="text-lg text-slate-700 font-semibold">{titulo}</h2>
        <span className="text-sm text-slate-500">{arquivo}</span>
      </div>

      {pontos > 0 && pontos < 150 && (
        <span className=" rounded-md border-[0.5px] border-[#bee0c3] flex text-nowrap text-center font-medium justify-center items-center bg-[#CDECD1] px-3 py-1 text-[#48A152]">
          {pontos} pontos
        </span>
      )}

      {pontos >= 150 && pontos < 300 && (
        <span className=" rounded-md border-[0.5px] border-[#f0dab8] flex text-nowrap text-center font-medium justify-center items-center bg-[#F7E9C7] px-3 py-1 text-[#d6aa0c]">
          {pontos} pontos
        </span>
      )}

      {pontos >= 300 && (
        <span className=" rounded-md border-[0.5px] border-[#f0b8b8] flex text-nowrap text-center font-medium justify-center items-center bg-[#f7c7c7] px-3 py-1 text-[#D62424]">
          {pontos} pontos
        </span>
      )}
    </div>
  );
}
