import React from 'react'
import { Orchard, TreeSurvey } from '../../models'
import { useQueryTreeSurveys } from '../../hooks/useQueryTreeSurveys';

interface AverageTreeNDREProps {
  orchard: Orchard
}

const AverageTreeNDRE: React.FC<AverageTreeNDREProps> = ({ orchard }: AverageTreeNDREProps) => {
  const { isLoading, isError, data: results } = useQueryTreeSurveys({ orchard });

  if (isLoading || isError) {
    return (
      <div>{'-'}</div>
    )
  }

  const totalNDRE = results.reduce((current: number, value: TreeSurvey) => current + value.ndre, 0);
  return (
    <div>{Math.round((results.length == 0 ? 0 : (totalNDRE/results.length)*1000))/1000}</div>
  )
}

export default AverageTreeNDRE