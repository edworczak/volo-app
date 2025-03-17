import ContentWithStickyHeader from "@/components/common/content-with-sticky-header/content-with-sticky-header";
import Dialog from "@/components/common/dialog/dialog";
import StyledInput from "@/components/common/input/input";
import EventDialog from "@/components/event-dialog/event-dialog";
import EventsList from "@/components/events-list/events-list";
import Login from "@/components/login/login";
import { eventsData } from "@/data/events";
import Link from "next/link";

export default async function EditEvent() {
  return (
    <Dialog title="Edytuj wydarzenie" cancelPath={`/panel/events`} confirmPath={`/panel/events`}>
          <EventDialog />
    </Dialog>
  );
}
