var axios = require('axios');
var _ = require('lodash');
const END_POINT = "http://localhost:4002";

const getProducts = async() => {
  let res =  await axios.get(`${END_POINT}/products`);
  return res.data;
}

const getUsers = async() => {
   let res = await axios.get(`${END_POINT}/users`);
   return res.data;
}

const createUser = async (user) => {
  let res = await axios.post(`${END_POINT}/users`, user);
  return user;
}

const updateProduct = async(reqData) => {
  const id = reqData.id;
  const data = _.omit(reqData, ['id']);
  let res =  await axios.put(`${END_POINT}/products/${id}`, { title : data.title, description : data.description });
  return res.data;
}

const deleteProduct = async(data) => {
   const id = data.id;
   let res = await axios.delete(`${END_POINT}/products/${id}`);
  return true;
}

const getUserById = async(data) => {
     const id =  data.id;
     let res = await axios.get(`${END_POINT}/users/${id}`)
     return res.data;
}

const getUserByEmail = async(data) => {
  console.log(data);
     const email = data.email;
     const password = data.password
     let res = await axios.get(`${END_POINT}/users?email=${email}&password=${password}`)
     if(res){
      return res.data[0]
     }
     else { return null }
     
}

const getProductById = async(data) => {
  const id =  data.id;
  let res = await axios.get(`${END_POINT}/products/${id}`)
  return res.data;
}

module.exports = {createUser, getProducts, getUsers, updateProduct, deleteProduct, getUserById, getUserByEmail, getProductById};