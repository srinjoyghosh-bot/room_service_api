import express from 'express';
import requestRoutes from './routes/requestRoutes';

// Create the Express application
const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Use the routes defined in requestRoutes
app.use('/api', requestRoutes);

// Define the server port
const PORT = process.env.PORT ?? 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
