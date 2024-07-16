import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { AEROBOTICS_API_URI_BASE, AEROBOTICS_API_BASE_HEADERS } from '../const';
import { AeroboticsApiResponse } from '../domain';
import { Orchard, Survey, TreeSurvey } from '../models';
import { useCompoundQuery } from './useCompoundQuery';

interface QuerySurveysParams {
    orchard: Orchard
}

export const useQuerySurveys = ({ orchard } : QuerySurveysParams): UseQueryResult<Survey[]> => {
    const fetchSurveys = async ({ queryKey }: { queryKey: readonly any[] }) => {
        const orchardId = queryKey[1];
        return await axios(`${AEROBOTICS_API_URI_BASE}/farming/surveys/?orchard_id=${orchardId}`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
    }

    const fetchTreeSurveys = async ({ queryKey }: { queryKey: readonly any[] }) => {
        const surveyIds: string = queryKey[1];
        return await Promise.all(surveyIds.split(',').map(
            (surveyId) => axios(`${AEROBOTICS_API_URI_BASE}/farming/surveys/${surveyId}/tree_surveys`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
        ))
    }

    return useCompoundQuery({
        queryFn1: fetchSurveys, // get surveys for this orchard
        queryFn2: fetchTreeSurveys, // get tree survey for each of the surveys above
        queryKey1: ['query-home-surveys', orchard.id],
        queryKey2: (surveys: AxiosResponse<AeroboticsApiResponse<Survey>, any> | undefined) => ['query-home-tree-surveys', surveys?.data.results.map(survey => survey.id).join(',')],
        select: (surveys: AxiosResponse<AeroboticsApiResponse<Survey>>, response: AxiosResponse<AeroboticsApiResponse<TreeSurvey>>) => {
            const farmIdMap = new Map<number, Survey>(surveys?.data.results.map(survey => [survey.id, survey]));
            return response?.data.results.map((orchard) => ({ ...orchard, farm: farmIdMap.get(orchard.farm_id) }))
        }
    })

    // return useQuery<AxiosResponse<AeroboticsApiResponse<Survey>>>(
    //     ['query-surveys', orchard.id],
    //     fetchSurveys,
    //     { refetchOnWindowFocus: 'always', staleTime: 1000000 }
    // )
}