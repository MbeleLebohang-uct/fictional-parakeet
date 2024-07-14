import { useState, useEffect } from 'react';
import axios, { RawAxiosRequestHeaders } from 'axios';
import { FetchState } from '../domain';


const useFetchFarms = <T,>(url: string, headers?: RawAxiosRequestHeaders): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
 
  useEffect(() => {
    let isMounted = true;
    setState({ data: null, loading: true, error: null });

    axios(url, { headers })
      .then((response) => {
        if (isMounted) {
          setState({ data: response.data, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error?.message || 'An error occurred',
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url, headers]);

  return state;
};

export default useFetchFarms;