import znamenitosti from '../data/znamenitosti.json'

const initialState = {
  lokacije : znamenitosti,
  filtrirane : znamenitosti,
  kategorije: new Set(["restoran", "spomenik"])
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_FILTERED":
      return {...state, filtrirane: action.filtrirane}

    case "SET_CATEGORIES":
      return {...state, kategorije: action.kategorije}

  default:
    return state
  }
}
