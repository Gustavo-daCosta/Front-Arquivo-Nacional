import TituloDoc from "@/app/components/Titulo/tituloDoc";
import Navbar from "../../components/Navbar/navbar";
import CardTexto from "@/app/components/CardTexto/CardPlay";
import CardInfo from "@/app/components/CardTexto/CardInfo";

export default function Medio() {
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
            arquivo="Arquivo #98247842894"
            pontos={260}
          />

          <div className="flex flex-col w-full gap-y-5 mt-7">
            <CardTexto
              pontos={260}
              acerto={0.82}
              images={[
                "https://media.discordapp.net/attachments/1221205104657563789/1231020799784386600/SPOILER_image.png?ex=66357075&is=6622fb75&hm=5f13b22fc06a7a39d91251d2b0ee34aaabb5aeb754cdcc8fdf21d37e67e9dfe3&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231020798450466846/image.png?ex=66244cf5&is=6622fb75&hm=e0d66e381be86bd0897c12056d01db7c8c769b64d47c04d1ffa2872266cf4eb8&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231020798693871717/image.png?ex=66357075&is=6622fb75&hm=000eba477f9736f19e2b4121ac689eff770c218f87f94a0e1fd1e374e780aa69&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231020799020896347/image.png?ex=66357075&is=6622fb75&hm=9164219fa376c209ac9485736f35910133baac123681b37653e7664bd94478d3&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231020799280812042/image.png?ex=66357075&is=6622fb75&hm=a162f04240c5d7ff885eb13941e4fb6b8c946967c15f8460512a4bb39143a025&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1221205104657563789/1231020799557898271/image.png?ex=66357075&is=6622fb75&hm=d2380abf15725b0f2169b488dd51b9d140f844e5a7a764991c61bfe1193ae5b2&=&format=webp&quality=lossless",
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
