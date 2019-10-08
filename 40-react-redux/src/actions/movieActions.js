export const setMovies = movies => {
  return {
    type: 'SET MOVIES',
    payload: movies
  }
}

export const fetchMovies = () => {
  return dispatch => {
    return fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(json => dispatch(setMovies(json)))
  }
}