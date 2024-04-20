import TituloDoc from "@/app/components/Titulo/tituloDoc";
import Navbar from "../../components/Navbar/navbar";
import CardTexto from "@/app/components/CardTexto/CardPlay";
import CardInfo from "@/app/components/CardTexto/CardInfo";

export default function Facil() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Navbar />
      <div
        id="wrapper"
        className="w-full flex py-8 px-6 justify-center max-w-[1000px]"
      >
        <section className=" w-full flex flex-col">
          <TituloDoc
            titulo="Desafio - Arquivos Textuais"
            arquivo="Arquivo #12345678"
            pontos={120}
          />

          <div className="flex flex-col w-full gap-y-5 mt-7">
            <CardTexto
              acerto={0.994}
              pontos={120}
              images={[
                "https://media.discordapp.net/attachments/1221205104657563789/1231021499683438732/image.png?ex=6635711c&is=6622fc1c&hm=04e99a8a46e2ffb593c0e9468b518ea7ccacbd39f561d912fafccac962acdd24&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021499989626931/image.png?ex=66244d9c&is=6622fc1c&hm=985cf9e940de2681379d74b24560e114db4587ba0247c34c7f8dc877d1d71408&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021500224638998/image.png?ex=6635711c&is=6622fc1c&hm=f7d592dfdb980f232e6ee373cefead77e511bcbf8ee82dc90d414356b8e9dbe6&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021500430024825/image.png?ex=6635711c&is=6622fc1c&hm=b89c85fb7a65b4c59bfddf4b5d9e10433bb3916f1f23a1d8b650e80625e03cdd&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021500639744071/image.png?ex=6635711d&is=6622fc1d&hm=62477258c8eacf605571eab2b6f8b583cd3da161b3c40eef399b916b8d90d4ed&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021500891533393/image.png?ex=6635711d&is=6622fc1d&hm=7b4ce32669c588e4cf5161511424710c9985e5ab67eb189666660d264949e19b&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021501117890652/image.png?ex=6635711d&is=6622fc1d&hm=bdfc2a94e63902e7bf31024165f9c7c16df4f2b0f57f20443a6af565572d0b89&=&format=webp&quality=lossless",
                // "https://media.discordapp.net/attachments/1221205104657563789/1231021501117890652/image.png?ex=6635711d&is=6622fc1d&hm=bdfc2a94e63902e7bf31024165f9c7c16df4f2b0f57f20443a6af565572d0b89&=&format=webp&quality=lossless",
              ]}
            />
          </div>

          <div className="mt-5">
            <CardInfo titulo="Como Jogar?">
              Identifique e transcreva o conteúdo de documentos históricos para
              ganhar pontos. A quantidade de pontos que você ganha pode varia de
              acordo com a precisão da sua transcrição.
              <br />
              <br />A precisão da resposta de usuários é calculado por meio de
              uma inteligência artificial que compara as respostas do usuário
              com o texto original, previamente lido por um modelo de Visão
              Computacional 🖥️
              <br />
              <br />
              Maximize os seus pontos e garanta o seu lugar na{" "}
              <b>tabela de liderança</b> do Legado onde os melhores arquivistas
              competem pelo topo 👑
              <br />
              <br />
              Fique de olho na aba de eventos 👀. A cada 15 dias organizamos uma
              evento de 24 horas em que arquivistas de todos os níveis competem
              por prêmios exclusivos 🏆
            </CardInfo>
          </div>
        </section>
      </div>
    </main>
  );
}
