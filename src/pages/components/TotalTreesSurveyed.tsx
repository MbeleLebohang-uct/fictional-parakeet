import React from 'react'
import { Orchard } from '../../models'
import { useQueryTreeSurveys } from '../../hooks/useQueryTreeSurveys';
import { Tag } from 'antd';

interface TotalTreesSurveyedProps {
  orchard: Orchard
}

const TotalTreesSurveyed: React.FC<TotalTreesSurveyedProps> = ({ orchard }: TotalTreesSurveyedProps) => {
  const { isLoading, isError, data: results } = useQueryTreeSurveys({ orchard });

  if (isLoading) {
    return (
      <div>{'-'}</div>
    )
  }

  if(isError){
    return (
      <Tag color={'volcano'} key={`${orchard.id}`}>
        {'NO RESULTS'}
      </Tag>
    )
  }

  return (
    <div>{results.length}</div>
  )
}

export default TotalTreesSurveyed