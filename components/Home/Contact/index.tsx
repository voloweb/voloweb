'use client'
import { useCallback, useContext, useEffect, useState } from 'react'
import { MenuContext } from '@/contexts/MenuContext'
import { useForm, SubmitHandler, UseFormReset } from 'react-hook-form'
import Button from '@/components/Shared/Button'
import { toast } from 'react-toastify'
import Loading from '@/components/Shared/Loading'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

type Inputs = {
  // setor: string
  nome: string
  // empresa?: string
  email: string
  telefone: string
  // orcamentoPrevio?: string
  mensagem: string
  // comoNosEncontrou: string
}

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(false)
  const { setMenuActive } = useContext(MenuContext)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(
    async (data: Inputs, reset: UseFormReset<Inputs>) => {
      if (!executeRecaptcha) {
        toast.error('Execute recaptcha not yet available', {
          position: 'bottom-center',
          hideProgressBar: true,
          draggable: true,
          theme: 'colored'
        })
        return
      }

      const token = await executeRecaptcha()
      if (token) {
        setLoading(true)
        try {
          await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/contato`,
            {
              method: 'POST',
              body: JSON.stringify(data)
            }
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.error) throw data.error
            })

          toast.success('E-mail de contato enviado com sucesso!')
          reset()
        } catch (error) {
          toast.error('Ops, algo de errado aconteceu!')
        } finally {
          setLoading(false)
        }
      }
    },
    [executeRecaptcha]
  )

  useEffect(() => {
    setMenuActive('')
  }, [setMenuActive])

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    handleReCaptchaVerify(data, reset)
  }

  return (
    <div className="wave wave-contact-gray bg-white">
      <div
        id="contato"
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-10 md:py-14 scroll-mt-16"
      >
        <div className="contact mx-auto max-w-2xl py-3">
          <div className="col-span-1">
            <div className="contact-header md:px-16 mb-11">
              <h4 className="text-center font-medium">
                Entre em contato e descubra como podemos
                <span className="text-semantica-1"> ajudar você</span>!
              </h4>
            </div>

            <form
              className="contact-form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* <div className="input mb-4">
                <label htmlFor="setor" className="block required mb-1">
                  Setor
                </label>
                <select
                  id="setor"
                  defaultValue=""
                  {...register('setor', { required: true })}
                  className={`border border-neutra-400 rounded-lg w-full
                  ${errors.setor && 'border-semantica-4'}
                  ${!watch('setor') && 'text-neutra-600'}
                `}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="x">X</option>
                  <option value="y">Y</option>
                </select>
              </div> */}

              <div className="grid gap-4 mb-4 md:grid-cols-1">
                <div className="input">
                  <label htmlFor="nome" className="block required mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    {...register('nome', { required: true })}
                    className={`border border-neutra-400 rounded-lg w-full ${
                      errors.nome && 'border-semantica-4'
                    }`}
                    placeholder="Digite aqui..."
                  />
                </div>
                {/* <div className="input">
                  <label htmlFor="empresa" className="block mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    {...register('empresa')}
                    className="border border-neutra-400 rounded-lg w-full"
                    placeholder="Digite aqui..."
                  />
                </div> */}
              </div>

              <div className="grid gap-4 mb-4 md:grid-cols-2">
                <div className="input">
                  <label htmlFor="email" className="block required mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: ''
                      }
                    })}
                    className={`border border-neutra-400 rounded-lg w-full ${
                      errors.email && 'border-semantica-4'
                    }`}
                    placeholder="Digite aqui..."
                  />
                </div>
                <div className="input">
                  <label htmlFor="telefone" className="block required mb-1">
                    Telefone
                  </label>
                  <input
                    type="text"
                    id="telefone"
                    {...register('telefone', { required: true })}
                    className={`border border-neutra-400 rounded-lg w-full ${
                      errors.telefone && 'border-semantica-4'
                    }`}
                    placeholder="Digite aqui..."
                  />
                </div>
              </div>

              {/* <div className="input mb-4">
                <label htmlFor="orcamentoPrevio" className="block mb-1">
                  Orçamento Prévio
                </label>
                <input
                  type="text"
                  id="orcamentoPrevio"
                  {...register('orcamentoPrevio')}
                  className="border border-neutra-400 rounded-lg w-full"
                  placeholder="Digite aqui..."
                />
              </div> */}

              <div className="input mb-2.5">
                <label htmlFor="mensagem" className="block required mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  {...register('mensagem', { required: true })}
                  className={`border border-neutra-400 rounded-lg w-full ${
                    errors.mensagem && 'border-semantica-4'
                  }`}
                  placeholder="Digite aqui..."
                ></textarea>
              </div>

              {/* <div className="input mb-4">
                <label htmlFor="comoNosEncontrou" className="block required mb-1">
                  Como você nos encontrou?
                </label>
                <select
                  id="comoNosEncontrou"
                  defaultValue=""
                  {...register('comoNosEncontrou', { required: true })}
                  className={`border border-neutra-400 rounded-lg w-full
                  ${errors.comoNosEncontrou && 'border-semantica-4'}
                  ${!watch('setor') && 'text-neutra-600'}
                `}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="x">X</option>
                  <option value="y">Y</option>
                </select>
              </div> */}

              <Button
                type="submit"
                disabled={loading}
                className="g-recaptcha w-full"
                aria-label="Enviar"
              >
                {loading ? <Loading /> : 'Enviar'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
