import { Orchard } from "./Orchard";
import { TreeSurvey } from "./TreeSurvey";

export type Survey = {
    id: number;
    name: string;
    orchard_id: number;
    orchard: Orchard | undefined;
    date: string;
    hectares: number;
    polygon: string;
    tree_surveys: TreeSurvey | undefined;
};
