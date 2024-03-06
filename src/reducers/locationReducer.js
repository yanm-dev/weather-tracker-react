export default function locationSReducer(
  state = { loading: true, locations: {} },

  action
) {
  switch (action.type) {
    case 'LOADING_LOCATIONS':
      return { ...state, loading: true };
    case 'FETCH_LOCATIONS':
      return { loading: false, locations: action.payload };
    default:
      return state;
  }
}
