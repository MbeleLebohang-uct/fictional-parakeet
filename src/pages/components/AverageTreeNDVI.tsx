import React from 'react'
import { Orchard, TreeSurvey } from '../../models'
import { useQueryTreeSurveys } from '../../hooks/useQueryTreeSurveys';
import { BarChartOutlined } from '@ant-design/icons';

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
    <div>
      {results.length == 0 ? '0.000' : `${(Math.round((totalNDVI/results.length)*1000))/1000}`}
      <BarChartOutlined style={{ paddingLeft: '8px' }} />
    </div>
  )
}

export default AverageTreeNDVI