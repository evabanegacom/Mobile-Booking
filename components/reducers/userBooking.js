const initialState = {
    userBooking: [],
    error: null,
    waiting: 'wait for it',
  };
  
  const userBooking = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BOOKING_DETAIL':
        return {
          ...state,
          waiting: 'here we are',
          userBooking: action.payload,
        };

        case 'REMOVE_BOOKING':
          return {
            ...state
          }
  
      default:
        return state;
    }
  };
  
  export default userBooking;