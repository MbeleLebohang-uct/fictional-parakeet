import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { AeroboticsApiResponse } from '../domain';
import { AEROBOTICS_API_URI_BASE, AEROBOTICS_API_BASE_HEADERS } from '../const';
import { Farm, Orchard } from '../models';

export const useQueryHomeData = (): UseQueryResult<Orchard[] | undefined> => {
    const fetchFarms = async () => {
        return await axios(`${AEROBOTICS_API_URI_BASE}/farming/farms/`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
    }
    const fetchOrchards = async ({ queryKey }: { queryKey: readonly any[] }) => {
        const encodedFarmIds = encodeURIComponent(queryKey[1].join(','));
        return await axios(`${AEROBOTICS_API_URI_BASE}/farming/orchards/?farm_id__in=${encodedFarmIds}`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
    }

    const { data: farms, isLoading: isLoadingFarms, isError: isErrorFarms, error: errorFarms } = useQuery<AxiosResponse<AeroboticsApiResponse<Farm>>>(
        ['query-home-farms'],
        fetchFarms,
        { refetchOnWindowFocus: 'always' }
    )

    const farmIds = farms?.data.results.map(farm => farm.id);
    const { data: orchards, error, isError, isLoading, ...others } = useQuery(
        ['query-home-orchards', farmIds],
        fetchOrchards,
        {
            refetchOnWindowFocus: 'always',
            enabled: !!farms,
            select: (response: AxiosResponse<AeroboticsApiResponse<Orchard>>) => {
                const farmIdMap = new Map<number, Farm>(farms?.data.results.map(farm => [farm.id, farm]));
                return response?.data.results.map((orchard) => ({ ...orchard, farm: farmIdMap.get(orchard.farm_id) }))
            }
        }
    )

    return {
        data: orchards,
        isLoading: isLoading || isLoadingFarms,
        isError: isError || isErrorFarms,
        error: error || errorFarms,
        ...others
    } as UseQueryResult<Orchard[]>;
}