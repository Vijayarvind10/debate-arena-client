import { io } from "socket.io-client";

const socket = io("https://debate-arena-server-1.onrender.com"); // your live backend
export default socket;
