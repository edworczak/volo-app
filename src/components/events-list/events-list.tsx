import { eventsData } from "@/data/events";
import { eventsVolo } from "@/data/events-volo";
import { getDateAndTime } from "@/utils/utils";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

  export default function EventsList() {
    const getLink = (id: string, name: string, maxVolo: number, date: string) => {
        const isVoloList = eventsVolo.find((event) => event.id === id)
        const voloNumber = isVoloList ? isVoloList.volo.length : 0;
                  return (
                    <Link 
                        key={id}
                        href={`/panel/events/${id}`}
                        className="border-2 border-sky-600 rounded-[50vh] flex justify-between gap-4 items-center p-4"
                    >
                        <div className={`font-bold text-xl block ${voloNumber >= maxVolo ? "text-green-800" : "text-pink-800"}`}>
                            {voloNumber}/{maxVolo}
                            </div>
                        <div className="block shrink grow overflow-hidden">
                            <h2 className="text-ellipsis overflow-hidden whitespace-nowrap w-full">{name}</h2>
                            <span className="text-s text-gray-500">{getDateAndTime(date)}</span>
                            </div>
                        <div className="w-[24px] h-[24px] flex justify-center items-center shrink-0 grow-0 text-sky-600">
                            <FontAwesomeIcon icon={faArrowRight}/>
                            </div>
                    </Link>
                )

    }
      return (
          <div className="grid grid-cols-1 gap-4">
            {eventsData.map((event) => {
          return getLink(event.id, event.name, event.maxVolo, event.date);
        })}
          </div>
      );
    }
    