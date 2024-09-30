import { RoomServiceRequest } from '../models/roomServiceRequest';
import { readData, writeData } from '../utils/fileUtils';

export const getAllRequests = (): RoomServiceRequest[] => {
  const requests = readData();
  return requests.sort((a, b) => a.priority - b.priority);
};

export const getRequestById = (id: string): RoomServiceRequest | undefined => {
  const requests = readData();
  return requests.find(r => r.id === id);
};

export const addRequest = (request: RoomServiceRequest): void => {
  const requests = readData();
  requests.push(request);
  writeData(requests);
};

export const updateRequest = (id: string, updatedFields: Partial<RoomServiceRequest>): RoomServiceRequest | undefined => {
  const requests = readData();
  const requestIndex = requests.findIndex(r => r.id === id);
  if (requestIndex !== -1) {
    requests[requestIndex] = { ...requests[requestIndex], ...updatedFields };
    writeData(requests);
    return requests[requestIndex];
  }
  return undefined;
};

export const deleteRequest = (id: string): boolean => {
  let requests = readData();
  const request = requests.find(r => r.id === id);
  if (request && (request.status === 'completed' || request.status === 'canceled')) {
    requests = requests.filter(r => r.id !== id);
    writeData(requests);
    return true;
  }
  return false;
};
