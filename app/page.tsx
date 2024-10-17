/* eslint-disable prettier/prettier */
'use client'
import { useContext, useEffect } from 'react'
import Banner from '@/components/Home/Banner'
import CustomerReviews from '@/components/Home/CustomerReviews'
import OurTeam from '@/components/Home/OurTeam'
import ServicesOffered from '@/components/Home/ServicesOffered'
import Contact from '@/components/Home/Contact'
import { MenuContext } from '@/contexts/MenuContext'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [refHome, inViewHome] = useInView({ threshold: 0.4 })
  const [refOurTeam, inViewOurTeam] = useInView({ threshold: 0.2 })
  const [refServicesOffered, inViewServicesOffered] = useInView({threshold: 0.2})
  const [refCustomerReviews, inViewCustomerReviews] = useInView({ threshold: 0.4 })
  const [refContact, inViewRefContact] = useInView({ threshold: 0.4 })

  const { setMenuActive } = useContext(MenuContext)

  useEffect(() => {''
    if (inViewHome) setMenuActive('Home')
    else if (inViewOurTeam) setMenuActive('Sobre')
    else if (inViewServicesOffered) setMenuActive('Serviços')
    else if (inViewCustomerReviews) setMenuActive('Cases')
    else if (inViewRefContact) setMenuActive('Contato')
    else  setMenuActive('')
  }, [inViewHome, inViewServicesOffered, inViewOurTeam, inViewCustomerReviews, inViewRefContact, setMenuActive])

  return (
    <>
      <div ref={refHome}>
        <Banner />
      </div>
      <div ref={refOurTeam}>
        <OurTeam />
      </div>
      <div ref={refServicesOffered}>
        <ServicesOffered />
      </div>
      {/* <div ref={refCustomerReviews}>
        <CustomerReviews />
        </div> */}
      <div ref={refContact}>
        <Contact />
      </div>
    </>
  )
}
