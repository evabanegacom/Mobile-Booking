import { AsyncStorage } from "react-native";

const initState = {
  user: {},
  loggedIn: false,
  error: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        error: null,
        user: {...action.payload.user},
      };

      case 'LOG_OUT':
      AsyncStorage.clear();
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;