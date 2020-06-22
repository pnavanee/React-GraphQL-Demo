import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { createBrowserHistory } from 'history';
import { getQueriesForElement } from '@testing-library/react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
let history = createBrowserHistory();
var crypto = require('crypto');

const { Text } = Typography;

const GET_USER =  gql`
    query userByEmail($email : String!, $password : String!){
      userByEmail(email : $email, password : $password){
          firstName
          lastName
          email
          phone
      }
    }`;

const Login = (props) => {

  const onFinish = values => {
    console.log('Received values of form: ', values);
    getUser({variables : {email : values.email, password : values.password}});
  };

 useEffect(()=>{
   if(data) {
      if(data.userByEmail){
          const user = data.userByEmail;
          if(user.email){
            props.history.push('/products')
          }
      }
      else if(email && password) {
          setError("Incorrect email or password")
      }
   }
 })

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getUser,{loading, error, data}] = useLazyQuery(GET_USER);
  const [userError, setError] = useState("")
 
  return (
  <Row>
    <Col span={2}/>
    <Col span={8}>
    <h1>Login</h1>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }, {
          type: 'email',
          message: 'The input is not valid E-mail!',
        }]}
      >
        <Input 
        prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Username" 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={()=> {}}>
          Log in
        </Button>

        Or <a href="/register">register now!</a>
      </Form.Item>
      <Text type="danger">{userError}</Text> 
    </Form>
    </Col>
    <Col span={2}/>
 </Row>  
 );
}

export default Login;
