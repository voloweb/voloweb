'use client'
import Image from 'next/image'
import Outsourcing from '@/public/services-offered-icons/outsourcing.svg'
import Suporte from '@/public/services-offered-icons/suporte.svg'
export interface CardsType {
  icone: any
  title: string
  text: string
}

export default function ServicesOffered() {
  const cards: CardsType[] = [
    {
      icone: Suporte,
      title: 'Alocação de pessoas tech',
      text: 'Disponibilizamos engenheiros ou equipes sob medida para o seu projeto, garantindo habilidade e compatibilidade com seus objetivos e cultura. Eles colaborarão estreitamente com você, infundindo novas ideias e energia.'
    },
    {
      icone: Outsourcing,
      title: 'Desenvolvimento back-end',
      text: 'Desenvolvimento de infraestrutura de back-end complexa e de alta carga para aplicativos móveis, web e serviços corporativos.'
    },
    {
      icone: Outsourcing,
      title: 'Desenvolvimento Móvel',
      text: 'Especializados no desenvolvimento de aplicativos móveis multiplataforma para iOS e Android.'
    },
    {
      icone: Outsourcing,
      title: 'Desenvolvimento front-end',
      text: 'Construção de aplicações web modulares e de alto desempenho para clientes corporativos e startups.'
    },
    {
      icone: Outsourcing,
      title: 'Prototipagem de UI/UX',
      text: 'Da ideia à realidade. Focado na experiência do usuário, o serviço de UI/UX garante que seu produto digital seja visualmente impactante e fácil de usar.'
    },
    {
      icone: Outsourcing,
      title: 'Desenvolvimento Web',
      text: 'Criação de aplicações web responsivas e com foco no usuário final. Essas aplicações podem ser desde sites institucionais até plataformas complexas que integram diversos sistemas e funcionalidades.'
    },
    {
      icone: Suporte,
      title: 'SEO',
      text: 'Otimização de sites e aplicações web para os mecanismos de busca, utilizando técnicas como pesquisa de palavras-chave, meta tags, sitemap, robots e link building.'
    }
  ]

  return (
    <div className="wave wave-service-gray bg-white">
      <div
        id="servicos"
        className="flex justify-center items-center px-5 scroll-mt-16"
      >
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto max-w-7xl py-10 md:py-14 px-2">
            <div className="col-span-1">
              <h2 className="leading-tight text-[30px] md:text-[54px]">
                Nossos Serviços
              </h2>
            </div>
            {cards.map((item: CardsType) => (
              <div key={item.title} className="col-span-1">
                <Image
                  className="w-7 h-7"
                  priority
                  src={item.icone}
                  alt={`Ícone do ${item.title}`}
                />
                <h3 className="text-xl text-neutra-800 my-4">{item.title}</h3>
                <p className="text-neutra-600 service-description">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
