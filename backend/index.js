import express from "express";
import { createServer } from "node:http";
import cors from "cors";
import { Server } from "socket.io";

// creating instances
const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("new client connected");

    socket.on("message", (message) => {
        console.log(message);

        // emit
        io.emit("message", message);
    });

    // disconnect specific client
    socket.on("disconnect", () => {
        console.log("client disconnected");
    });
});

server.listen(5000, () => {
    console.log("Server running... on PORN : 5000");
});
