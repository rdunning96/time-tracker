//booking model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
  date: {
    type: Schema.Types.Date,
    ref: "Date",
  },
  time: {
    type: Schema.Types.String,
    ref: "Time",
  },
  description: {
    type: Schema.Types.String,
    ref: "Description",
  },
  duration: {
    type: Schema.Types.String,
    ref: "Duration",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Booking", bookingSchema);
