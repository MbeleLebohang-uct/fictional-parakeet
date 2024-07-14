import { ApiResponse, useAeroboticsApi } from '../../api';

const useFetchFarms = <T,>(): ApiResponse<T> => {
  return useAeroboticsApi<T>({endpoint: 'farming/farms/', method: 'GET'});
};

export default useFetchFarms;