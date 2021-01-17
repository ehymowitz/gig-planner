import { Schema } from 'mongoose'

const moneySchema = new Schema ({
  travel: {
    type: Map,
    of: Number
  },
  door: {
    type: Map,
    of: Number
  },
  tickets: {
    type: Map,
    of: Number
  },
  bar: {
    type: Map,
    of: Number
  },
  misc: {
    type: Map,
    of: Number
  }
})

export default moneySchema
