import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from '@/pages/schedule/[username]/ScheduleForm/CalendarStep/styles'
import { Calendar } from '@/components/Calendar'

export function CalendarStep() {
  const isDateSelected = false
  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            Quarta-feira <span>20 de batata</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem disabled>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem disabled>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}