import React, { useState } from 'react'
import { Orchard, TreeSurvey } from '../../models'
import { useQueryTreeSurveys } from '../../hooks/useQueryTreeSurveys';
import { BarChartOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import Chart from 'react-google-charts';

interface AverageTreeNDREProps {
  orchard: Orchard
}

const AverageTreeNDRE: React.FC<AverageTreeNDREProps> = ({ orchard }: AverageTreeNDREProps) => {
  const { isLoading, isError, data: results } = useQueryTreeSurveys({ orchard });
  const [openHistogram, setOpenHistogram] = useState(false);

  if (isLoading || isError) {
    return (
      <div>{'-'}</div>
    )
  }

  let totalNDRE = 0;
  const data: any[][] = [['data', 'value']]
  results.forEach((survey: TreeSurvey) => {
    totalNDRE += survey.ndre;
    data.push(['value', survey.ndre])
  });

  results.reduce((current: number, value: TreeSurvey) => current + value.ndre, 0);
  return (
    <div>
      <BarChartOutlined onClick={() => setOpenHistogram(true)} style={{ paddingRight: '8px' }} />
      {(results.length == 0 ? 0 : totalNDRE / results.length).toFixed(3)}
      <Modal
        open={openHistogram}
        title={`NDRE Histogram | ${orchard.name}`}
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
              title: 'NDRE',
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

export default AverageTreeNDRE