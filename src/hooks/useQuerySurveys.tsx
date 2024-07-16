import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { AEROBOTICS_API_URI_BASE, AEROBOTICS_API_BASE_HEADERS } from '../const';
import { AeroboticsApiResponse } from '../domain';
import { Orchard, Survey } from '../models';

interface QuerySurveysParams {
    orchard: Orchard
}

export const useQuerySurveys = ({ orchard } : QuerySurveysParams): UseQueryResult<AxiosResponse<AeroboticsApiResponse<Survey>> | undefined> => {
    const fetchSurveys = async ({ queryKey }: { queryKey: readonly any[] }) => {
        const orchardId = queryKey[1];
        return await axios(`${AEROBOTICS_API_URI_BASE}/farming/surveys/?orchard_id=${orchardId}`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
    }

    return useQuery<AxiosResponse<AeroboticsApiResponse<Survey>>>(
        ['query-surveys', orchard.id],
        fetchSurveys,
        { refetchOnWindowFocus: 'always', staleTime: 1000000 }
    )
}