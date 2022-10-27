//booking model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  // room: {
  //   type: Object,
  //   required: false,
  // },
});
module.exports = mongoose.model("Booking", bookingSchema);
