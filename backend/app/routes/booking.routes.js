//booking routes
const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");
const { authJwt } = require("../middleware");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/bookings",
    [authJwt.verifyToken],
    bookingController.createBooking
  );
  app.get(
    "/api/bookings",
    [authJwt.verifyToken],
    bookingController.getBookings
  );
  app.delete(
    "/:bookingId",
    [authJwt.verifyToken],
    bookingController.cancelBooking
  );
};
