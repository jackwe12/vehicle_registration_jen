import React from 'react';
import styled from 'styled-components';
import { Radio, Input } from 'antd';
// import Log from '../libs/Log';
// const { Search } = Input;

const StyledBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SearchBar = (props) => {
    const filterData ={
        type: 'All',
        kw: '',
    };
    // const { onFilter = (filter) => {} } = props;
    const {data} = props;
    //filter by type & plate number
    const onFilter = (filter) => {
        //two-factor, first filtered by kw then type
        // console.log(filter, data);
        const filterKwData = data.filter((item) => {
            if (
                item.plate_number.toLowerCase().includes(filter.kw.toLowerCase() )||
            item.vehicle.type.toLowerCase().includes(filter.kw.toLowerCase() )||
            item.vehicle.make.toLowerCase().includes(filter.kw.toLowerCase() )||
            item.vehicle.colour.toLowerCase().includes(filter.kw.toLowerCase()) ||
            item.vehicle.model.toLowerCase().includes(filter.kw.toLowerCase() )
            ) {return true;}

            if (filter.kw === '') {return true;}
            return false;
        });
        const filterTypeData = filterKwData.filter((item) => {
            if (
                filter.type === 'All' ||
                item.vehicle.type.toLowerCase().includes(filter.type.toLowerCase())
            ){return true;}
            return false;
        });
        //renew list
        props.setList(filterTypeData);
    };

    //filter by type
    const onTypeChange = (e) => {
        filterData.type = e.target.value;
        onFilter(filterData);
    };
    //filter by search key word
    const onKeywordSearch = (v) => {
        filterData.kw = v;
        onFilter(filterData);
    };

    return (
        <StyledBar>
            <Radio.Group
                defaultValue='All'
                buttonStyle='solid'
                onChange={ (e) => {
                    onTypeChange(e);
                } }
            >
                <Radio.Button value='All'>All</Radio.Button>
                <Radio.Button value='Wagon'>Wagon</Radio.Button>
                <Radio.Button value='Sedan'>Sedan</Radio.Button>
                <Radio.Button value='Hatch'>Hatch</Radio.Button>
                <Radio.Button value='SUV'>SUV</Radio.Button>
                <Radio.Button value='Truck'>Truck</Radio.Button>
            </Radio.Group>
            <Input.Search
                placeholder='Search for plate number, make, model, colour... '
                style={ { width: 400, marginLeft: 10, marginTop: 30, marginBottom: 30 } }
                onSearch={ (value) => onKeywordSearch(value) }
                enterButton
            />
        </StyledBar>
    );
};
export default SearchBar;
