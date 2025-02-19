import instagramLogo from "../img/instagram-logo.png";

// Images
import ilustracaoDescricao from "../img/ilustracao-descricao-adolescentizando.svg";
import brendaPhoto from "../img/brenda.jpg";
import lucasPhoto from "../img/lucas.jpeg";
import thaissaPhoto from "../img/thaissa.jpg";
import stellaPhoto from "../img/stella.jpg";

function Founders() {
  const members = [
    {
      secaoImagem: {
        imagem: thaissaPhoto,
        textAlt: "teste",
      },
      nome: "Thaissa",
      cargo: "Founder",
      descricao: `Thaíssa uma é  jovem ativista  apaixonada por psicologia,com um profundo desejo de transformar a realidade ao seu redor, dedicando-se a promover a conscientização sobre a importância do autoconhecimento,
          Thaíssa acredita que ao entender melhor a si mesmo, cada indivíduo pode descobrir suas verdadeiras potencialidades e superar desafios pessoais, contribuindo para uma sociedade mais justa e equilibrada.`,
      redeSocial: {
        instagram: "https://www.instagram.com/_thaissanogueira/",
        instagramNome: "_thaissanogueira",
      },
    },
    {
      secaoImagem: {
        imagem: brendaPhoto,
        textAlt: "teste",
      },
      nome: "Brenda Mendes",
      cargo: "CO-Founder",
      descricao:
        "Neurocientista em começo de carreira com especialização em desenvolvimento cerebral adolescente. Experiência em pesquisa neurobiológica, focada na análise de processos neurais durante a adolescência. Fundadora da Adolescentizando projeto voltado para suporte e recursos educativos para jovens",
      redeSocial: {
        instagram: "https://www.instagram.com/mendess_souza/",
        instagramNome: "mendess_souza",
      },
    },
    {
      secaoImagem: {
        imagem: stellaPhoto,
        textAlt: "teste",
      },
      nome: "Stella",
      cargo: "Designer",
      descricao:
        "Stella é uma Ativista social e entusiasta no estudo da psicologia e desenvolvimento cognitivo infanto-juvenil. Tem como um de seus propósitos a inclusão social e transformação da realidade de adolescentes através do processo terapêutico e da cura pela fala. Atua como Diretora de Mídias sociais no adolescentizando",
      redeSocial: {
        instagram: "https://www.instagram.com/stellabrittoo/",
        instagramNome: "stellabrittoo",
      },
    },
    {
      secaoImagem: {
        imagem: lucasPhoto,
        textAlt: "teste",
      },
      nome: "Lucas Santiago",
      cargo: "Desenvolvedor",
      descricao:
        "Desenvolvedor frontend com especialização em design UI/UX, trabalhando com tecnologias como ReactJS e Angular. Responsável pelo desenvolvimento e parte visual do projeto Adolescentizando. Possui uma grande paixão pelo basquete, tanto jogando quanto acompanhando a NBA, e também aprecio uma ampla variedade de gêneros musicais. Considero-me um nerd fora da bolha, sempre buscando novas aventuras e conhecimentos.",
      redeSocial: {
        instagram: "https://www.instagram.com/manosanttt/",
        instagramNome: "manosanttt",
      },
    },
  ];

  return (
    <div className="bg-background-color px-4 xl:py-0 2xl:py-3 xl:p-14 2xl:p-32 2xl:px-0">
      <div className="2xl:max-w-7xl m-auto">
        <h2 className="text-blue-primary text-center mb-4 font-bold text-5xl xl:text-7xl">
          QUEM SOMOS NÓS?
        </h2>
        <p className="text-center text-lg text-gray-description">
          Antes de mais nada, conheça um pouco sobre os responsáveis pelo
          projeto e o papel de cada um aqui dentro. Nossa equipe, unida pela
          paixão e dedicação, trabalha incansavelmente para transformar ideias
          em realidade, criando experiências impactantes e significativas para
          os adolescentes.
        </p>

        {/* Seção 'Follow' Instagram */}
        <div className="flex justify-center my-8 gap-2">
          <a
            href="https://www.instagram.com/_adolescentizando_/"
            className="flex text-2xl xl:text-4xl font-semibold items-center gap-2"
            target="_blank"
          >
            <img src={instagramLogo} width={60} height={60} alt="" />
            <span className="text-instagram-gradient">_adolescentizando_</span>
          </a>
        </div>

        {/* Seção Responsáveis pelo Projeto */}
        <div className="grid grid-cols-1 grid-rows-2 xl:grid-rows-1 md:grid-cols-2 xl:grid-cols-4 mb-12">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg py-8 px-4 m-2 flex flex-col"
            >
              <div className="flex-grow">
                <div className="justify-center flex mb-3">
                  <img
                    src={member.secaoImagem.imagem}
                    alt={member.secaoImagem.textAlt}
                    title={member.secaoImagem.textAlt}
                    className="rounded-full w-28 h-28 object-cover"
                    draggable="false"
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
              </div>
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
          <div className="xl:grid xl:grid-rows-1 xl:h-fit xl:grid-cols-2 pb-8 2xl:pb-0 xl:pb-24 items-center">
            <div className="justify-center hidden lg:flex 2xl:flex">
              <img src={ilustracaoDescricao} className="mb-12 xl:mb-0" alt="" />
            </div>
            <div className="gap-6 flex flex-col text-lg text-start md:text-start lg:text-start text-gray-description">
              <h2 className="text-blue-primary text-center 2xl:text-start mb-4 md:text-5xl font-bold text-3xl 2xl:text-4xl">
                Propósito Adolescentizando
              </h2>
              <p>
                O nosso site é uma plataforma dedicada à saúde mental dos
                adolescentes, criada com o objetivo de democratizar o acesso a
                cuidados psicológicos. Nosso foco é promover a conscientização
                sobre a importância da saúde mental e oferecer atividades
                incríveis que auxiliem no autoconhecimento e no alívio durante
                momentos de crise.
              </p>
              <p>
                Aqui os adolescentes encontram uma ampla gama de recursos que
                visam informar e apoiar sua jornada emocional. Com artigos,
                vídeos, e exercícios práticos, o site é um espaço seguro para
                jovens que desejam entender melhor suas emoções e encontrar
                estratégias eficazes para lidar com elas.
              </p>
              <p>
                Nosso objetivo é criar um espaço acolhedor e informativo, onde
                cada jovem possa se sentir compreendido e apoiado. Através de
                conteúdos cuidadosamente elaborados, queremos mostrar que
                ninguém está sozinho em suas lutas e que é possível encontrar
                caminhos para uma vida emocionalmente equilibrada e saudável.
              </p>
              <p>Esperamos que sua jornada conosco seja muito proveitosa!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders;
