import { eventsVolo } from "@/data/events-volo";
import Card from "../common/card/card";
import { sortArrayByTimestamp } from "@/utils/utils";
import { users } from "@/data/users";

type VoloListParams = {
    eventId: string;
    maxVolo: number;
}

export default function VoloList({ eventId, maxVolo }: VoloListParams) {
    const isVoloList = eventsVolo.find((event) => event.id === eventId)
    console.log(maxVolo);

const voloList = isVoloList && sortArrayByTimestamp(isVoloList.volo);

const getUserName = (id: string) => {
    const user = users.find((user) => user.id === id);
    return user?.name;
}

    return (
      <div className="w-full grid grid-cols-1 gap-8">
        {!voloList ? (
            <Card title="lista osób volo">Nie ma jeszcze nikogo</Card>
        ) :  (
            <>
            <Card title="lista osób volo">
                    {voloList.map((volo, i) => {
                        if (i < maxVolo) return (
                            <p>{getUserName(volo.user)}</p>
                        )
                    })}
                  </Card>
                  <Card title="lista rezerwowa">
                    {voloList.map((volo, i) => {
                        if (i >= maxVolo) return (
                            <p>{getUserName(volo.user)}</p>
                        )
                    })}
                </Card>
                </>
        ) }
        <div className="flex justify-center">
            <button className="w-full">zapisz się</button>
        </div>
      </div>
    );
  }
  