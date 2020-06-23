import React, { useEffect } from 'react';
import client from './apollo-client';
import { gql } from "apollo-boost";
import { Card, Row, Col, Space } from 'antd';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { DeleteOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {AppHeader} from './comp-utils/app-header';

const PRODUCTS =  gql`
    {
      products{
        id
        title
        description
      }
    }`;

  const DELETE_PRODUCT = gql`
    mutation deleteProduct($id : Int!){
       deleteProduct(id : $id)
    }`;

const Products = () => {
       const remove = (id) => {
           deleteProduct({variables : {id : parseInt(id)}})
           refetch()
        }
        const { loading, error, data, refetch } = useQuery(PRODUCTS);
        const [deleteProduct, {id}] = useMutation(DELETE_PRODUCT);

        useEffect(() => {
                refetch()
        },[data])

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return  <div>
                <AppHeader/>
                   <Row>
                      <h1>Products</h1>
                   </Row>
                   <Row>
                        {data.products.map(({ id, title, description }) => (
                            <Space direction="vertical">
                                   <Card title={title} extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        <Link to={`/product/${id}`}> <p>{description}</p> </Link>
                                        <DeleteOutlined onClick={()=>remove(id)}/>
                                   </Card>
                            </Space>
                        ))}
                    </Row>
                 </div>
}

export default Products;