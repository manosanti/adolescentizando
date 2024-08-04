import React from "react";

// Images
import futureMe from "../img/futureme.png";

function LetterToFuture() {
  return (
    <div className="bg-background-color min-h-full lg:pb-24 px-4 py-12">
      <div className="2xl:max-w-7xl xl:max-w-6xl grid gap-4 mx-auto">
        <h2 className="font-bad-script text-blue-primary text-5xl w-full 2xl:w-2/6">
          Esta é uma carta para o Eu do Futuro
        </h2>
        <p>
          Escrever uma carta para o futuro é como lançar uma mensagem em uma
          garrafa ao mar do tempo. É um ato de esperança, um registro dos nossos
          sonhos, medos e desejos, destinado a nós mesmos ou a alguém especial,
          em um tempo ainda por vir. Ao colocar palavras no papel, capturamos a
          essência de quem somos no presente, na expectativa de revisitar essas
          memórias e observar o quanto crescemos, mudamos e realizamos. É um
          lembrete de que o futuro é uma página em branco, pronta para ser
          escrita com novas experiências e conquistas.
        </p>
        <a href="https://www.futureme.org/" target="_blank">
        <h2 className="font-bad-script text-blue-primary text-3xl w-full 2xl:hidden">
          Clique na imagem para escrever a sua carta... 👇
        </h2>
          <img src={futureMe} alt="" className="rounded-xl" />
        </a>
      </div>
    </div>
  );
}

export default LetterToFuture;
