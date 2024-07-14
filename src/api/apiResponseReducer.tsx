import { ApiAction, ApiResponse, EApiActionState } from "./domain";

export const apiResponseReducer = <T,>(state: ApiResponse<T>, action: ApiAction<T>): ApiResponse<T> => {
    switch (action.apiActionState) {
        case EApiActionState.Loading:
            return { apiActionState: action.apiActionState };
        case EApiActionState.Fetched:
            return {
                apiActionState: action.apiActionState,
                data: action.response,
                error: undefined,
            };
        case EApiActionState.Error:
            return { apiActionState: action.apiActionState, error: action.response };
        default:
            return state;
    }
};