export interface NavigationType {
  name: string
  href: string
}

export const navigation: NavigationType[] = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/#sobre' },
  { name: 'Serviços', href: '/#servicos' },
  { name: 'Contato', href: '/#contato' },
  { name: 'Blog', href: '/blog' }
  // { name: 'Cases', href: '/#comentarios' }
]
