import { io } from "socket.io-client";

const SocketConnection = () => {
  let socket = io("http://192.168.10.13:10000");
  return socket;
};

export default SocketConnection;
