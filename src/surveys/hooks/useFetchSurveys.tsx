import { ApiResponse, useAeroboticsApi } from '../../api';

const useFetchSurveys = <T,>(): ApiResponse<T> => {
  return useAeroboticsApi<T>({endpoint: 'farming/surveys/', method: 'GET'});
};

export default useFetchSurveys;