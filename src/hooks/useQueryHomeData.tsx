import { UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { AeroboticsApiResponse } from '../domain';
import { AEROBOTICS_API_URI_BASE, AEROBOTICS_API_BASE_HEADERS } from '../const';
import { Farm, Orchard } from '../models';
import { useCompoundQuery } from './useCompoundQuery';

export const useQueryHomeData = (): UseQueryResult<Orchard[] | undefined> => {
    const fetchFarms = async () => {
        return await axios(`${AEROBOTICS_API_URI_BASE}/farming/farms/`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
    }
    const fetchOrchards = async ({ queryKey }: { queryKey: readonly any[] }) => {
        const encodedFarmIds = encodeURIComponent(queryKey[1].join(','));
        return await axios(`${AEROBOTICS_API_URI_BASE}/farming/orchards/?farm_id__in=${encodedFarmIds}`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
    }

    return useCompoundQuery<Orchard[]>({
        queryFn1: fetchFarms,
        queryFn2: fetchOrchards,
        queryKey1: ['query-home-farms'],
        queryKey2: (farms: AxiosResponse<AeroboticsApiResponse<Farm>, any> | undefined) => ['query-home-orchards', farms?.data.results.map(farm => farm.id)],
        select: (farms: AxiosResponse<AeroboticsApiResponse<Farm>>, response: AxiosResponse<AeroboticsApiResponse<Orchard>>) => {
            const farmIdMap = new Map<number, Farm>(farms?.data.results.map(farm => [farm.id, farm]));
            return response?.data.results.map((orchard) => ({ ...orchard, farm: farmIdMap.get(orchard.farm_id) }))
        }
    })
}