"use client"
import { eventsData } from "@/data/events";
import Card from "../common/card/card";
import StyledInput from "../common/input/input";
import { getInputDayTime } from "@/utils/utils";
import { useState } from "react";

type EventDialogProps = {
    id?: string;
}

export default function EventDialog({id}: EventDialogProps) {
  const eventData = eventsData.find((event) => event.id === id);
  const [tasks, setTasks] = useState(eventData?.tasks || [""]);

  const addTask = () => {
    const newTasks = tasks;
    newTasks?.push("");
    setTasks(newTasks);
  }

  const getTasks = () => {
    return tasks.map((task) => {
            return <StyledInput label="zadanie" labelHidden value={task}/>
          });
  }
  
    return (
      <form className="flex flex-col gap-4">
        <StyledInput label="tytuł wydarzenia" value={eventData?.name}/>
        <StyledInput label="lokalizacja" value={eventData?.location}/>
        <Card title="czas">
          <StyledInput label="data wydarzenia" type="datetime-local" value={getInputDayTime(eventData?.date)}/>
          <StyledInput label="czas trwania" value={eventData?.duration}/>
        </Card>
        <Card title="uwagi">
          <StyledInput label="wane informacje" value={eventData?.alert}/>
          <StyledInput label="dodatkowe informacje" value={eventData?.info}/>
        </Card>
        <Card title="osoby volo">
          <div className="grid grid-cols-2 gap-4">
            <StyledInput label="min liczba" type="number" value={eventData?.minVolo}/>
            <StyledInput label="maks liczba" type="number" value={eventData?.maxVolo}/>
          </div>
        </Card>
        <Card title="zadania">
          {getTasks()}
          <button className="primary" type="button" onClick={addTask}>dodaj</button>
        </Card>
      </form>
    );
  }
  