import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'

import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()
  const hasAuthError = !!router.query.error
  const isSigndIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  console.log(session)

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Agenda</Text>
          {isSigndIn ? (
            <Button size="sm" disabled>
              Conecato <Check />
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleConnectCalendar}>
              Conectar <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && !isSigndIn && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar
          </AuthError>
        )}

        <Button type="submit" disabled={!isSigndIn}>
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
