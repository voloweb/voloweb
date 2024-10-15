import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from '../Button'
import Loading from '../Loading'

type Inputs = {
  email: string
}

export default function Newsletter() {
  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    try {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/newsletter`, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      toast.success('E-mail cadastrado na newsletter com sucesso!')
      reset()
    } catch (error) {
      toast.error('Ops, algo de errado aconteceu!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      className={`flex border-2 bg-white p-1 rounded-lg ${
        errors.email && 'border-semantica-4'
      }`}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="email"
        {...register('email', {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: ''
          }
        })}
        placeholder="Digite seu e-mail..."
        className="flex-1 text-neutra-600 focus:ring-transparent focus:outline-none focus-visible:outline-none placeholder:text-neutra-600 px-2"
      />
      <Button type="submit" aria-label="Enviar" className="px-7">
        {loading ? <Loading /> : 'Enviar'}
      </Button>
    </form>
  )
}
