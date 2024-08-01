import React from 'react'

function AnxietyAttack() {

    const anxietyQuestions = [
        {
            titulo: 'Qual a idade que você se daria se não soubesse quantos anos tem hoje ?',
            descricao: 'Ao fazer essa pergunta, você se força a avaliar como se sente internamente, sem ser influenciado pela cronologia ou pelas expectativas sociais associadas à sua idade real. Isso pode levar a insights valiosos sobre seu estado emocional e mental, permitindo que você se conecte mais profundamente com seu verdadeiro eu e encontre uma sensação de paz e aceitação no momento presente.'
        },
        {
            titulo: 'Se você pudesse fazer 3 pedidos ao gênio da lâmpada hoje, o que você pediria?',
            descricao: 'Ao imaginar que você tem a chance de realizar três desejos, você se concentra nas suas necessidades e aspirações mais profundas, afastando temporariamente os pensamentos ansiosos. Esse exercício mental permite que você identifique o que realmente importa para você, fornecendo clareza e foco. Além disso, ao articular esses desejos, você pode descobrir maneiras práticas de trabalhar em direção a esses objetivos na vida real, o que pode proporcionar um senso de controle e esperança.',
        },
        {
            titulo: 'Como você descreveria a coisa mais bonita do mundo?',
            descricao: 'Ao refletir sobre o que você considera mais bonito, seja uma paisagem natural, uma obra de arte, um ato de bondade, ou um momento de conexão humana, você se permite focar em algo positivo e inspirador. Esta prática pode ajudar a desviar a mente das preocupações e a cultivar um sentimento de admiração e paz interior. Conectar-se com a beleza ao seu redor pode fortalecer seu bem-estar emocional e mental, proporcionando uma sensação de calma e alegria no presente.',
        },
        {
            titulo: 'Como você define o amor?',
            descricao: 'Ao pensar sobre o amor, você se concentra em sentimentos de conexão, aceitação e cuidado, que podem acalmar a mente e aquecer o coração. Essa prática pode ajudar a redirecionar seus pensamentos para algo positivo e significativo, proporcionando um senso de segurança e pertencimento. Refletir sobre o amor pode fortalecer seu bem-estar emocional, promovendo uma sensação de paz e esperança no presente.',
        },
        {
            titulo: 'Se você pudesse viajar no tempo, ia preferia ia para o passado ou o futuro?',
            descricao: 'Pensar em viajar no tempo, seja para o passado ou o futuro, pode ser uma forma interessante de aliviar a ansiedade, pois nos faz refletir sobre nossa posição única no presente. Se você escolhesse o passado, poderia revisitar momentos felizes ou aprender com erros antigos, lembrando que já superou desafios antes. Optar pelo futuro, por outro lado, pode trazer uma sensação de curiosidade e expectativa positiva, imaginando conquistas e realizações futuras. Ambos os cenários destacam que o tempo é uma jornada contínua de aprendizado e crescimento, e que o presente é onde temos o poder de moldar nosso destino, transformando a ansiedade em uma oportunidade de ação e mudança.',
        },
        {
            titulo: 'Se fosse possível reviver um dia no passado qual seria e porque?',
            descricao: 'Essa pergunta permite à pessoa focar em memórias positivas ou conquistas passadas, lembrando que ela já superou momentos difíceis anteriormente. Isso pode oferecer conforto ao mostrar que existe um histórico de resiliência e capacidade de lidar com desafios, incentivando-a a enfrentar o presente com mais confiança e esperança no futuro.',
        },
        {
            titulo: 'Se você só pudesse escutar uma música durante 2 anos, qual seria e por quê?',
            descricao: 'Essa pergunta pode levar a pessoa a pensar na música que mais a acalma, inspira ou traz boas lembranças, criando um ambiente mental mais tranquilo. Além disso, ao concentrar-se em uma escolha musical que traga conforto emocional, a pessoa pode encontrar um meio de relaxamento e redução do estresse, ajudando a diminuir os sintomas da ansiedade.',
        },
        {
            titulo: 'Qual é o elogio que fez você se sentir especial?',
            descricao: 'Esse tipo de pergunta pode direcionar a pessoa a lembrar de momentos em que se sentiu apreciada, reforçando sua autoestima e confiança. Isso pode ajudar a reduzir a ansiedade ao proporcionar uma sensação de validação e segurança emocional, lembrando que é capaz e digna de reconhecimento positivo.',
        },
        {
            titulo: 'Se você pudesse definir a felicidade em 3 palavras, quais seriam?',
            descricao: 'Essa pergunta incentiva a pessoa a pensar em conceitos como gratidão, conexão e realização, que são fundamentais para o bem-estar emocional. Ao contemplar essas palavras, a pessoa pode encontrar maneiras de cultivar esses sentimentos no presente, ajudando a reduzir a ansiedade ao proporcionar uma perspectiva mais positiva e motivadora sobre a vida.',
        },
        {
            titulo: 'Quais são as melhores coisas de estar vivo?',
            descricao: 'Refletir sobre as melhores coisas de estar vivo pode ajudar a pessoa durante uma crise de ansiedade ao lembrá-la dos aspectos positivos e significativos da existência. Isso inclui experiências de amor, conexões interpessoais, oportunidades de crescimento pessoal, momentos de alegria e a capacidade de aprender e evoluir. Essa reflexão pode trazer conforto ao enfatizar que a vida é cheia de possibilidades e momentos valiosos, encorajando a pessoa a encontrar gratidão e esperança mesmo diante de desafios.',
        },
    ]

  return (
    <div className='bg-background-color min-h-screen 2xl:py-20 xl:py-10'>
        <div className='2xl:max-w-7xl xl:max-w-6xl m-auto grid gap-7'>
            <div className='text-center text-blue-primary'>
                <span className="font-semibold">VOCÊ ESTÁ PASSANDO POR UMA CRISE DE ANSIEDADE?</span>
                <h2 className="font-bold text-6xl mb-4">PERGUNTE A SI MESMO:</h2>
            </div>
            {anxietyQuestions.map((anxietyList, index) =>
                <div key={index}>
                    <h2 className='text-xl text-blue-primary font-bold'>{anxietyList.titulo}</h2>
                    <p>{anxietyList.descricao}</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default AnxietyAttack