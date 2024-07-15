import React from 'react'
import { Orchard } from '../../models'
import { useQuerySurveys } from '../../hooks/useQuerySurveys';

interface SurveyCountProps {
    orchard: Orchard
}

const SurveyCount: React.FC<SurveyCountProps> = ({ orchard } : SurveyCountProps) => {
    const { isLoading, isError, data: results } = useQuerySurveys({ orchard });
    if (isLoading || isError) {
        return ( 
            <div>{ isError ? 'error' : '-' }</div> 
        )
    }
  return (
    <div>{JSON.stringify(results?.data.count)}</div>
  )
}

export default SurveyCount