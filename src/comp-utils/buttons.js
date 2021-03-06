import React from 'react';
import {Link} from 'react-router-dom'
import {
   Button
 } from 'antd';

const LogoutBtn = () => {
    return (<Link to="/">
               <Button type="primary" htmlType="submit" className="login-form-button">
                  Logout
               </Button>
            </Link>)
}


export { LogoutBtn };