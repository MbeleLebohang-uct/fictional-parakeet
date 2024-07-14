/* eslint-disable no-debugger */
import axios, { Method } from "axios";
import { useReducer, useEffect } from "react";
import { apiResponseReducer } from "../apiResponseReducer";
import { AEROBOTICS_API_URI_BASE, AEROBOTICS_API_BASE_HEADERS } from "../const";
import { APIEndPointInfo, ApiResponse, EApiActionState } from "../domain";



interface AeroboticsCascadedApiProps {
  endpoints: APIEndPointInfo[]
}

export const useAeroboticsCascadedApi = <T,>({ endpoints }: AeroboticsCascadedApiProps): ApiResponse<T[]> => {
  const [state, dispatch] = useReducer<typeof apiResponseReducer<T[]>>(
    apiResponseReducer,
    { apiActionState: EApiActionState.Loading }
  );

  useEffect(() => {
    const headers = AEROBOTICS_API_BASE_HEADERS;

    const responses: T[] = [];
    const recursiveCallAxios = (endpoint: string, method: Method, index: number) => {
      axios<T>(`${AEROBOTICS_API_URI_BASE}/${endpoint}`, { headers, method: method })
        .then((response) => {
          responses.push(response.data);
          if(index < endpoints.length - 1){
            console.log(`recursiveCallAxios: RECURSE: ${index}`)
            const next = index + 1;
            recursiveCallAxios(endpoints[next].endpoint(response), endpoints[next].method, next)
          }
          else{
            console.log(`recursiveCallAxios: DONE: ${index}`)
            dispatch({ apiActionState: EApiActionState.Fetched, response: responses });
          }
        })
        .catch((error) => {
          dispatch({ apiActionState: EApiActionState.Error, response: error || Error('An error occurred') });
        });
    }
    console.log('recursiveCallAxios: START')
    recursiveCallAxios(endpoints[0].endpoint(), endpoints[0].method, 0)
  }, [endpoints]);

  return state;
};
