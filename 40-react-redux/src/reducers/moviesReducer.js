const initialState = {
  movies: []
}

const reducer = (state=initialState, action) => {
  console.log('action', action)
  switch(action.type) {
    case 'SET MOVIES':
      return {
        movies: action.payload
      }
    default:
      return state;
  }

}

export default reducer;