import React from 'react'
import { Orchard } from '../../models'
import { useQuerySurveys } from '../../hooks/useQuerySurveys';

interface TotalTreesSurveyedProps {
  orchard: Orchard
}

// todo
// use useCompoundQuery to get 
// 1. Survey given an orchard
// 2. for each survey, get /surveys/{id}/tree_surveys/
// use the results to calculate the average and count trees

const TotalTreesSurveyed: React.FC<TotalTreesSurveyedProps> = ({ orchard }: TotalTreesSurveyedProps) => {
  const { isLoading, isError, data: results } = useQuerySurveys({ orchard });
  if (isLoading || isError) {
    return (
      <div>{isError ? 'error' : '-'}</div>
    )
  }
  return (
    // <div>{results?.data.count}</div>
    <div>TotalTreesSurveyed</div>
  )
}

export default TotalTreesSurveyed