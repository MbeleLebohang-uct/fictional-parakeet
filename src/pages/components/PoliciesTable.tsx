import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'
import { useQueryPolicies } from '../../hooks/useQueryPolicies';
import { Policy } from '../../models';


const columns: ColumnsType<Policy> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Premium',
        dataIndex: 'premium',
        key: 'premium',
    },
    {
        title: 'Start date',
        dataIndex: 'start_date',
        key: 'start_date',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Claims',
        dataIndex: 'claims',
        key: 'claims',
    },
];

const PoliciesTable: React.FC = () => {
    const { isLoading, isError, error, data: results } = useQueryPolicies();
    if (isError) {
        return (
            <div>{JSON.stringify(error)}</div>
        )
    }
    
    return (
        <Table loading={isLoading} columns={columns} dataSource={results?.data.results} rowKey={(item) => `${item.id}/${item.id}`} />
    )
}

export default PoliciesTable