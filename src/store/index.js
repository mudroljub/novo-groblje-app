import znamenitosti from '../data/znamenitosti.json'

const initialState = {
  lokacije : znamenitosti,
  filtrirane : znamenitosti
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_FILTERED":
      return {...state, filtrirane: action.filtrirane}

  default:
    return state
  }
}
