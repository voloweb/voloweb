interface EmailNewsletterProps {
  email: string
}

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

export const EmailNewsletter = ({ email }: EmailNewsletterProps) => (
  <Html>
    <Head />
    <Preview>Newsletter Volo</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Newsletter</Heading>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Cadastro de email:
        </Text>
        <code style={code}>{email}</code>
      </Container>
    </Body>
  </Html>
)

export default EmailNewsletter

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
