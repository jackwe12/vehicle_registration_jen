import { Modal, Descriptions, Badge } from 'antd';
import React from 'react';
import '../styles/modal.css';
import Moment from 'react-moment';
// var moment = require('moment');
import moment from 'moment';

const RegoModal = (props) => {

    const {visible = false } = props;
    const {item, onCancelModal = ()=>{}} = props;

    //calculate how many months are left before expired
    const getMonthLeft = (string) => {
        const now = moment(new Date());
        const duration = moment(string).diff(now, 'months');
        return duration;
    };

    return (
        <div>

            <Modal
                title='Vehicle Information'
                centered
                width = '80%'
                bodyStyle = { {
                    height:500
                } }
                visible={ visible }
                onOk={ () => onCancelModal(false) }
                onCancel={ () => onCancelModal(false) }
            >

                <Descriptions
                    layout='vertical'
                    title='Responsive Descriptions'
                    bordered

                >
                    <Descriptions.Item label='Plate Number'>{item.plate_number}</Descriptions.Item>
                    <Descriptions.Item label='Type'>{item.vehicle.type}</Descriptions.Item>
                    <Descriptions.Item label='Make'>{item.vehicle.make}</Descriptions.Item>
                    <Descriptions.Item label='Model'>{item.vehicle.model}</Descriptions.Item>
                    <Descriptions.Item label='Colour' span={ 1 }>{item.vehicle.colour}</Descriptions.Item>
                    <Descriptions.Item label='VIN Number' span={ 1 }>{item.vehicle.vin_mask}</Descriptions.Item>
                    <Descriptions.Item label='Tare Weight/Gross Mass' span={ 1 }>
                        {item.vehicle.tare_weight}kg/{item.vehicle.gross_mass?item.vehicle.gross_mass+'kg':'-'}
                    </Descriptions.Item>
                    <Descriptions.Item label='Insurer Name'>{item.insurer.name}</Descriptions.Item>
                    <Descriptions.Item label='Insurer Code'>{item.insurer.code}</Descriptions.Item>
                    <Descriptions.Item label='Status'>
                        {/* {!item.registration.expired? */}
                        {/* since the expiry information here is wrong, I use another way to identify */}
                        {getMonthLeft(item.registration.expiry_date) > 0?
                            <>
                                <Badge status='processing' text='Valid' />
                                {' ( '}
                                {getMonthLeft(item.registration.expiry_date)}
                                {' months left )'}
                            </>
                            :
                            <>
                                <Badge status='error' text='Expired' />
                            </>
                        }
                    </Descriptions.Item>
                    <Descriptions.Item label='Expiry Date'>
                        <Moment format='DD MMM YYYY'>{item.registration.expiry_date}</Moment>
                    </Descriptions.Item>
                </Descriptions>
            </Modal>
        </div>
    );
};

export default RegoModal;