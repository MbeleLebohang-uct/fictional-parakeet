import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'
import { Season } from '../../models';
import { useQuerySeasons } from '../../hooks/useQuerySeasons';


const columns: ColumnsType<Season> = [
    {
        title: 'Hemisphere',
        dataIndex: 'hemisphere',
        key: 'hemisphere',
    },
    {
        title: 'Start date',
        dataIndex: 'start_date',
        key: 'start_date',
    },
    {
        title: 'End date',
        dataIndex: 'end_date',
        key: 'end_date',
    },
];

const SeasonsTable: React.FC = () => {
    const { isLoading, isError, error, data: results } = useQuerySeasons();
    if (isError) {
        return (
            <div>{JSON.stringify(error)}</div>
        )
    }
    
    return (
        <Table loading={isLoading} columns={columns} dataSource={results?.data.results} rowKey={(item) => `${item.id}/${item.id}`} />
    )
}

export default SeasonsTable