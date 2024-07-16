import React from "react";

// Images
import hugPhoto from "../img/hug.png";

function Conclusion() {
  return (
    <div className="bg-background-color">
      <div className="mx-auto max-w-7xl">
        {/* Menção a um novo site */}
        <div className="grid grid-cols-2 items-center gap-16 py-24">
          <div>
            <h2 className="text-blue-primary font-bold text-5xl">
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
            className="rounded-xl"
            scrolling="yes"
            frameborder="1"
            marginheight="0px"
            marginwidth="0px"
            height="400px"
            width="600px"
            allowfullscreen
          ></iframe>
        </div>

        <div className="grid grid-cols-2 gap-12 items-center">
          <img src={hugPhoto} alt="" />
          <h2 className="font-semibold text-gray-primary text-xl">
            Chegar até aqui é uma conquista e queremos agradecer por dedicar seu
            tempo ao nosso site. Sabemos que lidar com questões de saúde mental
            pode ser desafiador, mas queremos que você saiba que não está
            sozinho nessa jornada. Ao explorar nosso conteúdo, esperamos que
            tenha encontrado insights valiosos e apoio que possam ajudá-lo em
            seu caminho. Além do nosso site, mantemos uma vibrante comunidade no
            Instagram, onde compartilhamos diariamente conteúdos de psicologia
            ,neurociência e saúde mental de maneiras criativas. É um espaço onde
            você pode encontrar inspiração, informações úteis e, acima de tudo,
            a certeza de que há sempre recursos disponíveis para você.
            Agradecemos sinceramente por sua visita e por confiar em nós como
            parte de sua busca por bem-estar mental. Continuaremos a oferecer
            suporte e informação, porque acreditamos que cada passo em direção à
            saúde mental é significativo. Com gratidão, Equipe do
            Adolescentizando.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Conclusion;
