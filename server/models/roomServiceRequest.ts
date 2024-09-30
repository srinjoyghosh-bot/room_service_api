export type RequestStatus = 'received' | 'in progress' | 'awaiting confirmation' | 'completed' | 'canceled';

export interface RoomServiceRequest {
  id: string;
  guestName: string;
  roomNumber: number;
  requestDetails: string;
  priority: number; // Lower numbers indicate higher priority
  status: RequestStatus;
}
