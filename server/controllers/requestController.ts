import { Request, Response } from 'express';
import { RoomServiceRequest } from '../models/roomServiceRequest';
import * as RequestService from '../services/requestService';

export const addRequest = (req: Request, res: Response): void => {
  const { guestName, roomNumber, requestDetails, priority } = req.body;
  const newRequest: RoomServiceRequest = {
    id: `${Date.now()}`,
    guestName,
    roomNumber,
    requestDetails,
    priority,
    status: 'received',
  };
  RequestService.addRequest(newRequest);
  res.status(201).json(newRequest);
};

export const getAllRequests = (req: Request, res: Response): void => {
  const requests = RequestService.getAllRequests();
  res.json(requests);
};

export const getRequestById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const request = RequestService.getRequestById(id);
  if (request) {
    res.json(request);
  } else {
    res.status(404).json({ message: 'Request not found' });
  }
};

export const updateRequest = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updatedFields = req.body as Partial<RoomServiceRequest>;
  const updatedRequest = RequestService.updateRequest(id, updatedFields);
  if (updatedRequest) {
    res.json(updatedRequest);
  } else {
    res.status(404).json({ message: 'Request not found' });
  }
};

export const deleteRequest = (req: Request, res: Response): void => {
  const { id } = req.params;
  const success = RequestService.deleteRequest(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(400).json({ message: 'Cannot delete request unless it is completed or canceled' });
  }
};

export const completeRequest = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updatedRequest = RequestService.updateRequest(id, { status: 'completed' });
  if (updatedRequest) {
    res.json(updatedRequest);
  } else {
    res.status(404).json({ message: 'Request not found' });
  }
};
