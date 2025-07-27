import { OverlapLayout } from '@acueducto/shared';
import { Title } from '@acueducto/shared';
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
      className="border-foreground-lowest border-t pt-20 pb-0"
    >
      <OverlapLayout.Header>
        <Title className="max-w-[16ch]">¿emocionado? nosotros también</Title>
      </OverlapLayout.Header>
      <OverlapLayout.Content>
        <MeetupForm
          meetupEdition={meetupEdition}
          googleCalendarEvent={googleCalendarEvent}
        />
      </OverlapLayout.Content>
    </OverlapLayout>
  );
}
