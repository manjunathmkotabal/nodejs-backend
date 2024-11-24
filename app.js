import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';
import connectDB from './config/dbConnection.js';


// Load environment variables
dotenv.config();
connectDB();

const app = express();
app.use(express.json());


// Use the contact routes
app.use('/api', routes);
app.use(errorHandler);

// Set up the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
