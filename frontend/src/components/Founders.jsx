import React from "react";
import instagramLogo from "../img/instagram-logo.png";

// Images
import ilustracaoDescricao from '../img/ilustracao-descricao-adolescentizando.svg'
import brendaPhoto from '../img/brenda.jpg'
import lucasPhoto from '../img/lucas.jpeg'
import thaissaPhoto from '../img/thaissa.jpg'
import stellaPhoto from '../img/stella.jpg'

function Founders() {
  const members = [
    {
      secaoImagem: {
        imagem:
          thaissaPhoto,
        textAlt: "teste",
      },
      nome: "Thaissa",
      cargo: "CEO",
      descricao:
        "Neurocientista em começo de carreira com especialização em desenvolvimento cerebral adolescente. Experiência em pesquisa neurobiológica, focada na análise de processos neurais durante a adolescência. Fundadora da Adolescentizando projeto voltado para suporte e recursos educativos para jovens",
      redeSocial: {
        instagram: "https://www.instagram.com/",
        instagramNome: "manosanttt",
      },
    },
    {
      secaoImagem: {
        imagem:
          brendaPhoto,
        textAlt: "teste",
      },
      nome: "Brenda Mendes",
      cargo: "CO-Founder",
      descricao:
        "Neurocientista em começo de carreira com especialização em desenvolvimento cerebral adolescente. Experiência em pesquisa neurobiológica, focada na análise de processos neurais durante a adolescência. Fundadora da Adolescentizando projeto voltado para suporte e recursos educativos para jovens",
      redeSocial: {
        instagram: "https://www.instagram.com/",
        instagramNome: "manosanttt",
      },
    },
    {
      secaoImagem: {
        imagem:
          stellaPhoto,
        textAlt: "teste",
      },
      nome: "Stella",
      cargo: "Designer",
      descricao:
        "Neurocientista em começo de carreira com especialização em desenvolvimento cerebral adolescente. Experiência em pesquisa neurobiológica, focada na análise de processos neurais durante a adolescência. Fundadora da Adolescentizando projeto voltado para suporte e recursos educativos para jovens",
      redeSocial: {
        instagram: "https://www.instagram.com/",
        instagramNome: "manosanttt",
      },
    },
    {
      secaoImagem: {
        imagem:
          lucasPhoto,
        textAlt: "teste",
      },
      nome: "Lucas Santiago",
      cargo: "Desenvolvedor",
      descricao:
        "Neurocientista em começo de carreira com especialização em desenvolvimento cerebral adolescente. Experiência em pesquisa neurobiológica, focada na análise de processos neurais durante a adolescência. Fundadora da Adolescentizando projeto voltado para suporte e recursos educativos para jovens",
      redeSocial: {
        instagram: "https://www.instagram.com/",
        instagramNome: "manosanttt",
      },
    },
  ];

  return (
    <div className="bg-background-color p-32">
      <div className="max-w-7xl m-auto">
        <h2 className="text-blue-primary text-center font-bold text-5xl">QUEM SOMOS NÓS?</h2>
        <p className="text-center text-lg text-gray-description">
          Bem-vindo ao <strong className="font-bold">Adolescentizando</strong>,
          um projeto dedicado a apoiar a saúde mental dos adolescentes. Aqui,
          oferecemos recursos e uma comunidade acolhedora para ajudar você a
          enfrentar os desafios emocionais e construir uma vida equilibrada e
          feliz. Junte-se a nós nessa jornada!
        </p>

        {/* Seção 'Follow' Instagram */}
        <div className="flex justify-center gap-2">
          <a href="#!" className="flex text-4xl font-semibold items-center gap-2">
            <img src={instagramLogo} width={60} height={60} alt="" />
            <span className="text-instagram-gradient">_adolescentizando_</span>
          </a>
        </div>

        {/* Seção Responsáveis pelo Projeto */}
        <div className="grid grid-cols-4">
          {members.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2">
              <div className="justify-center flex mb-3">
                <img
                  src={member.secaoImagem.imagem}
                  alt={member.secaoImagem.textAlt}
                  title={member.secaoImagem.textAlt}
                  className="rounded-full w-24 h-24 object-cover"
                />
              </div>
              <h2 className="text-2xl text-center text-gray-primary font-bold">
                {member.nome}
              </h2>
              <h3 className="text-lg text-center text-gray-description font-semibold">
                {member.cargo}
              </h3>
              <p className="mt-2 text-sm text-gray-description">
                {member.descricao}
              </p>
              <div className="flex justify-center mt-5">
                <a
                  href={member.redeSocial.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <img src={instagramLogo} width={35} height={35} alt="" />
                  <span className="text-instagram-gradient">
                    {member.redeSocial.instagramNome}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Descrição Após Apresentação */}
        <div>
        <p className="text-center text-lg text-gray-description">
          Bem-vindo ao <strong className="font-bold">Adolescentizando</strong>,
          um projeto dedicado a apoiar a saúde mental dos adolescentes. Aqui,
          oferecemos recursos e uma comunidade acolhedora para ajudar você a
          enfrentar os desafios emocionais e construir uma vida equilibrada e
          feliz. Junte-se a nós nessa jornada!
        </p>
        <div className="grid grid-cols-2 items-center">
          <img src={ilustracaoDescricao} alt="" />
          <p><p className="text-center text-lg text-gray-description">
          Bem-vindo ao <strong className="font-bold">Adolescentizando</strong>,
          um projeto dedicado a apoiar a saúde mental dos adolescentes. Aqui,
          oferecemos recursos e uma comunidade acolhedora para ajudar você a
          enfrentar os desafios emocionais e construir uma vida equilibrada e
          feliz. Junte-se a nós nessa jornada!
        </p></p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Founders;
