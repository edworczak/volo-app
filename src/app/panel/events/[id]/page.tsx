import Card from "@/components/common/card/card";
import ContentWithStickyHeader from "@/components/common/content-with-sticky-header/content-with-sticky-header";
import Login from "@/components/login/login";
import VoloList from "@/components/voloList/voloList";
import { eventsData } from "@/data/events";
import { eventsVolo } from "@/data/events-volo";
import { getDateAndTime } from "@/utils/utils";
import Link from "next/link";

export default async function Event({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  console.log(id)
  const eventData = eventsData.find((event) => event.id === id);
  if (!eventData) return <span>404</span>

const getVoloNumber = () => {
  if (eventData.maxVolo && eventData.maxVolo !== eventData.minVolo) {
    return `${eventData.minVolo} do ${eventData.maxVolo}`
  } else {
    return eventData.minVolo
  }
}

console.log(new Date)

  return (
    <ContentWithStickyHeader title={eventData.name}>
      <div>
        <div>
          <div>Data i czas: {getDateAndTime(eventData.date)}</div>
          <div>Lokalizacja: {eventData.location}</div>
          <div>Liczba osób volo: {getVoloNumber()}</div>
        </div>
      
      <div className="grid grid-cols-1 gap-8">
      <div className="grid grid-cols-1 gap-8">
        <Card title="inofmracje">
          {eventData?.info}
        </Card>
        <Card title="zadania">
          {eventData.voloTasks}
        </Card>
      </div>
      <VoloList eventId={eventData.id} maxVolo={eventData.maxVolo ? eventData.maxVolo : eventData.minVolo}/>
      </div>
      </div>
    </ContentWithStickyHeader>
  );
}
