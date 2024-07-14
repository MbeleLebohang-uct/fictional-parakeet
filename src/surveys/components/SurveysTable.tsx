import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'
import { Tag } from 'antd';
import { AeroboticsApiResponse, EApiActionState } from '../../api';
import { Survey } from '../domain';
import { format } from 'date-fns';
import { useFetchSurveys } from '../hooks';

const columns: ColumnsType<Survey> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Hectares',
        dataIndex: 'hectares',
        key: 'hectares',
    },
    {
        title: 'Orchard ID',
        key: 'orchard_id',
        dataIndex: 'orchard_id',
        render: (_, { orchard_id }) => {
            return (
                <>
                    <Tag color={'green'} key={orchard_id}>
                        {orchard_id}
                    </Tag>
                </>
            );
        },
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: date => (format(new Date(date), 'yyyy MMM dd'))
    }
];

const SurveysTable: React.FC = () => {
    const { data, apiActionState, error } = useFetchSurveys<AeroboticsApiResponse<Survey>>();
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

export default SurveysTable