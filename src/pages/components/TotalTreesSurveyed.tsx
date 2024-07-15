import React from 'react'
import { Orchard } from '../../models'
import { useQuerySurveys } from '../../hooks/useQuerySurveys';

interface TotalTreesSurveyedProps {
  orchard: Orchard
}

const TotalTreesSurveyed: React.FC<TotalTreesSurveyedProps> = ({ orchard }: TotalTreesSurveyedProps) => {
  const { isLoading, isError, data: results } = useQuerySurveys({ orchard });
  if (isLoading || isError) {
    return (
      <div>{isError ? 'error' : '-'}</div>
    )
  }
  return (
    <div>{results?.data.count}</div>
  )
}

export default TotalTreesSurveyed