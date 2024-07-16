import React from "react";


// Images
import logoAdolescentizando from '../img/logo-adolescentizando.jpg'

function HomePage() {
  return (
    <div className="bg-bege-primary py-48">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="w-3/5">
            <h2 className="font-bold mb-4 text-gray-primary text-6xl">
              O seu guia para{" "}
              <span className="text-blue-500">Saúde Mental</span> é aqui, na{" "}
              <span className="text-blue-500">Adolescentizando</span>!
            </h2>
            <p className="text-gray-description">
              Bem-vindo ao{" "}
              <span className="font-bold">Adolescentizando</span>,
              um projeto dedicado a apoiar a saúde mental dos adolescentes.
              Aqui, oferecemos recursos e uma comunidade acolhedora para ajudar
              você a enfrentar os desafios emocionais e construir uma vida
              equilibrada e feliz. Junte-se a nós nessa jornada!
            </p>
          </div>

          <div>
            <img src={logoAdolescentizando} className="h-96 rounded-full shadow-lg shadow-black/5" draggable="false" alt="" />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default HomePage;
