const initialState = {
  cars: [],
  waiting: "wait for it",
  error: null,
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARS_FAILURE":
      return {
        ...state,
        waiting: "wait for it",
        error: action.error,
        cars: [],
      };
      
      case "FETCH_CARS_SUCCESS":
        return {
          ...state,
          waiting: "here we are",
          error: null,
          cars: action.payload,
        };
        
        case "FETCH_CARS_FAILURE": {
          return {
        ...state,
        waiting: null,
        cars: [],
        error: action.errors,
      };
    }
    default:
      return state;
  }
};

export default carsReducer;