import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band ={
        id: uuid(),
        name: action.name
      }
      return { ...state, bands: [...state.bands.concat(band)] }
    case "DELETE_BAND":
      console.log("delete action", state)
      let filtered = state.bands.filter(band => {
        return band.id !== action.id
      });
      console.log("filtered", filtered)
      debugger
      return {bands: filtered}
    default:
      return state;
  }
};
