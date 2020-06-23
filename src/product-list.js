import React, { useEffect } from 'react';
import client from './apollo-client';
import { gql } from "apollo-boost";
import { Card, Row, Col, Space, Button } from 'antd';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { DeleteOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {AppHeader} from './comp-utils/app-header';
import { PlusCircleFilled } from '@ant-design/icons';

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
                     <Col span={12}><h1>Products</h1></Col>
                     <Col span={10}>
                       <Link to="/product/add"><Button type="primary" style={{float : "right"}}>Add Product</Button></Link>
                       </Col>
                   </Row>
                   <Row>
                        {data.products.map(({ id, title, description }) => (
                            <Space direction="vertical">
                                   <Card title={title} style={{ width: 300, height:200, marginLeft:10, marginBottom:10 }}>
                                        <Link to={`/product/${id}`}> <p>{description}</p> </Link>
                                        <DeleteOutlined onClick={()=>remove(id)}/>
                                   </Card>
                            </Space>
                        ))}
                    </Row>
                 </div>
}

export default Products;