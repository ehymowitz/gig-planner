import create from 'zustand'

type State = {
  gig: String
  changeLogin: (name: string) => void
}

const useStore = create<State>(set => ({
  gig: "",
  changeLogin: (name) => set(({ gig: name}))
}))

export default useStore
