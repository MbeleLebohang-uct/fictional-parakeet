import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'
import { Farm } from '../domain';
import { Tag } from 'antd';
import { AeroboticsApiResponse, EApiActionState } from '../../api';
import { useFetchFarms } from '../hooks';

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
        title: 'Grouping',
        key: 'grouping',
        dataIndex: 'grouping',
        render: (_, { grouping }) => {
            const color = grouping ?  'green' : 'volcano'
            return (
                <>
                    <Tag color={color} key={grouping}>
                        {grouping ? grouping?.toUpperCase() : 'NO GROUP'}
                    </Tag>
                </>
            );
        },
    },
    {
        title: 'Total hectares',
        dataIndex: 'total_hectares',
        key: 'total_hectares',
    }
];

const FarmsTable: React.FC = () => {
    const { data, apiActionState, error } = useFetchFarms<AeroboticsApiResponse<Farm>>();
    if (apiActionState === EApiActionState.Loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    if (apiActionState === EApiActionState.Error) {
        return (
            <div>
                {JSON.stringify(error)}
            </div>
        )
    }
    return (
        <>
            <Table columns={columns} dataSource={data?.results} rowKey={(item) => item.id} />
        </>
    )
}

export default FarmsTable