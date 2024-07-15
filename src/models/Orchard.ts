import { Farm } from "./Farm";
import { Survey } from "./Survey";

export type Orchard = {
    id: number,
    name: string,
    farm_id: number,
    farm: Farm | undefined,
    crop_type_name: string,
    polygon: string,
    hectares: number,
    survey_count: number | null,
    cultivar_name: string,
    external_id: string | null,
    surveys: Survey[] | undefined;
};
