const initState = {
  user: {},
  waiting: "",
  error: null,
};

const userReducer = (state = initState, actions) => {
  switch (actions.type) {
    case "SET_USER":
      return {
        ...state,
        waiting: "here we are",
        error: null,
        user: actions.payload,
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