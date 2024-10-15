import Image from 'next/image'

import Facebook from '@/public/social-icons/facebook.svg'
import Instagram from '@/public/social-icons/instagram.svg'
import Tumblr from '@/public/social-icons/tumblr.svg'

export default function ButtonsSocial() {
  return (
    <ul className="social-links flex gap-4">
      <li>
        <a
          href=""
          rel="noopener noreferrer"
          className="hover:opacity-80"
          aria-label="Acesse nossa página do Facebook"
          role="link"
        >
          <Image
            className="h-6 w-auto"
            priority
            src={Facebook}
            alt="Ícone do facebook"
          />
        </a>
      </li>
      <li>
        <a
          href=""
          rel="noopener noreferrer"
          className="hover:opacity-80"
          aria-label="Acesse nossa página do Instagram"
          role="link"
        >
          <Image
            className="h-6 w-auto"
            priority
            src={Instagram}
            alt="Ícone do instagram"
          />
        </a>
      </li>
      <li>
        <a
          href=""
          rel="noopener noreferrer"
          className="hover:opacity-80"
          aria-label="Acesse nossa página do Tumblr"
          role="link"
        >
          <Image
            className="h-6 w-auto"
            priority
            src={Tumblr}
            alt="Ícone do tumblr"
          />
        </a>
      </li>
    </ul>
  )
}
