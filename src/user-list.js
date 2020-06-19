import React from 'react';
import client from './apollo-client';
import { gql } from "apollo-boost";
import { Card, Row, Col, Space } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import {AppHeader} from './comp-utils/app-header';

const USERS =  gql`
    {
      users{
          firstName
          lastName
          email
          phone
      }
    }`;

const Users = () => {
        const { loading, error, data } = useQuery(USERS);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return  <div>
                   <AppHeader/>
                   <Row>
                      <h1>Users</h1>
                   </Row>
                   <Row>
                        {data.users.map(({ firstName, lastName, email, phone }) => (
                            <Space direction="vertical">
                                <Card title={firstName + " " + lastName} extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        <p>{email}</p>
                                        <p>{phone}</p>
                                </Card>
                            </Space>
                        ))}
                    </Row>
                 </div>
}

export default Users;