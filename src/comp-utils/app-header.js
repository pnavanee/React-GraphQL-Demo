import React from 'react';
import { Layout, Menu } from 'antd';
import { LogoutBtn } from './buttons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const AppHeader = () => {
    return ( <Layout className="layout">
                <Header>
                   <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                       <Menu.Item key="1"><Link to="/products">Products</Link></Menu.Item>
                       <Menu.Item key="2"><Link to="/users">Users</Link></Menu.Item>
                       <Menu.Item key="3" style={{float:"right"}}><Link to="/">Logout</Link></Menu.Item>
                   </Menu>
                </Header>
              </Layout>)
}

export { AppHeader };