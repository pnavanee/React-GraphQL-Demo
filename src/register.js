import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Alert,
  message
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { gql } from "apollo-boost";
import { useMutation } from '@apollo/react-hooks';
import _ from 'lodash';
var crypto = require('crypto');

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const ADD_USER = gql`
mutation addUser($firstName : String, $lastName : String, $email : String, $phone : String, $password : String) {
  addUser(firstName : $firstName, lastName : $lastName, email : $email, phone : $phone, password : $password) {
    firstName
    lastName 
    email
    phone 
    password 
  }
}
`;

const RegistrationForm = (props) => {

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const [firstName, setFirstname] = useState('');
  const [LastName, setLastname] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConFirmPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [addUser, { data }] = useMutation(ADD_USER);
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    var id = crypto.randomBytes(10).toString('hex');
    let obj = { }
    obj = _.omit(Object.assign(obj,values),['confirm']);
     addUser({ variables: obj });
  };

  useEffect(()=>{
    if(data && data.addUser) {
      message.success({content :'User Registered sucessfully', duration : 1});
      setTimeout(() => {
         props.history.push("/")
      },1000)
    }
  })


  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );


  return (
  <Row>
    <Col span={2}/>
    <Col span={8}>
    <h1>Register</h1>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e)=>{setConFirmPassword(e.target.value)}}
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="firstName"
        label="FirstName"
        value={firstName}
        onChange={(e)=>{setFirstname(e.target.value)}}
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="LastName"
        value={LastName}
        onChange={(e)=>{setLastname(e.target.value)}}
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        value={phoneNo}
        onChange={(e)=>{setPhoneNo(e.target.value)}}
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          //addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </Col>  
    <Col span={2}/>
</Row>
  );
};

export default RegistrationForm;