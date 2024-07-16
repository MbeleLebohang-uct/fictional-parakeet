import React from 'react'
import { Orchard, TreeSurvey } from '../../models'
import { useQueryTreeSurveys } from '../../hooks/useQueryTreeSurveys';

interface AverageTreeNDVIProps {
  orchard: Orchard
}

const AverageTreeNDVI: React.FC<AverageTreeNDVIProps> = ({ orchard }: AverageTreeNDVIProps) => {
  const { isLoading, isError, data: results } = useQueryTreeSurveys({ orchard });

  if (isLoading || isError) {
    return (
      <div>{'-'}</div>
    )
  }

  const totalNDVI = results.reduce((current: number, value: TreeSurvey) => current + value.ndvi, 0);
  return (
    <div>{Math.round((results.length == 0 ? 0 : (totalNDVI/results.length)*1000))/1000}</div>
  )
}

export default AverageTreeNDVI