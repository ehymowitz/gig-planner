import { Schema } from 'mongoose'
import bandSchema from './band'
import guestSchema from './guest'
import moneySchema from './money'
import timingSchema from './timing'
import venueSchema from './venue'
import { model } from 'mongoose';

const gigSchema = new Schema ({
  name: String,
  band: bandSchema,
  timing: timingSchema,
  money: moneySchema,
  guest: guestSchema,
  venue: venueSchema,
})

const gigModel = model('gig', gigSchema)

export default gigModel
