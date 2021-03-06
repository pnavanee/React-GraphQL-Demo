var axios = require('axios');
var _ = require('lodash');
const END_POINT = "http://localhost:4002";

/**
 * @api {get} /products Retrieve  all products
 * @apiName RetrieveProducts
 * @apiGroup products
 * @apiPermission user
 * @apiSuccess {Object} result products.
 */

const getProducts = async() => {
  let res =  await axios.get(`${END_POINT}/products`);
  return res.data;
}

/**
 * @api {get} /users Retrieve  all products
 * @apiName RetrieveUsers
 * @apiGroup users
 * @apiPermission user
 * @apiSuccess {Object} result users.
 */
const getUsers = async() => {
   let res = await axios.get(`${END_POINT}/users`);
   return res.data;
}

/**
 * @api {post} /users Create a user
 * @apiName Createuser
 * @apiGroup users
 * @apiPermission user
 * @apiSuccess {Object} result user.
 */

const createUser = async (user) => {
  let res = await axios.post(`${END_POINT}/users`, user);
  return user;
}

/**
 * @api {post} /products Add a product
 * @apiName Addproduct
 * @apiGroup products
 * @apiPermission user
 * @apiParam {Object} user
 * @apiParamExample {json} Request-Example:
 * {"firstName": "Student","lastName": "One","email": "studentone@mail.com","phone": "988948989","password": "stud", "id": 3}
 * @apiSuccess {Object} result product.
 */

const addProduct = async(product) => {
     let res = await axios.post(`${END_POINT}/products`, product);
     return product;
}

/**
 * @api {put} /products Update a product
 * @apiName Updateproduct
 * @apiGroup product
 * @apiPermission user
 * @apiParam {Object} product
 * @apiParamExample {json} Request-Example:
 * {"title": "Caprese salad","description": "Homemade healthy caprese salad with tomato mozzarella and basil"}
 * @apiSuccess {Object} result product.
 */


const updateProduct = async(reqData) => {
  const id = reqData.id;
  const data = _.omit(reqData, ['id']);
  let res =  await axios.put(`${END_POINT}/products/${id}`, { title : data.title, description : data.description });
  console.log(res.data);
  return res.data;
}

/**
 * @api {delete} /products Delete a product
 * @apiName Deleteproduct
 * @apiGroup products
 * @apiPermission user
 * @apiSuccess {Boolean} success true or false
 */

const deleteProduct = async(data) => {
   const id = data.id;
   let res = await axios.delete(`${END_POINT}/products/${id}`);
  return true;
}

/**
 * @api {get} /users/id Get a user
 * @apiName Getuser
 * @apiGroup users
 * @apiPermission user
 * @apiSuccess {Object} result user.
 */

const getUserById = async(data) => {
     const id =  data.id;
     let res = await axios.get(`${END_POINT}/users/${id}`)
     return res.data;
}

/**
 * @api {get} /users?email&&passwoard Get a user
 * @apiName Getuser
 * @apiGroup users
 * @apiPermission user
 * @apiSuccess {Object} result user.
 */

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

/**
 * @api {get} /products/id Get a product
 * @apiName Getproduct
 * @apiGroup products
 * @apiPermission user
 * @apiSuccess {Object} result product.
 */

const getProductById = async(data) => {
  const id =  data.id;
  let res = await axios.get(`${END_POINT}/products/${id}`)
  return res.data;
}

module.exports = {createUser, getProducts, getUsers, updateProduct, deleteProduct, getUserById, getUserByEmail, getProductById, addProduct};