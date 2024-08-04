import React from "react";

// Images
import logoAdolescentizando from "../img/logo-adolescentizando.jpg";

function HomePage() {
  return (
    <div className="bg-background-color min-h-screen py-0 md:py-12 xl:py-0">
      <div className="mx-auto 2xl:max-w-7xl xl:max-w-6xl flex min-h-screen w-screen items-center">
        <div className="lg:grid lg:grid-cols-2 sm:grid xl:gap-4 2xl:gap-12 items-center xl:justify-evenly 2xl:justify-center xl:flex 2xl:flex">
          <div className="xl:w-3/5 px-4 xl:p-0 mb-12 md:mb-6 xl:mb-0">
            <h2 className="xl:text-start font-bold mb-4 text-gray-primary text-3xl sm:text-5xl md:text-6xl lg:text-3xl">
              O seu guia para{" "}
              <span className="text-blue-500">Saúde Mental</span> é aqui, na{" "}
              <span className="text-blue-500">Adolescentizando</span>!
            </h2>
            <p className="text-gray-description xl:text-start">
              Bem-vindo ao <span className="font-bold">Adolescentizando</span>,
              um projeto dedicado a apoiar a saúde mental dos adolescentes.
              Aqui, oferecemos recursos e uma comunidade acolhedora para ajudar
              você a enfrentar os desafios emocionais e construir uma vida
              equilibrada e feliz. Junte-se a nós nessa jornada!
            </p>
          </div>

          <div className="flex justify-center">
            <a href="https://www.instagram.com/_adolescentizando_/" target="_blank">
            <img
              src={logoAdolescentizando}
              className="h-48 sm:h-64 md:h-96 rounded-full shadow-lg shadow-black/5"
              draggable="false"
              alt="Logo Adolescentizando"
              />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
