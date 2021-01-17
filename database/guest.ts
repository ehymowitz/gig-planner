import { Schema } from 'mongoose'

const guestSchema = new Schema ({
  name: String,
  contactInfo: String,
  band: String
})

export default guestSchema
