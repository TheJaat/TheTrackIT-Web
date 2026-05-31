export interface Device {
  id: string;

  deviceCode: string;

  name: string;
  brand: string;
  model: string;

  status: string;

  currentUser?: {
    id: string;
    name: string;
    email: string;
  };
}