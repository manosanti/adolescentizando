import React from "react";

function CVV() {
  return (
    <div className="bg-background-color py-14">
      <div className="max-w-7xl xl:max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <span className="font-semibold text-blue-primary">
              CONHEÇA O CVV
            </span>
            <h2 className="text-blue-primary font-bold text-5xl">
              Centro de Valorização da Vida
            </h2>
            <p>
              Formado exclusivamente por voluntários, o CVV oferece apoio
              emocional e prevenção do suicídio gratuitamente. Quem nos procura,
              normalmente está se sentido solitário ou precisa conversar de
              forma sigilosa, sem julgamentos, críticas ou comparações. Atuamos
              nacionalmente. Nosso atendimento é realizado pelo telefone 188 (24
              horas por dia e sem custo de ligação), chat, e-mail e pessoalmente
              em alguns endereços.
            </p>
            <p>
              O CVV é uma entidade nacional fundada em 1962, financeira e
              ideologicamente independente. Sem viés religioso,
              político-partidário ou empresarial. Você pode ainda querer saber o
              que mais o CVV oferece, como se tornar voluntário ou colaborar com
              a instituição.
            </p>
            <a
              href="https://cvv.org.br/#:~:text=O%20CVV%20%C3%A9%20uma%20entidade,ou%20colaborar%20com%20a%20institui%C3%A7%C3%A3o."
              target="_blank"
              className="text-blue-primary border-2 border-blue-primary mt-4 text-xl rounded-full h-14 px-7 flex items-center w-fit"
            >
              Saiba Mais
            </a>
            <a href="#!"></a>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/JeN4Xu9v86M"
              title="CVV Apoio Emocional"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="rounded-xl w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVV;
