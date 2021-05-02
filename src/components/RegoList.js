import { Table, Button } from 'antd';
import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { getRegoList } from '../utils/apiService/apiService';
import Filter from '../utils/helper/helper';
import Moment from 'react-moment';
import RegoModal from '../components/RegoModal';
import '../styles/modal.css';
import SearchBar from './SearchBar';

const Title = styled.div`
  color: #2e5299;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const RegoList = () =>{
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({
        vehicle: {},
        insurer: {},
        registration: {},
    });
    useEffect(() => {
        getRegoList()
            .then((res) => {
                const serializedList = Filter.filterRegoList(res.data.registrations);
                setList(serializedList);
                // copy list as origin data
                setData(serializedList);
            });
    }, []);
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
        render: (i, data) => {
            return (
                <Moment format='DD MMM YYYY'>{data.registration.expiry_date}</Moment>
            );
        }
    }, {
        title: 'More',
        dataIndex: 'more',
        key: 'vehicle',
        render: (i, data)=>{
            return (
                <Button
                    type={ 'primary' }
                    size={ 'small' }
                    onClick={ () =>{
                        setModalData(data);
                        setModalVisible(true);
                        // console.log(modalVisible);
                        // console.log(modalData);
                    } }>
                    More
                </Button>
            );
        }
    }];

    return (
        <>
            <Title>Registration List</Title>
            <SearchBar
                data = { data }
                setList = { setList }
            />
            <Table columns={ columns } dataSource={ list } rowKey={ (id)=> id.plate_number }/>
            <RegoModal
                visible={ modalVisible }
                item={ modalData }
                onCancelModal={ ()=>{
                    setModalVisible(false);
                } }
            />
        </>
    );

};

export default RegoList;