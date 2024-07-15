import React from "react";

function DepressionTDAH() {
  return (
    <div className="bg-background-color">
      <div className="max-w-7xl m-auto">
        <div className="text-blue-primary text-center">
          <span className="font-semibold">
            CONHECENDO TRANSTORNOS DE SAÚDE MENTAL
          </span>
          <h2 className="font-bold text-6xl">Depressão & TDAH</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="text-end">
            A depressão é um transtorno mental sério que vai além da tristeza
            passageira. Caracteriza-se por sentimentos persistentes de desânimo,
            perda de interesse em atividades antes prazerosas, alterações no
            apetite e no sono, fadiga extrema e dificuldade de concentração.
            Pode afetar gravemente a qualidade de vida e as relações pessoais,
            necessitando de tratamento especializado, que pode incluir terapia e
            medicação.
          </div>
          <div className="text-start">
            O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é um
            distúrbio neuropsiquiátrico que afeta crianças e adultos. Os
            principais sintomas incluem desatenção, hiperatividade e
            impulsividade, dificultando o desempenho escolar, profissional e
            social. Pessoas com TDAH podem ter dificuldades em manter o foco,
            seguir instruções e controlar comportamentos impulsivos. O
            tratamento combina terapia comportamental e, em alguns casos,
            medicação.
          </div>
        </div>

        {/*  */}
        <div>
          <h2 className="text-blue-primary font-semibold text-2xl">Como Tratar a Depressão?</h2>
          <p>
            A depressão pode ser tratada com uma combinação de psicoterapia e
            medicação. A terapia cognitivo-comportamental é eficaz, ajudando a
            mudar padrões negativos de pensamento. Antidepressivos podem ser
            prescritos para ajustar os desequilíbrios químicos no cérebro. Além
            disso, mudanças no estilo de vida, como exercícios regulares, uma
            dieta saudável e técnicas de relaxamento, podem ser benéficas.
          </p>
        </div>

        <div>
          <h2 className="text-blue-primary font-semibold text-2xl">Principais Sintomas da Depressão</h2>
          <p>
            Tristeza persistente, perda de interesse em atividades, alterações
            no apetite e no sono, fadiga, sentimentos de culpa ou inutilidade,
            dificuldade de concentração e pensamentos de morte ou suicídio.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <i
            class="fa-solid fa-triangle-exclamation"
            style={{ color: "#1D5EC0", fontSize: "6rem" }}
          ></i>
          <p className="text-blue-primary font-semibold text-center w-2/4">
            Se identificar algum sintoma, procure um profissional adequado para
            lhe avaliar. Não se autodiagnostique e nem se automedique!
          </p>
        </div>

        <div>
          <h2 className="text-blue-primary font-semibold text-2xl">Como Tratar o TDAH?</h2>
          <p>
            O TDAH é tratado através de uma combinação de terapia comportamental
            e medicação. A terapia pode ajudar a desenvolver habilidades de
            organização, manejo do tempo e técnicas para melhorar o foco. Os
            medicamentos, como estimulantes, ajudam a aumentar a concentração e
            diminuir a hiperatividade e impulsividade. A colaboração entre pais,
            professores e profissionais de saúde é fundamental para um
            tratamento eficaz.
          </p>
        </div>

        <div>
          <h2 className="text-blue-primary font-semibold text-2xl">Principais Sintomas do TDAH</h2>
          <p>
            Desatenção (dificuldade em manter o foco, organização e seguir
            instruções), hiperatividade (inquietação, dificuldade em permanecer
            sentado) e impulsividade (ações precipitadas, dificuldade em esperar
            a sua vez).
          </p>
        </div>
      </div>
    </div>
  );
}

export default DepressionTDAH;
