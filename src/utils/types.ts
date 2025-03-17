export type EventProps = {
    name: string;
    id: string;
    date: string;
    duration: string;
    location: string;
    minVolo: number;
    maxVolo: number;
    alert?: string;
    info?: string;
    tasks: string[];
}

export type EventVoloProps = {
    id: string;
    volo: {
        user: string;
        timestamp: string;
    }[];
}