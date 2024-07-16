import axios, { AxiosResponse } from 'axios';
import { AEROBOTICS_API_URI_BASE, AEROBOTICS_API_BASE_HEADERS } from '../const';
import { AeroboticsApiResponse } from '../domain';
import { Orchard, Survey, TreeSurvey } from '../models';
import { useCompoundQuery } from './useCompoundQuery';

interface QuerySurveysParams {
    orchard: Orchard
}

export const useQueryTreeSurveys = ({ orchard } : QuerySurveysParams): any => {
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
        queryFn1: fetchSurveys,
        queryFn2: fetchTreeSurveys,
        queryKey1: ['query-surveys', orchard.id],
        queryKey2: (surveys: AxiosResponse<AeroboticsApiResponse<Survey>, any> | undefined) => ['query-tree-surveys', surveys?.data.results.map(survey => survey.id).join(',')],
        select: (_surveys: AxiosResponse<AeroboticsApiResponse<Survey>>, response: AxiosResponse<AeroboticsApiResponse<TreeSurvey>>[]) => {
            const results: TreeSurvey[] = [];
            response.forEach((value) => results.push(...(value.data?.results??[])));
            return results;
        }
    })
}