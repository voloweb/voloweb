import Image from 'next/image'

import Facebook from '@/public/social-icons/facebook.svg'
import Instagram from '@/public/social-icons/instagram.svg'
import LinkedIn from '@/public/social-icons/linkedin.svg'
import WhatsApp from '@/public/social-icons/whatsapp.svg'

export default function ButtonsSocial() {
  return (
    <ul className="social-links flex gap-4">
      {/* <li>
        <a
          href=""
          rel="noopener noreferrer"
          className="hover:opacity-80"
          aria-label="Acesse nossa página do Facebook"
          role="link"
          target="_blank"
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
          target="_blank"
        >
          <Image
            className="h-6 w-auto"
            priority
            src={Instagram}
            alt="Ícone do instagram"
          />
        </a>
      </li> */}
      <li>
        <a
          href="https://api.whatsapp.com/send?phone=55031992076363&text="
          rel="noopener noreferrer"
          className="hover:opacity-80"
          aria-label="Acesse nossa página do LinkedIn"
          role="link"
          target="_blank"
        >
          <Image
            className="h-6 w-auto"
            priority
            src={WhatsApp}
            alt="Ícone do WhatsApp"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/volo-ag%C3%AAncia-digital"
          rel="noopener noreferrer"
          className="hover:opacity-80"
          aria-label="Acesse nossa página do LinkedIn"
          role="link"
          target="_blank"
        >
          <Image
            className="h-6 w-auto"
            priority
            src={LinkedIn}
            alt="Ícone do tumblr"
          />
        </a>
      </li>
    </ul>
  )
}
