import { Farm } from "./Farm";

export type Orchard = {
    id: number,
    name: string,
    farm_id: number,
    farm: Farm | undefined,
    crop_type_name: string,
    polygon: string,
    hectares: number,
    cultivar_name: string,
    external_id: string | null,
};
