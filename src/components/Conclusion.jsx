import React from "react";
import instagramLogo from "../img/instagram-logo.png";

// Images
import hugPhoto from "../img/hug.png";

function Conclusion() {
  return (
    <div className="bg-background-color py-12 px-4">
      <div className="mx-auto 2xl:max-w-7xl xl:max-w-6xl">
        {/* Menção a um novo site */}
        {/* <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-16 xl:py-24">
          <div>
            <h2 className="text-blue-primary font-bold text-5xl mb-4 xl:mb-0">
              Conheça a PsyMeet
            </h2>
            <p className="text-gray-primary text-xl">
              O PsyMeet é uma plataforma que facilita o acesso a psicólogos para
              pessoas em situação de vulnerabilidade socioeconômica. Com
              atendimentos acessíveis e sessões online, eles buscam oferecer
              suporte à saúde mental de forma conveniente e inclusiva. A
              variedade de especialistas disponíveis permite que os usuários
              encontrem um profissional adequado às suas necessidades. Se você
              conhece alguém que poderia se beneficiar, não hesite em recomendar
              essa valiosa ferramenta! 😊🌟
            </p>
          </div>
          <iframe
            src="https://www.psymeetsocial.com/"
            name="myiFrame"
            className="rounded-xl h-80 xl:h-80 w-full"
            scrolling="yes"
            frameborder="1"
            marginheight="0px"
            marginwidth="0px"
            allowfullscreen
          ></iframe>
        </div> */}

        <div className="xl:grid xl:grid-cols-1 gap-12 items-center py-12 lg:pb-0 xl:pb-20">
          <h2 className="text-blue-primary font-bold text-3xl mb-4 xl:mb-0 xl:hidden">
            Obrigado por chegar até aqui!
          </h2>
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center">
            <img src={hugPhoto} alt="" className="w-full lg:w-2/4" />
            <div>
              <h2 className="font-semibold text-gray-primary text-xl">
                Chegar até aqui é uma conquista, e agradecemos por dedicar seu
                tempo ao nosso site. Reconhecemos os desafios da saúde mental e
                queremos que saiba que não está sozinho. Esperamos que nosso
                conteúdo tenha oferecido insights e apoio valiosos. Além do
                site, temos uma comunidade ativa no Instagram com conteúdos
                diários de psicologia, neurociência e saúde mental. Agradecemos
                por confiar em nós e continuaremos a oferecer suporte e
                informação, acreditando que cada passo em direção à saúde mental
                é importante. Com gratidão, Equipe do Adolescentizando.
              </h2>
              <div className="flex flex-col justify-start my-8 gap-2">
                <p className="text-gray-description">Não esqueça de nos seguir no Instagram!</p>
                <a
                  href="https://www.instagram.com/_adolescentizando_/"
                  className="flex text-2xl xl:text-4xl font-semibold items-center gap-2"
                  target="_blank"
                >
                  <img src={instagramLogo} width={60} height={60} alt="" />
                  <span className="text-instagram-gradient">
                    _adolescentizando_
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conclusion;
