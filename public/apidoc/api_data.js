define({ "api": [
  {
    "type": "put",
    "url": "/products",
    "title": "Update a product",
    "name": "Updateproduct",
    "group": "product",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "product",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"title\": \"Caprese salad\",\"description\": \"Homemade healthy caprese salad with tomato mozzarella and basil\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>product.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./actions.js",
    "groupTitle": "product"
  },
  {
    "type": "post",
    "url": "/products",
    "title": "Add a product",
    "name": "Addproduct",
    "group": "products",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"firstName\": \"Student\",\"lastName\": \"One\",\"email\": \"studentone@mail.com\",\"phone\": \"988948989\",\"password\": \"stud\", \"id\": 3}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>product.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./actions.js",
    "groupTitle": "products"
  },
  {
    "type": "delete",
    "url": "/products",
    "title": "Delete a product",
    "name": "Deleteproduct",
    "group": "products",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true or false</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./actions.js",
    "groupTitle": "products"
  },
  {
    "type": "get",
    "url": "/products/id",
    "title": "Get a product",
    "name": "Getproduct",
    "group": "products",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>product.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./actions.js",
    "groupTitle": "products"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Retrieve  all products",
    "name": "RetrieveProducts",
    "group": "products",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>products.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./actions.js",
    "groupTitle": "products"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a user",
    "name": "Createuser",
    "group": "users",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./actions.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/id",
    "title": "Get a user",
    "name": "Getuser",
    "group": "users",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./actions.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users?email&&passwoard",
    "title": "Get a user",
    "name": "Getuser",
    "group": "users",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./actions.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Retrieve  all products",
    "name": "RetrieveUsers",
    "group": "users",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>users.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./actions.js",
    "groupTitle": "users"
  }
] });
