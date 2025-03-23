import ContentWithStickyHeader from "@/components/common/content-with-sticky-header/content-with-sticky-header";
import Dialog from "@/components/common/dialog/dialog";
import StyledInput from "@/components/common/input/input";
import EventDialog from "@/components/event-dialog/event-dialog";
import EventsList from "@/components/events-list/events-list";
import Login from "@/components/login/login";
import { eventsData } from "@/data/events";
import Link from "next/link";

export default async function EditEvent({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const eventJson = await fetch(`http://localhost:3003/events/${id}`);
    const event = await eventJson.json();

    return (
        <Dialog
            title="Edytuj wydarzenie"
            cancelPath={`/panel/events/${id}`}
            confirmPath={`/panel/events/${id}`}
        >
            <EventDialog event={event} />
        </Dialog>
    );
}
