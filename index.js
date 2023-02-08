// Add Express
const express = require("express");
const bcrypt=require('bcryptjs')
// Initialize Express
const app = express();
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUiExpress=require('swagger-ui-express');
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
// swagger setup
const swaggerOptions={
  definition:{
     openapi: '3.0.0',
     info:{
         title:"ABHYAM ROBOTICS INSTITUTION OF BUSSINESS AND TECHNOLOGY-Student Management System",
         description:"Student Management System",
         contact:{
             name:'aribt Developers'
         },
         servers:[process.env.PORT]
     }
  },
  apis:["./Routes/*.js"]
 }
const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/doc',swaggerUiExpress.serve,swaggerUiExpress.setup(swaggerDocs));
// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;