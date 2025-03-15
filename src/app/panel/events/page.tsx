import Login from "@/components/login/login";
import { eventsData } from "@/data/events";
import Link from "next/link";

export default function Events() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
        {eventsData.map((event) => {
          return <Link href={`/panel/events/${event.id}`}>{event.name}</Link>
        })}
    </div>
  );
}
