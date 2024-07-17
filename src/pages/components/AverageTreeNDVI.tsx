import React, { useState } from 'react'
import { Orchard, TreeSurvey } from '../../models'
import { useQueryTreeSurveys } from '../../hooks/useQueryTreeSurveys';
import { BarChartOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import Chart from 'react-google-charts';

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

  let totalNDVI = 0;
  const data: any[][] = [['data', 'value']]
  results.forEach((survey: TreeSurvey) => {
    totalNDVI += survey.ndvi;
    data.push(['value', survey.ndvi])
  });

  return (
    <div>
      <BarChartOutlined onClick={() => setOpenHistogram(true)} style={{ paddingRight: '8px' }} />
      {(results.length == 0 ? 0 : totalNDVI/results.length).toFixed(3)}
      <Modal
        open={openHistogram}
        title={`NDVI Histogram | ${orchard.name}`}
        onOk={() => setOpenHistogram(false)}
        onCancel={() => setOpenHistogram(false)}
      >
        <Chart
          chartType="Histogram"
          width="100%"
          height="400px"
          data={data}
          options={{
            legend: { position: "none" },
            colors: ["#1677ff"],
            hAxis: {
              title: 'NDVI',
              ticks: [0, 0.25, 0.5, 0.75, 1]
            },
            vAxis: { title: 'Tree Survey Count' },
            bar: { gap: 0 },
            histogram: {
              hideBucketItems: true,
              bucketSize: 0.0001,
              maxNumBuckets: 10,
              minValue: 0,
              maxValue: 1,
            }
          }}
        />
      </Modal>
    </div>
  )
}

export default AverageTreeNDVI