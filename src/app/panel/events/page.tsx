import ContentWithStickyHeader from "@/components/common/content-with-sticky-header/content-with-sticky-header";
import EventsList from "@/components/events-list/events-list";
import Login from "@/components/login/login";
import { eventsData } from "@/data/events";
import Link from "next/link";

export default async function Events() {
    const eventsJson = await fetch("http://localhost:3003/events");
    const events = await eventsJson.json();

    const eventsVoloJson = await fetch("http://localhost:3003/events-volo");
    const eventsVolo = await eventsVoloJson.json();

    return (
        <ContentWithStickyHeader
            title="Lista wydarzeń"
            backPath="/panel"
            addPath="/panel/events/add"
        >
            <EventsList events={events} eventsVolo={eventsVolo} />
        </ContentWithStickyHeader>
    );
}
