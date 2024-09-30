import fs from 'fs';
import path from 'path';
import { RoomServiceRequest } from '../models/roomServiceRequest';

const DATA_FILE = path.resolve(__dirname, '../../data.json');

export const readData = (): RoomServiceRequest[] => {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
};

export const writeData = (data: RoomServiceRequest[]): void => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};
