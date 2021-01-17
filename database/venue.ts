import { Schema } from 'mongoose'

const venueSchema = new Schema ({
  name: String,
  city: String,
  contact: {
    name: String,
    info: String,
  },
  gear: [String],
  capacity: Number
})

export default venueSchema
