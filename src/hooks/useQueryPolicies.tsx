import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { AEROBOTICS_API_URI_BASE, AEROBOTICS_API_BASE_HEADERS } from '../const';
import { AeroboticsApiResponse } from '../domain';
import { Policy } from '../models';


export const useQueryPolicies = (): UseQueryResult<AxiosResponse<AeroboticsApiResponse<Policy>> | undefined> => {
    const fetchPolicies = async () => {
        return await axios(`${AEROBOTICS_API_URI_BASE}/insurance/policies/`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
    }

    return useQuery<AxiosResponse<AeroboticsApiResponse<Policy>>>(
        ['query-policies'],
        fetchPolicies,
        { refetchOnWindowFocus: 'always', staleTime: 1000000 }
    )
}