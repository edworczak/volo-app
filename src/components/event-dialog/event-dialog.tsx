"use client"
import { eventsData } from "@/data/events";
import Card from "../common/card/card";
import StyledInput from "../common/input/input";
import { getInputDayTime } from "@/utils/utils";
import { useState } from "react";
import { EventProps } from "@/utils/types";

type EventDialogProps = {
    event: EventProps;
}

export default function EventDialog({event}: EventDialogProps) {
  const [tasks, setTasks] = useState(event?.tasks || [""]);

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
        <StyledInput label="tytuł wydarzenia" value={event?.name}/>
        <StyledInput label="lokalizacja" value={event?.location}/>
        <Card title="czas">
          <StyledInput label="data wydarzenia" type="datetime-local" value={getInputDayTime(event?.date)}/>
          <StyledInput label="czas trwania" value={event?.duration}/>
        </Card>
        <Card title="uwagi">
          <StyledInput label="wane informacje" value={event?.alert}/>
          <StyledInput label="dodatkowe informacje" value={event?.info}/>
        </Card>
        <Card title="osoby volo">
          <div className="grid grid-cols-2 gap-4">
            <StyledInput label="min liczba" type="number" value={event?.minVolo}/>
            <StyledInput label="maks liczba" type="number" value={event?.maxVolo}/>
          </div>
        </Card>
        <Card title="zadania">
          {getTasks()}
          <button className="primary" type="button" onClick={addTask}>dodaj</button>
        </Card>
      </form>
    );
  }
  