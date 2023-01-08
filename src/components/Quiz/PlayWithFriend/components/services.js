import { io } from "socket.io-client";

export const socket = io("https://backend.playikc.in/", {
  transports: ["websocket"],
  autoConnect: true,
});
