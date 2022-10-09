//booking controller
const Booking = require("../models/booking.model");
const { authJwt } = require("../middleware");
const { response } = require("express");
//get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//create a booking
exports.createBooking = async (req, res) => {
  console.log("create booking");
  const booking = req.body;
  const newBooking = new Booking(booking);
  try {
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
//cancel a booking
exports.cancelBooking = async (req, res) => {
  const { bookingId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(bookingId))
    return res.status(404).send(`No booking with id: ${bookingId}`);
  await Booking.findByIdAndRemove(bookingId);
  res.json({ message: "Booking deleted successfully." });
};
