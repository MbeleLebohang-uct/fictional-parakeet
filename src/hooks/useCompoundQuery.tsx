import { QueryFunction, QueryKey, useQuery, UseQueryResult } from 'react-query';
import { AxiosResponse } from 'axios';
import { AeroboticsApiResponse } from '../domain';


interface CompoundQueryParams<A, B, R> {
    queryKey1: QueryKey,
    queryKey2: (response: AxiosResponse<AeroboticsApiResponse<A>> | undefined) => QueryKey,
    queryFn1: QueryFunction<AxiosResponse<AeroboticsApiResponse<A>, any>, QueryKey>,
    queryFn2: QueryFunction<AxiosResponse<AeroboticsApiResponse<B>, any>, QueryKey>,
    select: (response1: AxiosResponse<AeroboticsApiResponse<A>>, response2: AxiosResponse<AeroboticsApiResponse<B>, any>) => R
}

export const useCompoundQuery = <A, B, R>({ queryKey1, queryKey2, queryFn1, queryFn2, select } : CompoundQueryParams<A, B, R>): UseQueryResult<R> => {
    // const fetchFarms = async () => {
    //     return await axios(`${AEROBOTICS_API_URI_BASE}/farming/farms/`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
    // }
    // const fetchOrchards = async ({ queryKey }: QueryKeyParam) => {
    //     const encodedFarmIds = encodeURIComponent(queryKey[1].join(','));
    //     return await axios(`${AEROBOTICS_API_URI_BASE}/farming/orchards/?farm_id__in=${encodedFarmIds}`, { headers: { ...AEROBOTICS_API_BASE_HEADERS }, method: 'GET' })
    // }

    const { data: response1, isLoading: isLoadingFarms, isError: isErrorFarms, error: errorFarms } = useQuery<AxiosResponse<AeroboticsApiResponse<A>>>(
        queryKey1,
        queryFn1,
        { refetchOnWindowFocus: 'always' }
    )

    const { data: orchards, error, isError, isLoading, ...others } = useQuery(
        queryKey2(response1),
        queryFn2,
        {
            refetchOnWindowFocus: 'always',
            enabled: !!response1,
            select: (response2: AxiosResponse<AeroboticsApiResponse<B>>) => select(response1!, response2)
        }
    )

    return {
        data: orchards,
        isLoading: isLoading || isLoadingFarms,
        isError: isError || isErrorFarms,
        error: error || errorFarms,
        ...others
    } as UseQueryResult<R>;
}