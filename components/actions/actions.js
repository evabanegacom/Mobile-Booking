import { AsyncStorage } from "react-native";

const getToken = async () => AsyncStorage.getItem('token');


// CARS API CALL
const fetchCarsBegin = () => ({
  type: "FETCH_CARS_BEGIN",
});

const fetchCarsSuccess = (data) => ({
  type: "FETCH_CARS_SUCCESS",
  payload: data,
});

const fetchCarsFailure = (error) => ({
  type: "FETCH_CARS_FAILURE",
  errors: error,
});

export const getCars = () => async dispatch => {
  var token = await getToken();
  dispatch(fetchCarsBegin());
  await fetch('https://gothic-serpent.herokuapp.com/api/v1/cars', {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      'Authorization': 'Bearer ' + token,
    },
  })
    .then(res => res.json())
    .then(data => {
      dispatch(fetchCarsSuccess(data));
    })
    .catch(err => {
      dispatch(fetchCarsFailure(err))
    })
};

// User Creation

const setUser = data => ({
  type: "SET_USER",
  payload: data,
});

export const logout = () => ({ type: "LOG_OUT" });

export const signUserUp = (userInfo) => async (dispatch) => {
  await fetch("https://gothic-serpent.herokuapp.com/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      AsyncStorage.setItem("token", data.token);
      dispatch(setUser(data));
    });
};

// User Authentication

export const fetchUser = (userInfo) => async (dispatch) => {
  await fetch("https://gothic-serpent.herokuapp.com/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      AsyncStorage.setItem("token", data.token);
      dispatch(setUser(data));
    });
};

// Fetch logged in user
export const autoLogin = () => async (dispatch) => {
  var token = await getToken();
  await fetch("https://gothic-serpent.herokuapp.com/api/v1/auto_login", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      'Authorization': 'Bearer ' + token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setUser(data));
    });
};

// MAKE BOOKING

const startBooking = payload => ({ type: 'SET_BOOKING', payload });

export const makeBooking = userInfo => async dispatch => {
  var token = await getToken();
  await fetch('https://gothic-serpent.herokuapp.com/api/v1/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(data => {
      dispatch(startBooking(data));
    });
};

// GET THE USER'S BOOKINGS

const getUserBooking = payload => ({ type: 'SET_BOOKING_DETAIL', payload });

export const userBooking = () => async dispatch => {
  var token = await getToken();
  await fetch('https://gothic-serpent.herokuapp.com/api/v1/bookings', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  })
    .then(res => res.json())
    .then(data => {
      dispatch(getUserBooking(data));
    });
};

// DELETE BOOKING

const removeBooking = () => ({
  type: 'REMOVE_BOOKING',
});

export const deleteBooking = id => async dispatch => {
  var token = await getToken();
  await fetch(`https://gothic-serpent.herokuapp.com/api/v1/bookings/${id}`, {
    method: 'DELETE',

    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  })
    .then(res => res.json())
    .then(
      dispatch(removeBooking())
    );
};
