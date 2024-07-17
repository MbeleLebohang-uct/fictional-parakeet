import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { AEROBOTICS_API_URI_BASE, AEROBOTICS_API_BASE_HEADERS } from '../const';
import { AeroboticsApiResponse } from '../domain';
import { Season } from '../models';


export const useQuerySeasons = (): UseQueryResult<AxiosResponse<AeroboticsApiResponse<Season>> | undefined> => {
    const fetchPolicies = async () => {
        return await axios(`${AEROBOTICS_API_URI_BASE}/farming/seasons/`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
    }

    return useQuery<AxiosResponse<AeroboticsApiResponse<Season>>>(
        ['query-seasons'],
        fetchPolicies,
        { refetchOnWindowFocus: 'always', staleTime: 1000000 }
    )
}