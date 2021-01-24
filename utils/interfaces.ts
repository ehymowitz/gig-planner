// Band and guest should be given as xxxSchema[]

export interface bandSchema {
  name: string,
  gear: string[],
  expectedGuests: number,
  setUrl: string // Link to set sharer
};

export interface guestSchema {
  name: string,
  contactInfo: string,
  band: string,
};

export interface moneySchema {
  travel: moneyType[],
  door: moneyType[],
  tickets: moneyType[],
  bar: moneyType[],
  misc: moneyType[]
}

interface moneyType {
  name: string,
  amount: number,
}

export interface timingSchema {
  loadIn: Date,
  soundCheck: Date,
  doors: Date,
  firstSet: Date,
  setLength: set[],
  venueClose: Date
}

interface set {
  order: number,
  length: number,
}

export interface venueSchema {
  name: string,
  city: string,
  contact: {
    name: string,
    info: string,
  },
  gear: string[],
  capacity: number
}
