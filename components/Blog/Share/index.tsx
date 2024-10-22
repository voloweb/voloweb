'use client'
import { FunctionComponent } from 'react'
import {
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton
} from 'react-share'

export const Share: FunctionComponent<{ url: string }> = ({ url }) => {
  return (
    <div className="share-btns fixed block lg:flex flex-col">
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={35} />
      </WhatsappShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={35} />
      </TelegramShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={35} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={35} />
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <XIcon size={35} />
      </TwitterShareButton>
    </div>
  )
}
