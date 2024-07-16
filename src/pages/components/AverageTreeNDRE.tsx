import React from 'react'
import { Orchard, TreeSurvey } from '../../models'
import { useQueryTreeSurveys } from '../../hooks/useQueryTreeSurveys';
import { BarChartOutlined } from '@ant-design/icons';

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
    <div>
      {results.length == 0 ? '0.000' : `${(Math.round((totalNDRE/results.length)*1000))/1000}`}
      <BarChartOutlined style={{ paddingLeft: '8px' }} />
    </div>
  )
}

export default AverageTreeNDRE