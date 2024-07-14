import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { AEROBOTICS_API_HEADERS, AEROBOTICS_API_URI_BASE } from '../../api/const';
import { ApiResponse, apiResponseReducer, EApiActionState } from '../../api';

const useFetchFarms = <T,>(): ApiResponse<T> => {
  const [state, dispatch] = useReducer<typeof apiResponseReducer<T>>(
    apiResponseReducer, 
    { apiActionState: EApiActionState.Loading }
  );
 
  useEffect(() => {
    dispatch({ apiActionState: EApiActionState.Loading });

    axios<T>(`${AEROBOTICS_API_URI_BASE}/farming/farms/`, { headers: AEROBOTICS_API_HEADERS })
      .then((response) => {
        dispatch({ apiActionState: EApiActionState.Fetched, response: response.data });
      })
      .catch((error) => {
        dispatch({ apiActionState: EApiActionState.Error, response: error || Error('An error occurred') });
      });
  }, []);

  return state;
};

export default useFetchFarms;