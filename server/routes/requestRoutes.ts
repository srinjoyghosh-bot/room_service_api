import { Router } from 'express';
import * as RequestController from '../controllers/requestController';

const router = Router();

// Route to add a new room service request
router.post('/requests', RequestController.addRequest);

// Route to get all room service requests
router.get('/requests', RequestController.getAllRequests);

// Route to get a specific room service request by ID
router.get('/requests/:id', RequestController.getRequestById);

// Route to update a room service request
router.put('/requests/:id', RequestController.updateRequest);

// Route to delete a room service request
router.delete('/requests/:id', RequestController.deleteRequest);

// Route to mark a room service request as completed
router.post('/requests/:id/complete', RequestController.completeRequest);

export default router;
