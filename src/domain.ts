import { Method } from "axios";
import { Dispatch, SetStateAction } from "react";

export enum EApplicationPageOption {
    Home = 'home',
    Policies = 'Policies',
    Seasons = 'Seasons',
    Settings = 'Settings',
}

export type UseLocalStorage<T> = [T, Dispatch<SetStateAction<T>>];

export type AeroboticsApiResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
};

export interface APIEndPointInfo {
    method: Method
    endpoint: (response?: unknown) => string
}
