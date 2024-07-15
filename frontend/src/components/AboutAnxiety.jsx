import React from "react";

// Imagens
import ilustracaoMeditacao from "../img/meditacao.svg";
import qrcodePeixinho from "../img/qrcode-peixinho.png";

function AboutAnxiety() {
  const waysToRelax = [
    {
      imagem: `${ilustracaoMeditacao}`,
      titulo: "Meditação Guiada",
      descricao:
        "Meditação Guiada é uma prática de relaxamento e foco mental através de instruções verbais, promovendo bem-estar.",
    },
    {
      imagem: `${ilustracaoMeditacao}`,
      titulo: "Exercícios Físicos",
      descricao:
        "Exercícios físicos envolvem atividades que melhoram a saúde, força, flexibilidade e resistência, beneficiando corpo e mente.",
    },
    {
      imagem: `${ilustracaoMeditacao}`,
      titulo: "Respiração Diafragmática",
      descricao:
        "Respiração diafragmática é uma técnica de respiração profunda que utiliza o diafragma, promovendo relaxamento e melhor oxigenação.",
    },
    {
      imagem: `${ilustracaoMeditacao}`,
      titulo: "Profissional de Saúde",
      descricao:
        "Um profissional da saúde que oferece terapia ajuda indivíduos a melhorar seu bem-estar mental e físico através de tratamentos e aconselhamentos especializados.",
    },
  ];

  return (
    <div className="bg-background-color">
      <div className="max-w-7xl m-auto">
        <div className="text-center">
          <span className="text-blue-primary font-semibold">
            VAMOS FALAR SOBRE
          </span>
          <h2 className="text-blue-primary font-bold text-4xl">
            Transtorno de Ansiedade Generalizada
          </h2>
          <p>
            A ansiedade é um sentimento que causa preocupação excessiva, medo,
            nervosismo e sofrimento antecipado. Todos nós a experimentamos, mas
            quando se torna excessiva, vira um transtorno. Nessa situação,
            precisamos buscar ajuda profissional para lidar com ela.
          </p>
        </div>

        {/* Tópicos sobre Ansiedade */}
        <div>
          <h3 className="text-blue-primary text-2xl font-semibold">
            Como Tratar a Ansiedade?
          </h3>
          <p className="text-gray-primary">
            Para tratar a ansiedade: consulte um profissional de saúde para
            terapia, pratique respiração diafragmática, mantenha-se ativo com
            exercícios físicos e participe de meditação guiada. Essas práticas
            promovem equilíbrio mental.
          </p>
        </div>

        <div className="grid grid-cols-4">
          {waysToRelax.map((ways, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2">
              <img src={ways.imagem} alt="" />
              <h2>{ways.titulo}</h2>
              <p>{ways.descricao}</p>
            </div>
          ))}
        </div>

        {/*  */}
        <div>
          <h3 className="text-blue-primary text-2xl font-semibold">
            Principais Sintomas
          </h3>
          <p className="text-gray-primary">
            A ansiedade manifesta-se através de diversos sintomas. Entre os mais
            comuns estão a falta de ar, fala acelerada, irritabilidade,
            palpitações e dor no peito. Também podem ocorrer insônia, problemas
            digestivos, agitação nas pernas e mãos geladas. Reconhecer esses
            sinais é crucial para entender a condição e buscar o tratamento
            adequado, promovendo uma melhor qualidade de vida.
          </p>
        </div>

        {/*  */}
        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-blue-primary text-2xl font-semibold">
              Principais Sintomas
            </h3>
            <div className="text-gray-primary">
              <p>
                A ansiedade pode afetar profundamente o bem-estar de uma pessoa.
                Lembre-se: você não está sozinho.
              </p>
              <p>
                Buscar ajuda é essencial para sua saúde mental. Se enfrentar
                crises de ansiedade, procure apoio. O CVV (Centro de Valorização
                da Vida) oferece escuta e apoio emocional gratuito e
                confidencial.
              </p>
              <p>
                Ligue para 188, disponível 24 horas, todos os dias. Não sofra em
                silêncio. Compartilhe e busque a ajuda que você merece.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <img src={qrcodePeixinho} alt="" />
            <p>
              A prática da respiração profunda é uma tática eficaz para aliviar
              a ansiedade, pois ajuda a acalmar a mente, reduzir a tensão física
              e emocional, e promover uma sensação de relaxamento e bem-estar
              geral.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAnxiety;
