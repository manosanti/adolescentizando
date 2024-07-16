import React from 'react'



function HomePage() {

    return (

        <div className='h-screen bg-white'>

            <div>

                <div className='grid grid-cols-2'>

                    <div>

                        <h2 className='font-bold text-gray-700 text-6xl'>O seu guia para <span className='text-blue-500'>Saúde Mental</span> é aqui, na <span className='text-blue-500'>Adolescentizando</span>!</h2>

                        <p className='text-gray-600'>Bem-vindo ao <span className='text-gray-900 font-bold'>Adolescentizando</span>, um projeto dedicado a apoiar a saúde mental dos adolescentes. Aqui, oferecemos recursos e uma comunidade acolhedora para ajudar você a enfrentar os desafios emocionais e construir uma vida equilibrada e feliz. Junte-se a nós nessa jornada!</p>

                        <div className='flex gap-3'>

                            <a href="#!" className='text-white bg-blue-600 p-2 px-5 text-xl rounded-full'>Conhecer</a>

                            <a href="#!" className='text-blue-600 bg-white p-2 px-5 text-xl rounded-full border border-blue-600'>Assistir Introdução</a>

                        </div>

                    </div>

                    <div>



                    </div>

                </div>

            </div>

        </div>

    )

}



export default HomePage