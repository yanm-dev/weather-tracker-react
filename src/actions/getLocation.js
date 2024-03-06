import axios from 'axios';

const fetchLocationsData = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_LOCATIONS' });

    return axios
      .get(`${process.env.REACT_APP_ROOT}/locations`)
      .then(res => {
        return res.data;
      })
      .then(res => {
        dispatch({ type: 'FETCH_LOCATIONS', payload: res.data });
      });
  };
};

export default fetchLocationsData;
