'use client'
import Error404 from '@/public/error-404.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false })

export default function NotFoundCatchAll() {
  return (
    <div>
      <div className="flex justify-center items-center h-[calc(100vh_-_64px)]">
        <Lottie animationData={Error404} loop play className="w-1/2 h-auto" />
      </div>
    </div>
  )
}
