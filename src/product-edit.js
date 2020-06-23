import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { createBrowserHistory } from 'history';
import { useMutation } from '@apollo/react-hooks';
import { gql, from } from "apollo-boost";
import { useParams } from "react-router-dom";
import {AppHeader} from './comp-utils/app-header';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
  
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

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


const ProductEdit = (props) => {

    let { id } = useParams();
  
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [updateProduct] = useMutation(UPDATE_PRODUCT);
    const { loading, error, data } = useQuery(GET_PRODUCT, {variables : {id : parseInt(id)}});
    const [initValue, setInitValue] = useState(false)
    const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    updateProduct({ variables: { id: parseInt(id), title : title, description : description } }).then(({data})=>{
      if(data && data.updateProduct) {
        message.success({content :'Product updated sucessfully', duration : 1});
      }
    })

  };

  
  useEffect(() => {
      console.log(data);
      if(data && data.productById && !initValue){
          let product = data.productById;
          setTitle(product.title);
          setDescription(product.description);
          setInitValue(true);
      } 

  }, [initValue])


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(loading)
  return (
  <div>
  <AppHeader/>
  <Row>
    <Col span={2}/>
    <Col span={8}>
    <h1>Product Edit</h1>
    <Form
           {...layout}
           name="basic"
           form={form}
           initialValues={{ remember: true }}
           onFinish={onFinish}
      
    >
     <Form.Item>
        <Input
        name="title"
        placeholder="Title" 
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        rules={[
          {
            required: true,
            message: 'Please input title',
          },
        ]}
        />
     </Form.Item>
     <Form.Item>
        <Input
        name="description"
          placeholder="Description"
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}}
          rules={[
            {
              required: true,
              message: 'Please input description',
            },
          ]}
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
