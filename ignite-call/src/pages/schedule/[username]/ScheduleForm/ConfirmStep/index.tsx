// import { CalendarStep } from '@/pages/schedule/[username]/ScheduleForm/CalendarStep'

import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { ConfirmForm, FormHeader, FormError, FormActions } from './styles'

export function ConfirmStep() {
  function handleConfirmScheduling(data: any) {
    console.log(data)
  }

  return (
    <ConfirmForm as="form">
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de Setembro de 2022
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>
      <label>
        <Text size="sm">Seu nome</Text>
        <TextInput prefix="ignate.com/" placeholder="seu-usuario" />
      </label>
      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput placeholder="seu e-mail" />
      </label>
      <label>
        <Text size="sm">Observações</Text>
        <TextArea placeholder="Observações" />
      </label>
      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
