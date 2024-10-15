import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text
} from '@react-email/components'
import * as React from 'react'

interface EmailContatoProps {
  // setor: string
  nome: string
  // empresa?: string
  email: string
  telefone: string
  // orcamentoPrevio?: string
  mensagem: string
  // comoNosEncontrou: string
}

export const EmailContato = ({
  // setor,
  nome,
  // empresa,
  email,
  telefone,
  // orcamentoPrevio,
  mensagem
  // comoNosEncontrou
}: EmailContatoProps) => (
  <Html>
    <Head />
    <Preview>Email de Contato</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Contato</Heading>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Formulário de contato:
        </Text>
        <code style={code}>
          {/* <p>Setor: {setor}</p> */}
          <p>Nome: {nome}</p>
          {/* <p>Empresa: {empresa || '-'}</p> */}
          <p>E-mail: {email}</p>
          <p>Telefone: {telefone}</p>
          {/* <p>Orçamento prévio: {orcamentoPrevio || '-'}</p> */}
          <p>Mensagem: {mensagem}</p>
          {/* <p>Como você nos encontrou: {comoNosEncontrou}</p> */}
        </code>
      </Container>
    </Body>
  </Html>
)

export default EmailContato

const main = {
  backgroundColor: '#ffffff'
}

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto'
}

const h1 = {
  color: '#333',
  fontFamily:
    "'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0'
}

const text = {
  color: '#333',
  fontFamily:
    "'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0'
}

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333'
}
