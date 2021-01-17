import { Schema } from 'mongoose'

const bandSchema = new Schema ({
  name: String,
  gear: [String],
  expectedGuests: [Number]
})

export default bandSchema
