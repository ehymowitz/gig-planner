import { Schema } from 'mongoose'
import bandSchema from './band'
import guestSchema from './guest'
import moneySchema from './money'
import timingSchema from './timing'
import venueSchema from './venue'

const gigSchema = new Schema ({
  band: bandSchema,
  timing: timingSchema,
  money: moneySchema,
  guest: guestSchema,
  venue: venueSchema,
})

export default gigSchema
