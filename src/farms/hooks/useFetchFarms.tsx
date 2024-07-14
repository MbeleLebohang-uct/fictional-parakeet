import { useRef } from 'react';
import { AeroboticsApiResponse, ApiResponse, APIEndPointInfo } from '../../api/domain';
import { useAeroboticsCascadedApi } from '../../api/hooks';
import { Farm } from '../domain';

type FarmsResponse = ApiResponse<AeroboticsApiResponse<Farm>>;

export const useFetchFarms = <T,>(): ApiResponse<T[]> => {
  const endpoints = useRef<APIEndPointInfo[]>([
    {endpoint: () => 'farming/farms/', method: 'GET'},
    {
      endpoint: (response: unknown) => {
        const farmResponse = response as FarmsResponse;
        const encodedFarmIds = encodeURIComponent(farmResponse?.data!.results.map((farm) => farm.id).join(','));
        return `farming/orchards/?farm_id__in=${encodedFarmIds}`;
      }, 
      method: 'GET'
    }
  ])
  return useAeroboticsCascadedApi<T>({ endpoints: endpoints.current });
};
