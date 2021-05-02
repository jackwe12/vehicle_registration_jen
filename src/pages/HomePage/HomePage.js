import { Layout, Menu, Avatar} from 'antd';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    UnorderedListOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {BrowserRouter as Router} from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const StyledHeader = styled(Header)`
  border-bottom: 3px solid #ecf1f3;
`;

const Account = styled.div`
  font-size:1.5rem;
  font-weight:500;
  
`;

const Home = ()=>{

    return (
        <Router>

            <Layout>
                <Layout>

                    <Sider >
                        <Avatar size={ 70 } icon={ <UserOutlined /> } style={ {marginTop:'3rem', left:'30%', marginBottom:'3rem'} }/>
                        <Menu theme='dark' defaultSelectedKeys={ ['1'] } mode='inline' >
                            <Menu.Item key='1' icon={ <UnorderedListOutlined /> }>
                                Vehicle Rego List
                                <Link to='/list'></Link>
                            </Menu.Item>
                            {/* <Menu.Item key="2" icon={<UnorderedListOutlined />}>
                About
                <Link to="/about"></Link>
              </Menu.Item> */}
                        </Menu>
                    </Sider>
                    <Layout className='site-layout'>

                        <StyledHeader className='header' style={ {backgroundColor:'white', } }>
                            <Account>MyService Account</Account>
                        </StyledHeader>

                        <Content
                            className='site-layout-background'
                            style={ {
                                padding: 24,
                                margin: 0,
                                minHeight: '100vh',
                            } }
                        >
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Router>

    );
};

export default Home;