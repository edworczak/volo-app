import ContentWithStickyHeader from "@/components/common/content-with-sticky-header/content-with-sticky-header";
import EventsList from "@/components/events-list/events-list";
import Login from "@/components/login/login";
import { eventsData } from "@/data/events";
import Link from "next/link";

export default function Events() {
  return (
    <ContentWithStickyHeader title="Lista wydarzeń" backPath="/panel">
        <EventsList/>
    </ContentWithStickyHeader>
  );
}
