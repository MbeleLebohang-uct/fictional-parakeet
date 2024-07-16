import { QueryKey, useQuery, UseQueryResult } from 'react-query';
import { AxiosResponse } from 'axios';
import { AeroboticsApiResponse } from '../domain';


interface CompoundQueryParams<R> {
    queryKey1: QueryKey,
    queryKey2: (response: any) => QueryKey,
    queryFn1: any,
    queryFn2: any,
    select: (response1: any, response2: any) => R
}

export const useCompoundQuery = <R,>({ queryKey1, queryKey2, queryFn1, queryFn2, select } : CompoundQueryParams<R>): UseQueryResult<R> => {
    const { data: response1, isLoading: isLoadingFarms, isError: isErrorFarms, error: errorFarms } = useQuery<AxiosResponse<AeroboticsApiResponse<any>>>(
        queryKey1,
        queryFn1,
        { refetchOnWindowFocus: false, staleTime: 1000000}
    )

    const { data: orchards, error, isError, isLoading, ...others } = useQuery(
        queryKey2(response1),
        queryFn2,
        {
            refetchOnWindowFocus: false,
            staleTime: 1000000,
            enabled: !!response1,
            select: (response2) => select(response1!, response2)
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