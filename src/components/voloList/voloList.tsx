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
            <Card title="lista osób volo">
                    {voloList ? voloList.map((volo, i) => {
                        if (i < maxVolo) return (
                            <p>{getUserName(volo.user)}</p>
                        )
                    }) : "Nie ma jeszcze nikogo"}
                    <div className="border-t-2 border-purple-900 pt-4 mt-4">
                        {voloList ? voloList.length : 0}/{maxVolo}
                    </div>
                  </Card>
                  {(voloList && voloList.length > maxVolo) && <Card title="lista rezerwowa">
                    {voloList.map((volo, i) => {
                        if (i >= maxVolo) return (
                            <p>{getUserName(volo.user)}</p>
                        )
                    })}
                </Card>}
        <div className="flex justify-center">
            <button className="w-full primary">zapisz się</button>
        </div>
      </div>
    );
  }
  