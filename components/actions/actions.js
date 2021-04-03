import { AsyncStorage } from 'react-native';

// CARS API CALL
const fetchCarsBegin = () => ({
  type: 'FETCH_CARS_BEGIN'
});

const fetchCarsSuccess = data => ({
  type: 'FETCH_CARS_SUCCESS',
  payload: data
});

const fetchCarsFailure = error => ({
  type: 'FETCH_CARS_FAILURE',
  errors: error,
});

export const getCars = () => async dispatch => {
  dispatch(fetchCarsBegin());
  await fetch('https://api.spacexdata.com/v4/launches/past')
  .then(res => res.json())
  .then(data => {
    dispatch(fetchCarsSuccess(data))
  })
  .catch(err => {
    dispatch(fetchCarsFailure(err))
  });
}

// User authentication

const setUser = data => ({
  type: 'SET_USER',
  payload: data
});

export const logout = () => ({ type: 'LOG_OUT'})

export const signUserUp = userInfo => async dispatch => {
  await fetch('https://gothic-serpent.herokuapp.com/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(data => {
      AsyncStorage.setItem('token', data.token);
      dispatch(setUser(data));
    });
};