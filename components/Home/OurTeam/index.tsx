'use client'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Button from '@/components//Shared/Button'
import OurTeamImg from '@/public/our-team/our-team.jpg'
import CustomerReviewsImg from '@/public/customer-reviews.jpg'
import About from '@/public/our-team/about.jpg'
import IconCheck from '@/public/our-team/check.svg'
import { SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export interface TextAbout {
  label: string
  text: string
}
export interface NumbersTeamType {
  label: string
  number: number
  setState: Function
  state: number
  durationCounter: number
}

export default function OurTeam() {
  const router = useRouter()
  const [refTeamNumbers, inViewTeamNumbers] = useInView({ threshold: 0.5 })

  let [counterYears, setCounterYears] = useState(0)
  let [counterClients, setCounterClients] = useState(0)
  let [counterProjects, setCounterProjects] = useState(0)

  useEffect(() => {
    if (inViewTeamNumbers)
      numbersTeam.forEach((item) =>
        increment(
          item.state,
          item.number,
          item.durationCounter,
          (value: SetStateAction<number>) => item.setState(value)
        )
      )
    else numbersTeam.forEach((item) => item.setState(0))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewTeamNumbers])

  const textAreas: TextAbout[] = [
    {
      label: 'Alocação de pessoas tech:',
      text: 'Conectamos os melhores talentos às suas demandas.'
    },
    {
      label: 'Desenvolvimento:',
      text: 'Back-end, front-end, mobile, UI/UX e web.'
    },
    {
      label: 'SEO:',
      text: 'Otimizamos seus projetos para os motores de busca.'
    }
  ]

  const textTeam: TextAbout[] = [
    {
      label: 'Foco no cliente:',
      text: 'Suas necessidades são a nossa prioridade.'
    },
    {
      label: 'Qualidade:',
      text: 'Entregamos produtos confiáveis e eficientes.'
    },
    {
      label: 'Inovação:',
      text: 'Estamos sempre um passo à frente.'
    }
  ]

  const numbersTeam: NumbersTeamType[] = [
    {
      label: 'Anos de Mercado',
      number: 2,
      setState: (value: number) => setCounterYears(value),
      state: counterYears,
      durationCounter: 500
    },
    {
      label: 'Clientes satisfeitos',
      number: 10,
      setState: (value: number) => setCounterClients(value),
      state: counterClients,
      durationCounter: 250
    },
    {
      label: 'Projetos entregues',
      number: 20,
      setState: (value: number) => setCounterProjects(value),
      state: counterProjects,
      durationCounter: 125
    }
  ]

  const increment = (
    i: number,
    max: number,
    time: number,
    setCounter: (value: SetStateAction<number>) => void
  ) => {
    if (i >= max) return
    setTimeout(() => {
      setCounter(i + 1)
      increment(i + 1, max, time, setCounter)
    }, time)
  }

  return (
    <div id="sobre" className="scroll-mt-16">
      <div className="wave wave-about-white bg-ourteam">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-7xl py-10 md:py-14 px-5 sm:px-6 lg:px-10">
          <div className="col-span-1 hidden md:block">
            <Image
              className="w-full h-auto rounded-2xl"
              priority
              src={OurTeamImg}
              alt="Homem trabalhando no notebook"
            />
          </div>

          <div className="flex flex-col justify-center col-span-1">
            <h1 className="font-medium leading-tight text-neutra-700 mb-4">
              Sobre
            </h1>
            <p className="text-neutra-600 mb-2">
              <span className="text-neutra-700">Inicialmente</span>, agradecemos
              por dedicar seu tempo para nos conhecer melhor.
            </p>
            <p className="text-neutra-600 mb-2">
              A Volo é uma empresa de desenvolvimento de software especializada
              na transformação de ideias em soluções digitais. Nossos projetos
              se destacam pela experiência do usuário, qualidade e
              confiabilidade.
            </p>

            <p className="text-neutra-600 mb-2">
              <span className="text-neutra-700">Parceiros de confiança:</span>{' '}
              Entregamos soluções personalizadas, alinhadas às necessidades
              específicas de cada cliente.
            </p>

            <p className="text-neutra-600 mb-2">
              <span className="text-neutra-700">Inovadores:</span> Buscamos
              constantemente novas tecnologias e tendências para oferecer o que
              há de mais moderno em desenvolvimento de software.
            </p>
          </div>
        </div>
      </div>

      <div className="wave wave-about-gray bg-white">
        <div className="grid grid-cols-1 grid-cols-re md:grid-cols-2 gap-5 mx-auto max-w-7xl py-10 md:py-14 px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col justify-center col-span-1 order-2 md:order-1">
            <h1 className="font-medium leading-tight text-neutra-700 mb-4">
              Áreas de atuação:
            </h1>
            <ul className="mb-4">
              {textAreas.map((item: TextAbout) => (
                <li key={item.label} className="flex gap-2 mt-2">
                  <Image
                    className="w-5 h-5 mt-0.5"
                    priority
                    src={IconCheck}
                    alt="Ícone check"
                  />
                  <p className="text-neutra-600">
                    <span className="text-neutra-700 font-medium pr-1">
                      {item.label}
                    </span>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <div>
              <Button
                onClick={() => router.push('/#contato')}
                aria-label="Contato"
              >
                Contato
              </Button>
            </div>
          </div>

          <div className="col-span-1 order-1 md:order-2">
            <Image
              className="w-full h-auto rounded-2xl"
              priority
              src={CustomerReviewsImg}
              alt="Homem trabalhando no notebook"
            />
          </div>
        </div>
      </div>

      <div className="wave wave-about-white bg-ourteam">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-7xl py-10 md:py-14 px-5 sm:px-6 lg:px-10">
          <div className="col-span-1">
            <Image
              className="w-full h-auto rounded-2xl"
              priority
              src={About}
              alt="Homem trabalhando no notebook"
            />
          </div>

          <div className="flex flex-col justify-center col-span-1">
            <h1 className="font-medium leading-tight text-neutra-700 mb-4">
              Por que escolher a Volo?
            </h1>
            {/* <p className="text-neutra-600 mb-5">
                  Suporte confiável, economia de custos e tranquilidade para o seu
                  negócio. Deixe-nos cuidar da tecnologia para você!
                </p> */}
            <ul className="mb-4">
              {textTeam.map((item: TextAbout) => (
                <li key={item.label} className="flex gap-2 mt-2">
                  <Image
                    className="w-5 h-5 mt-0.5"
                    priority
                    src={IconCheck}
                    alt="Ícone check"
                  />
                  <p className="text-neutra-600">
                    <span className="text-neutra-700 font-medium pr-1">
                      {item.label}
                    </span>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <div>
              <Button
                onClick={() => router.push('/#contato')}
                aria-label="Contato"
              >
                Contato
              </Button>
            </div>
          </div>
        </div>

        {/* <div ref={refTeamNumbers} className="w-full mx-auto max-w-7xl px-2 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2 py-10 rounded-lg bg-services">
              {numbersTeam.map((item: NumbersTeamType) => (
                <div
                  key={item.durationCounter}
                  className="flex flex-col justify-center items-center col-span-1"
                >
                  <figure
                    className="flex flex-col items-center stat-indicator"
                    aria-labelledby="stat-value"
                  >
                    <h2 className="font-medium text-neutra-800">{item.state}+</h2>
                    <p className="stat-label font-montserrat font-medium text-xl text-neutra-700">
                      {item.label}
                    </p>
                  </figure>
                </div>
              ))}
            </div>
          </div> */}
      </div>
    </div>
  )
}
