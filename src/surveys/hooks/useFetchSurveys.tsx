import { ApiResponse } from '../../api/domain';
import { useAeroboticsApi } from '../../api/hooks';

export const useFetchSurveys = <T,>(): ApiResponse<T> => {
  return useAeroboticsApi<T>({endpoint: 'farming/surveys/', method: 'GET'});
};
