import { Schema } from 'mongoose'

const bandSchema = new Schema ({
  name: String,
  gear: [String],
  expectedGuests: [Number],
  set: String // Link to set sharer
})

export default bandSchema
