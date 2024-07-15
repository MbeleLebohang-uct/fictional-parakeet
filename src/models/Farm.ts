import { Orchard } from "./Orchard";

export type Farm = {
    id: number;
    name: string;
    user_id: number;
    orchard_count: number;
    total_hectares: number;
    external_id: number | null;
    grouping: string | null;
    orchards: Orchard[] | undefined
};
