//room controller
const Room = require("../models/room.model");
const { authJwt } = require("../middleware");
const { response } = require("express");
//define mongoose
const mongoose = require("mongoose");
//get all rooms
exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    }
//create a room
exports.createRoom = async (req, res) => {
    const room = req.body;
    const newRoom = new Room(room);
    try {
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
//delete a room
exports.deleteRoom = async (req, res) => {
    const { roomId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(roomId))
        return res.status(404).send(`No room with id: ${roomId}`);
    await Room.findByIdAndRemove(roomId);
    res.json({ message: "Room deleted successfully." });
}
