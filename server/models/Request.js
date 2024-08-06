const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    contactNumber: {
      required: true,
      type: String,
    },
    isActive: {
      type: Boolean,
      // required: true,
      default: true,
    },
    isAccepted: {
      type: Boolean,
      // required: true,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      // required: true,
      default: false,
    },
    acceptedAt: {
      type: Date,
    },
    canceledAcceptedAt: {
      type: Date,
    },
    completedAt: {
      type: Date,
    },
    beefinderId: {
      type: String,
    },
    beekeeperId: {
      type: String,
    },
    //The location is made to be a GeoJSON object
    location: {
      type: {
        type: String,
        enum: ['Point'],
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
  { timestamps: true, toJSON: { virtuals: true } }
);

requestSchema.virtual('beefinder', {
  ref: 'User',
  localField: 'beefinderId',
  foreignField: 'userId',
  justOne: true,
});

requestSchema.virtual('beekeeper', {
  ref: 'User',
  localField: 'beekeeperId',
  foreignField: 'userId',
  justOne: true,
});

// Creates an index on the 'location' field for geospatial queries
// requestSchema.index({ location: '2dsphere' });

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;
