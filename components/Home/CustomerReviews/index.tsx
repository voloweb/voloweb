'use client'
import Image from 'next/image'
import Button from '@/components/Shared/Button'
import Carousel from 'react-multi-carousel'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import 'react-multi-carousel/lib/styles.css'
import CustomerReviewsImg from '@/public/customer-reviews.jpg'
import { useRouter } from 'next/navigation'

import Avatar1 from '@/public/avatar-customer-reviews/avatar1.jpg'
import Avatar2 from '@/public/avatar-customer-reviews/avatar2.jpg'
import Avatar3 from '@/public/avatar-customer-reviews/avatar3.jpg'
import Avatar4 from '@/public/avatar-customer-reviews/avatar4.jpg'

export interface ReviewCardType {
  title: string
  text: string
  name: string
  date: string
  avatar: any
}

export default function CustomerReviews() {
  const router = useRouter()
  const reviewCards: ReviewCardType[] = [
    {
      title: '“A experiência com a equipe de da Volo foi incrível!”',
      text: 'Eles foram extremamente profissionais e atenciosos em cada etapa do projeto. O software entregue superou nossas expectativas em termos de funcionalidade e desempenho.',
      name: 'Ana Silva',
      date: '11/03/2023',
      avatar: Avatar1
    },
    {
      title: '“Estou muito satisfeito com o trabalho da equipe”',
      text: 'Eles entenderam completamente nossas necessidades e foram capazes de traduzi-las. Além disso, sua abordagem ágil nos permitiu acompanhar o progresso do projeto de forma transparente.',
      name: 'Carlos Eduardo',
      date: '25/04/2024',
      avatar: Avatar2
    },
    {
      title: '“A Volo não apenas entregou um software de alta qualidade”',
      text: 'Sempre que enfrentamos problemas ou tivemos dúvidas, a equipe estava prontamente disponível para nos ajudar. Sua dedicação ao sucesso do cliente é verdadeiramente impressionante.',
      name: 'Laura Costa',
      date: '30/05/2024',
      avatar: Avatar3
    },
    {
      title:
        '“Trabalhar com a Volo foi uma experiência excepcional desde o início”',
      text: 'Sua equipe demonstrou uma compreensão profunda das complexidades do desenvolvimento de software e foi capaz de oferecer soluções inovadoras para nossos desafios.',
      name: 'Pedro Oliveira',
      date: '24/06/2023',
      avatar: Avatar4
    }
  ]

  const ActionsBtns = (actions: any) => {
    const nextDisabled: boolean =
      actions.carouselState.slidesToShow +
        actions.carouselState.currentSlide ===
      actions.carouselState.totalItems
    const prevDisabled: boolean = actions.carouselState.currentSlide === 0

    return (
      <div className="flex absolute top-0 right-0 gap-4 md:scroll-mt-16">
        <button
          type="button"
          disabled={prevDisabled}
          className={`flex justify-center items-center w-9 h-9 shadow-lg rounded-full ${
            prevDisabled ? 'bg-neutra-500' : 'bg-semantica-1'
          }`}
          onClick={() => actions.previous()}
        >
          <ArrowLeftIcon className="text-white h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          disabled={nextDisabled}
          className={`flex justify-center items-center w-9 h-9 shadow-lg rounded-full ${
            nextDisabled ? 'bg-neutra-500' : 'bg-semantica-1'
          }`}
          onClick={() => actions.next()}
        >
          <ArrowRightIcon className="text-white h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    )
  }

  return (
    <div
      id="comentarios"
      className="flex flex-col items-center justify-center px-5 scroll-mt-16 bg-services"
    >
      <div className="w-full mx-auto max-w-7xl py-10 md:py-20 px-2">
        <div>
          <h3 className="font-medium mb-4">
            Comentários dos <br /> nossos clientes
          </h3>
        </div>

        <div>
          <Carousel
            customButtonGroup={<ActionsBtns />}
            arrows={false}
            centerMode={false}
            className="relative pt-12"
            containerClass="container overflow-hidden mx-auto"
            sliderClass="flex"
            minimumTouchDrag={80}
            draggable
            partialVisible
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1290 },
                items: 3,
                slidesToSlide: 1,
                partialVisibilityGutter: 70
              },
              tablet: {
                breakpoint: { max: 1290, min: 768 },
                items: 2,
                slidesToSlide: 1,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: { max: 767, min: 0 },
                items: 1,
                slidesToSlide: 1,
                partialVisibilityGutter: 40
              }
            }}
            slidesToSlide={1}
          >
            {reviewCards.map((item: ReviewCardType, i: number) => (
              <div
                key={item.name + item.title}
                className="carousel-card flex mx-2 flex-col justify-between min-w-[300px] h-[350px] bg-white shadow-lg rounded-lg p-6"
              >
                <h2 className="text-xl py-2 font-medium text-neutra-700">
                  {item.title}
                </h2>
                <p className="py-2 text-neutra-600">{item.text}</p>

                <div className="flex items-center gap-5">
                  <Image
                    className="w-14 h-14 rounded-full shadow-lg"
                    priority
                    src={item.avatar}
                    alt={`Avatar de ${item.name}`}
                  />
                  <footer className="flex flex-col author-info">
                    <span className="font-montserrat font-medium text-2xl text-neutra-700">
                      {item.name}
                    </span>
                    <p className="font-montserrat text-xl text-neutra-500">
                      {item.date}
                    </p>
                  </footer>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-7xl pb-20 px-2">
          <div className="col-span-1">
            <h2 className="font-medium text-neutra-700 mb-4">
              Quer conhecer mais
            </h2>
            <p className="text-neutra-600 mb-5">
              Venha conversar com a nossa equipe incrível e esclareça todas as
              suas dúvidas! Estamos aqui para ajudar e tornar sua experiência
              ainda mais incrível. Não hesite em entrar em contato conosco, será
              um prazer atendê-lo(a)!
            </p>
            <Button
              onClick={() => router.push('/#contato')}
              aria-label="Entrar em contato"
            >
              Entrar em contato
            </Button>
          </div>

          <div className="flex justify-end col-span-1">
            <Image
              className="w-full h-auto"
              priority
              src={CustomerReviewsImg}
              alt="Homem trabalhando no notebook"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
