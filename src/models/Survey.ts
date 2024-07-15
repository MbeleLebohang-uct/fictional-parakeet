import { Orchard } from "./Orchard";

export type Survey = {
    id: number;
    name: string;
    orchard_id: number;
    orchard: Orchard | undefined;
    date: string;
    hectares: number;
    polygon: string;
};
