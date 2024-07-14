export enum EApiActionState {
    Loading = 'loading',
    Fetched = 'fetched',
    Error = 'error',
}

export type ApiAction<T> =
    | { apiActionState: EApiActionState.Loading }
    | { apiActionState: EApiActionState.Fetched; response: T }
    | { apiActionState: EApiActionState.Error; response: Error };

export interface ApiResponse<T> {
    apiActionState: EApiActionState;
    data?: T;
    error?: Error;
}

export type AeroboticsApiResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
};