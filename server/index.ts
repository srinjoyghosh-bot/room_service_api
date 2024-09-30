import express from 'express';
import requestRoutes from './routes/requestRoutes';
import { errorHandler } from './middleware/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/api', requestRoutes);

app.use(errorHandler);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
