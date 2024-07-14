import axios, { Method } from "axios";
import { useReducer, useEffect } from "react";
import { apiResponseReducer } from "../apiResponseReducer";
import { AEROBOTICS_API_URI_BASE, AEROBOTICS_API_BASE_HEADERS } from "../const";
import { ApiResponse, EApiActionState } from "../domain";

interface AeroboticsApiProps {
  method: Method
  endpoint: string
}

const useAeroboticsApi = <T,>({ method, endpoint } : AeroboticsApiProps): ApiResponse<T> => {
  const [state, dispatch] = useReducer<typeof apiResponseReducer<T>>(
    apiResponseReducer, 
    { apiActionState: EApiActionState.Loading }
  );
 
  useEffect(() => {
    dispatch({ apiActionState: EApiActionState.Loading });

    axios<T>(`${AEROBOTICS_API_URI_BASE}/${endpoint}`, { headers: {...AEROBOTICS_API_BASE_HEADERS}, method })
      .then((response) => {
        dispatch({ apiActionState: EApiActionState.Fetched, response: response.data });
      })
      .catch((error) => {
        dispatch({ apiActionState: EApiActionState.Error, response: error || Error('An error occurred') });
      });
  }, [method, endpoint]);

  return state;
};

export default useAeroboticsApi;