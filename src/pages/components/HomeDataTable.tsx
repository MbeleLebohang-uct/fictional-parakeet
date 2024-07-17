import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'
import { Orchard } from '../../models';
import { useQueryHomeData } from '../../hooks/useQueryHomeData';
import TotalTreesSurveyed from './TotalTreesSurveyed';
import LatestSurveyDate from './LatestSurveyDate';
import AverageTreeNDVI from './AverageTreeNDVI';
import AverageTreeNDRE from './AverageTreeNDRE';


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
    {
        title: 'Total trees surveyed',
        dataIndex: 'total_trees_surveyed',
        key: 'total_trees_surveyed',
        render: (_, orchard) => <TotalTreesSurveyed orchard={orchard} />
    },
    {
        title: 'Average tree ndvi',
        dataIndex: 'average_tree_ndvi',
        key: 'average_tree_ndvi',
        render: (_, orchard) => <AverageTreeNDVI orchard={orchard} />
    },
    {
        title: 'Average tree ndre',
        dataIndex: 'average_tree_ndre',
        key: 'average_tree_ndre',
        render: (_, orchard) => <AverageTreeNDRE orchard={orchard} />
    },
    {
        title: 'Latest survey date',
        dataIndex: 'latest_survey_date',
        key: 'latest_survey_date',
        render: (_, orchard) => <LatestSurveyDate orchard={orchard} />
    },
];

const loadingData: Orchard[] = [{
    id: 0, 
    name: '', 
    farm_id: 0, 
    crop_type_name: '', 
    polygon: '', 
    hectares: 0,
    survey_count: null, 
    cultivar_name: '', 
    external_id: null, 
}]

const HomeDataTable: React.FC = () => {
    const { isLoading, isError, error, data: results } = useQueryHomeData();
    if (isError) {
        return (
            <div>{JSON.stringify(error)}</div>
        )
    }
    
    return (
        <Table loading={isLoading} columns={columns} dataSource={results || loadingData} rowKey={(item) => `${item.id}/${item.id}`} />
    )
}

export default HomeDataTable