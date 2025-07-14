import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './src/config/dbconnection';

import categoryRoutes from './src/routes/categoryRoutes'

dotenv.config();

const app = express();

const port = process.env.PORT;

dbConnect();

const bodyParser = require('body-parser')
    
// middleware
app.use(bodyParser.json())

// Routes
app.use('/api', categoryRoutes)

// listen to port
app.listen(port, () => {
    console.log(`Server started successfully on the port ${port}`);
} )

    
