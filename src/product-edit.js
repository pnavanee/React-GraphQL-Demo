import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { createBrowserHistory } from 'history';
import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { useParams } from "react-router-dom";
import {AppHeader} from './comp-utils/app-header';
import { useQuery } from '@apollo/react-hooks';
  
let history = createBrowserHistory();
var crypto = require('crypto');

const UPDATE_PRODUCT = gql`
mutation updateProduct($id : Int!, $title : String, $description : String) {
  updateProduct(id : $id, title : $title, description : $description ) {
    title
    description
  }
}
`;

const GET_PRODUCT = gql`
  query productById($id : Int!){
     productById(id : $id){
         id
         title
         description
      }
  }
`


const ProductEdit = () => {

    let { id } = useParams();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    updateProduct({ variables: { id: parseInt(id), title : values.title, description : values.description } });
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updateProduct, { product }] = useMutation(UPDATE_PRODUCT);
  
  useEffect(() => {
      if(data && data.productById){
          let product = data.productById;
          setTitle(product.title)
          setDescription(product.description)
      }
    
  })

  const { loading, error, data } = useQuery(GET_PRODUCT, {variables : {id : parseInt(id)}});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

console.log(title);    
  return (
  <div>
  <AppHeader/>
  <Row>
    <Col span={2}/>
    <Col span={8}>
    <h1>Product Edit</h1>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="title"
      >
        <Input 
        placeholder="Title" 
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
      </Form.Item>
      <Form.Item
        name="description"
      >
        <Input
          placeholder="Description"
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
           Update
        </Button>
      </Form.Item>
    </Form>
    </Col>
    <Col span={2}/>
 </Row>  
 </div>
 );
}

export default ProductEdit;
