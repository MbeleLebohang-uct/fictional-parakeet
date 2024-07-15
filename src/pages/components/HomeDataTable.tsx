import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'
import { Orchard } from '../../models';
import { useQueryHomeData } from '../../hooks/useQueryHomeData';


const columns: ColumnsType<Orchard> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Farm name',
        dataIndex: 'farm',
        key: 'farm_name',
        render: (_, orchard) => <a>{orchard.farm?.name}</a>
    },
];


const HomeDataTable: React.FC = () => {
    const { isLoading, isError, error, data: results } = useQueryHomeData();
    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    if (isError) {
        return (
            <div>
                {JSON.stringify(error)}
            </div>
        )
    }
    return (
        <>
            <Table columns={columns} dataSource={results} rowKey={(item) => `${item.id}/${item.id}`} />
        </>
    )
}

export default HomeDataTable