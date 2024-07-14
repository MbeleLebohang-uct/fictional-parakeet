export type Survey = {
    id: number;
    name: string;
    orchard_id: number;
    date: string;
    hectares: number;
    polygon: string;
};

export type Orchard = {
    id: number,
    name: string,
    farm_id: number,
    crop_type_name: string,
    polygon: string,
    hectares: number,
    cultivar_name: string,
    external_id: string | null,
};
