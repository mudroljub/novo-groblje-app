import znamenitosti from '../data/znamenitosti.json'

const initialState = {
  lokacije : znamenitosti,
  filtrirane : znamenitosti
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  default:
    return state
  }
}
