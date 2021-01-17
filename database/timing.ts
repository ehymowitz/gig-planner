import { Schema } from 'mongoose'

const timingSchema = new Schema ({
  loadIn: Date,
  soundCheck: Date,
  doors: Date,
  firstSet: Date,
  setLength: [Number],
  venueClose: Date
});

export default timingSchema
