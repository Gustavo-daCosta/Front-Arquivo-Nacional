import TituloDoc from "@/app/components/Titulo/tituloDoc";
import Navbar from "../../components/Navbar/navbar";
import CardTexto from "@/app/components/CardTexto/CardPlay";
import CardInfo from "@/app/components/CardTexto/CardInfo";

export default function Dificil() {
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
            arquivo="Arquivo #789309359"
            pontos={500}
          />

          <div className="flex flex-col w-full gap-y-5 mt-7">
            <CardTexto
              pontos={500}
              acerto={0.79}
              images={[
                "https://media.discordapp.net/attachments/1221205104657563789/1231021973539131494/image.png?ex=6635718d&is=6622fc8d&hm=b9dae17e3e6ad04d887134fc9d94584375a999bf3a25635dadce84667ba7b913&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021973820280842/image.png?ex=6635718d&is=6622fc8d&hm=e19d08cc853635e97a0afa7ea314c1a06a72f7906ecd87edff2fa5ce07825da3&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021974126461018/image.png?ex=6635718d&is=6622fc8d&hm=47a51ae3377f4a2f410ba61c0210571ef53827297337e634b7f82f7691417892&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021974407483422/image.png?ex=6635718d&is=6622fc8d&hm=9ca39838580294f685f1e2acaafc1b25e0e4180f6de244d52529829d884f5a2c&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021974671589446/image.png?ex=6635718e&is=6622fc8e&hm=5a00585ab25060c3a617b7b48c8cb3e311eec3d0a8550283e13496ad57a0329f&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021974914994236/image.png?ex=6635718e&is=6622fc8e&hm=679c1451e729d3ad4db7f0936e5ac090e2f8b781e03425f948f06660b0c1482a&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021975225237596/image.png?ex=6635718e&is=6622fc8e&hm=5c0ac9971db6703d1086be180ef4ab2bea676a12a3348f81ad8ccb90cd884605&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021975472705637/image.png?ex=6635718e&is=6622fc8e&hm=bac2f80324c5f56a828e174dd740507dbcbd567150bd3e7434445587c7c43a32&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021975737208903/image.png?ex=6635718e&is=6622fc8e&hm=00bc1df340eb0089fbd6976586ea2fbc6c8885cb3439d2fc2a4e95d93f8d6f96&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231021976034738257/image.png?ex=6635718e&is=6622fc8e&hm=8d836732c77f38ad1bf16e416d43d487f6f0ed9d2d157c56c32eabc95cb23628&=&format=webp&quality=lossless",
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
