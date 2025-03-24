export interface Message {
  id: string;
  text: string;
  username?: string;
  ipAddr?: string;
}

export interface Me {
  username: string;
  token: string;
  ws: WebSocket;
}
