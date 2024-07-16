import React from 'react'
import { Orchard } from '../../models'
import { useQuerySurveys } from '../../hooks/useQuerySurveys';
import { compareDesc, format } from 'date-fns';
import { Tag } from 'antd';

interface LatestSurveyDateProps {
  orchard: Orchard
}

const LatestSurveyDate: React.FC<LatestSurveyDateProps> = ({ orchard }: LatestSurveyDateProps) => {
  const { isLoading, isError, data: results } = useQuerySurveys({ orchard });
  if (isLoading || isError) {
    return (
      <div>{isError ? 'error' : '-'}</div>
    )
  }
  const sortedResults = results?.data.results.sort((a, b) => compareDesc(a.date, b.date)) ?? [];
  const color = sortedResults.length > 0 ? 'green' : 'volcano'
  return (
    <>
      <Tag color={color} key={`${orchard.id}-${sortedResults[0]?.id}`}>
        {sortedResults.length > 0 ? format(new Date(sortedResults[0].date), 'yyyy-MM-dd') : 'NO SURVEYS'}
      </Tag>
    </>
  )
}

export default LatestSurveyDate