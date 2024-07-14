import React, { useRef } from 'react'
import useRestClient from '../farms/hooks/useRestClient'
import { Farm, FarmsResponse } from '../farms/domain';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

const HomePage: React.FC = () => {
  const url = "https://api.aerobotics.com/farming/farms/"


  const headers = useRef({
    Accept: "application/json",
    Authorization: "Bearer 5d03db72854d43a8ce0c63e0d4fb4a261bc29b95ea46b541f537dbf0891b45d6"
  })

  const { useFetchFarms } = useRestClient();
  const { data, loading, error } = useFetchFarms<FarmsResponse>(url, headers.current );
  if(loading){
    return (
      <div>
        Loading...
      </div>
    )  
  }
  if(error){
    return (
      <div>
        { JSON.stringify(error) }
      </div>
    )  
  }

  return (
    <div>
      <Table columns={columns} dataSource={data?.results} />
    </div>
  )
}

export default HomePage






const columns: ColumnsType<Farm> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Orchard count',
    dataIndex: 'orchard_count',
    key: 'orchard_count',
  },
  {
    title: 'Total hectares',
    dataIndex: 'total_hectares',
    key: 'total_hectares',
  },
  {
    title: 'Grouping',
    key: 'grouping',
    dataIndex: 'grouping',
    render: (_, { grouping }) => {
      const color = grouping ? 'grey-2' : 'geekblue'
      return (
        <>
          <Tag color={color} key={grouping}>
            {grouping ? grouping?.toUpperCase() : 'NO GROUP'}
          </Tag>
        </>
      );
    },
  }
];