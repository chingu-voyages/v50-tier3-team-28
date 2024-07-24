const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    isAccepted: {
      type: Boolean,
      required: true,
      default: false,
    },
    completedAt: {
      type: Date,
    },
    beefinderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    beekeeperId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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
  foreignField: '_id',
  justOne: true,
  options: { select: '-authID' },
});

requestSchema.virtual('beekeeper', {
  ref: 'User',
  localField: 'beekeeperId',
  foreignField: '_id',
  justOne: true,
  options: { select: '-authID' },
});

// Creates an index on the 'location' field for geospatial queries
requestSchema.index({ location: '2dsphere' });

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;
