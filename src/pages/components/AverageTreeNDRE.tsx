import React, { useState } from 'react'
import { Orchard, TreeSurvey } from '../../models'
import { useQueryTreeSurveys } from '../../hooks/useQueryTreeSurveys';
import { BarChartOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

interface AverageTreeNDREProps {
  orchard: Orchard
}

const AverageTreeNDRE: React.FC<AverageTreeNDREProps> = ({ orchard }: AverageTreeNDREProps) => {
  const { isLoading, isError, data: results } = useQueryTreeSurveys({ orchard });
  const [ openHistogram, setOpenHistogram ] = useState(false);

  if (isLoading || isError) {
    return (
      <div>{'-'}</div>
    )
  }

  const totalNDRE = results.reduce((current: number, value: TreeSurvey) => current + value.ndre, 0);
  return (
    <div>
      <BarChartOutlined onClick={() => setOpenHistogram(true)} style={{ paddingRight: '8px' }} />
      {results.length == 0 ? 0 : (Math.round((totalNDRE/results.length)*1000))/1000}
      <Modal
        open={openHistogram}
        title={`NDRE Histogram | ${orchard.name}`}
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

export default AverageTreeNDRE