export const groupBy = <T>(iterable: readonly any[], property: string) : Map<any, T[]> => {
    return iterable.reduce((result, value) => {
        result.set(value[property], result.get(value[property]) || [])
        result.get(value[property])?.push(value);
        return result;
    }, new Map<any, T[]>());
};