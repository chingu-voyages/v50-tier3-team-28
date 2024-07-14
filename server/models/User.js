const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    authID: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      sparse: true,
    },
    nickname: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    //The location is made to be a GeoJSON object
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number], // Array of [longitude, latitude]
        required: true,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

// Creates an index on the 'location' field for geospatial queries
userSchema.index({ location: "2dsphere" });

const User = mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema);
