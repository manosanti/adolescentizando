import React from "react";

function TeraphyPrograms() {
  const teraphyProgramsUniversity = [
    {
      titulo: "Universidade de São Paulo (USP)",
      descricao:
        "Serviço de Psicologia da Faculdade de Filosofia, Ciências e Letras de Ribeirão Preto (FFCLRP): Oferece atendimento psicológico para a comunidade, com foco em proporcionar acesso a tratamentos psicológicos de qualidade.",
    },
    {
      titulo: "Universidade Federal do Rio de Janeiro (UFRJ)",
      descricao:
        "Serviço de Psicologia Aplicada (SPA): Disponibiliza atendimento psicológico para a comunidade em geral, realizado por estudantes de psicologia supervisionados por profissionais experientes.",
    },
    {
      titulo: "Universidade Estadual de Campinas (UNICAMP)",
      descricao:
        "Centro de Atenção Psicossocial (CAPS): Oferece serviços de psicoterapia e apoio psicológico para a comunidade universitária e externa.",
    },
    {
      titulo: "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
      descricao:
        "Centro de Atendimento Psicológico (CAP): Oferece atendimento psicoterapêutico realizado por estudantes de pós-graduação em Psicologia, sob supervisão.",
    },
    {
      titulo: "Universidade Federal de Minas Gerais (UFMG)",
      descricao: "Serviço de Psicologia Aplicada (SPA): Oferece atendimentos psicológicos para a comunidade interna e externa.",
    },
    {
      titulo: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      descricao: "Centro de Atendimento Psicológico (CAP): Disponibiliza psicoterapia para estudantes e funcionários da universidade."
    },
    {
      titulo: "Universidade Federal do Paraná (UFPR)",
      descricao: "Serviço de Psicologia da UFPR: Oferece suporte psicológico para alunos, professores e técnicos administrativos.",
    },
    {
      titulo: "Universidade Federal da Bahia (UFBA)",
      descricao: "Serviço de Psicologia (SerPsi): Disponibiliza atendimento psicológico para a comunidade acadêmica.",
    },
    {
      titulo: "Universidade Federal de Pernambuco (UFPE)",
      descricao: "Serviço de Psicologia Aplicada (SPA): Fornece atendimento psicológico para a comunidade interna e externa.",
    },
    {
      titulo: "Universidade Federal do Ceará (UFC)",
      descricao: "Centro de Psicologia Aplicada (CPA): Oferece serviços de psicoterapia para a comunidade universitária.",
    },
    {
      titulo: "Universidade de Brasília (UnB)",
      descricao: "Serviço de Psicologia Aplicada (SPA): Disponibiliza atendimento psicológico para estudantes e funcionários.",
    },
    {
      titulo: "Universidade Federal do Pará (UFPA)",
      descricao: "Serviço de Psicologia Aplicada (SPA): Oferece psicoterapia para a comunidade universitária e externa.",
    },
  ];

  const capsUBS = [
    {
      titulo: "Centros de Atenção Psicossocial (CAPS)",
      descricao: `Os CAPS são unidades especializadas no atendimento de pessoas com transtornos mentais graves e persistentes. Eles oferecem serviços de:
      - Atendimento individual e em grupo: Psicoterapia, consultas psiquiátricas e acompanhamento multidisciplinar.
      - Atividades terapêuticas: Oficinas, grupos de convivência e atividades de reintegração social.
      - Apoio às famílias: Orientação e suporte para os familiares dos pacientes.`,
    },
    {
      titulo: "Unidades Básicas de Saúde (UBS)",
      descricao: `As UBS são a porta de entrada para o Sistema Único de Saúde (SUS) e oferecem uma ampla gama de serviços de saúde, incluindo:
      - Acompanhamento psicológico: Atendimento realizado por psicólogos e encaminhamento para serviços especializados quando necessário.
      - Grupos terapêuticos: Atividades em grupo voltadas para a promoção da saúde mental e prevenção de transtornos.
      - Apoio integral: Atendimento integrado com outros profissionais de saúde, como médicos, enfermeiros e assistentes sociais.`,
    },
  ];

  return (
    <div className="bg-background-color py-16">
      <div className="2xl:max-w-7xl xl:max-w-6xl m-auto">
        <div className="text-blue-primary text-center mb-12">
          <span className="font-semibold">SERVIÇOS PÚBLICOS DE SAÚDE</span>
          <h2 className="font-bold text-6xl mb-4">Programas de Terapias Acessíveis das Faculdades</h2>
          <p className="text-gray-primary">
            Muitas universidades renomadas oferecem serviços de psicoterapia a
            preços acessíveis ou até gratuitos, atendendo tanto estudantes
            quanto a comunidade em geral. Aqui estão alguns exemplos de
            programas oferecidos por faculdades famosas:
          </p>
        </div>

        <div className="mb-20">
          {teraphyProgramsUniversity.map((program, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-xl text-blue-primary font-bold">
                {program.titulo}
              </h4>
              <p>{program.descricao}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-primary mb-2">
            Centros de Atenção Psicossocial (CAPS) e Unidades Básicas de Saúde
            (UBS)
          </h3>
          <p className="mb-10">
            Os serviços públicos de saúde no Brasil também oferecem acesso a
            tratamentos psicológicos e psiquiátricos através dos Centros de
            Atenção Psicossocial (CAPS) e das Unidades Básicas de Saúde (UBS).
          </p>
          {capsUBS.map((program, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-xl text-blue-primary font-bold">
                {program.titulo}
              </h4>
              <p>{program.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeraphyPrograms;
