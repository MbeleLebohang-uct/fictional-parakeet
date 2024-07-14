import { Dispatch, SetStateAction } from "react";

export enum EApplicationPageOption {
    Home = 'Home',
    Surveys = 'Surveys',
    Policies = 'Policies',
    Settings = 'Settings',
}

export type UseLocalStorage<T> = [T, Dispatch<SetStateAction<T>>];
