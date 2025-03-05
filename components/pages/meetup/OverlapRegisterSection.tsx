import { OverlapLayout } from 'components/layout/layouts';
import { Title } from 'components/ui';
import { MeetupForm } from './MeetupForm';

export function OverlapRegisterSection({
  googleCalendarEvent,
  meetupEdition,
}: {
  googleCalendarEvent: string;
  meetupEdition: number;
}) {
  return (
    <OverlapLayout
      id="registro"
      className="border-foreground border-t pt-20 pb-0"
    >
      <OverlapLayout.Header>
        <Title className="max-w-[16ch]">¿emocionado? nosotros también</Title>
      </OverlapLayout.Header>
      <OverlapLayout.Content>
        <p className="text-foreground-low mb-6">
          Llena el formulario y ven a nuestro meetup
        </p>
        <MeetupForm
          meetupEdition={meetupEdition}
          googleCalendarEvent={googleCalendarEvent}
        />
      </OverlapLayout.Content>
    </OverlapLayout>
  );
}
