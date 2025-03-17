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
    return `${eventData.minVolo}`
  }
}

  const getDetailsRow = (label: string, value: string) => {
    return <div className="grid grid-cols-2 gap-2 py-2">
      <span>{label}</span>
      <span className="font-bold text-right">{value}</span>
    </div>
  }

  return (
    <ContentWithStickyHeader 
      title={eventData.name} 
      backPath="/panel/events"
      editPath={`edit/${id}`}
    >
      <div className="grid grid-cols-1 gap-8">
        <Card title="szczegóły">
          <div>
            {getDetailsRow("Data i czas", getDateAndTime(eventData.date))}
            {getDetailsRow("Czas trwania", eventData.duration)}
            {getDetailsRow("Lokalizacja", eventData.location)}
            {getDetailsRow("Liczba osób volo", getVoloNumber())}
          </div>
        </Card>
        {eventData.alert && <Card title="uwagi" alert>
          {eventData.alert}
        </Card>}
        {eventData.info && <Card title="inofmracje">
          {eventData.info}
        </Card>}
        <Card title="zadania">
          <div className="grid grid-cols-1 gap-4">
            {eventData.tasks.map((task) => {
              return <p>{task}</p>
            })}
          </div>
        </Card>
      <VoloList eventId={eventData.id} maxVolo={eventData.maxVolo ? eventData.maxVolo : eventData.minVolo}/>
      </div>
    
    </ContentWithStickyHeader>
  );
}
