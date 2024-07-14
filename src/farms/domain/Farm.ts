export type Farm = {
    id: number;
    name: string;
    user_id: number;
    orchard_count: number;
    total_hectares: number;
    external_id: number | null;
    grouping: string | null;
};

export type FarmsResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Farm[];
};
