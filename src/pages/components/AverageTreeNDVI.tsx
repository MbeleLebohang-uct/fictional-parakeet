import React, { useState } from 'react'
import { Orchard, TreeSurvey } from '../../models'
import { useQueryTreeSurveys } from '../../hooks/useQueryTreeSurveys';
import { BarChartOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

interface AverageTreeNDVIProps {
  orchard: Orchard
}

const AverageTreeNDVI: React.FC<AverageTreeNDVIProps> = ({ orchard }: AverageTreeNDVIProps) => {
  const { isLoading, isError, data: results } = useQueryTreeSurveys({ orchard });
  const [ openHistogram, setOpenHistogram ] = useState(false);

  if (isLoading || isError) {
    return (
      <div>{'-'}</div>
    )
  }

  const totalNDVI = results.reduce((current: number, value: TreeSurvey) => current + value.ndvi, 0);
  return (
    <div>
      <BarChartOutlined onClick={() => setOpenHistogram(true)} style={{ paddingRight: '8px' }} />
      {results.length == 0 ? 0 : (Math.round((totalNDVI/results.length)*1000))/1000}
      <Modal
        open={openHistogram}
        title={`NDVI Histogram | ${orchard.name}`}
        onOk={() => setOpenHistogram(false)}
        onCancel={() => setOpenHistogram(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default AverageTreeNDVI