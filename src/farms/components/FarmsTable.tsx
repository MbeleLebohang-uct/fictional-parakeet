import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'
import { Tag } from 'antd';
import { useFetchFarms } from '../hooks';
import { AeroboticsApiResponse, EApiActionState } from '../../api/domain';
import { Orchard } from '../../surveys';
import { Farm } from '../domain';


type FarmAndOrchard = Farm & Orchard;

const columns: ColumnsType<FarmAndOrchard> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Orchard name',
        dataIndex: 'orchard_name',
        key: 'orchard_name',
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

const mergeResponses = (r1: AeroboticsApiResponse<any>, r2: AeroboticsApiResponse<any>) => {
    const map = new Map();
    r1.results.forEach(item => map.set(item.id, item));
    return r2.results.map((item) => ({...item, orchard_name: item.name, ...map.get(item.farm_id), }));
}

const FarmsTable: React.FC = () => {
    const { data, apiActionState, error } = useFetchFarms<AeroboticsApiResponse<any>>();
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
    const merged = mergeResponses(data![0], data![1])
    return (
        <>
            <Table columns={columns} dataSource={merged} rowKey={(item) => `${item.id}/${item.farm_id}`} />
        </>
    )
}

export default FarmsTable