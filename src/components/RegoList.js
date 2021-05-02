import { Table } from 'antd';
import React, {useEffect} from 'react';
import styled from 'styled-components';

const Title = styled.div`
  color: #2e5299;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const RegoList = () =>{

    useEffect(() => {

    }, []);
    const list = [];
    const columns = [{
        title: 'Plate Number',
        dataIndex: 'plate_number',
        key: 'plate_number',
    }, {
        title: 'Vehicle Type',
        dataIndex: ['vehicle','type'],
        key: 'vehicle_type',
    }, {
        title: 'Vehicle Make',
        dataIndex: ['vehicle','make'],
        key: 'vehicle_make',
        responsive: ['lg'],
    }, {
        title: 'Vehicle Model',
        dataIndex: ['vehicle','model'],
        key: 'vehicle_model',
        responsive: ['lg'],
    }, {
        title: 'Vehicle Colour',
        dataIndex: ['vehicle','colour'],
        key: 'vehicle_colour',
        responsive: ['lg'],
    }, {
        title: 'Vehicle Vin',
        dataIndex: ['vehicle','vin_mask'],
        key: 'vehicle_vin',
        responsive: ['lg'],
    }, {
        title: 'Expiry Date',
        dataIndex: 'expiry',
        key: 'expiry',
        responsive: ['md'],
    }, {
        title: 'More',
        dataIndex: 'more',
        key: 'vehicle',
    }];

    return (
        <>
            <Title>Registration List</Title>
            <Table columns={ columns } dataSource={ list } />
            {/* {console.log('test')} */}
        </>
    );

};

export default RegoList;