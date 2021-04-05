import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./home";
import SignUp from "./signup";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
    },
  },

  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Register",
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    //headerTintColor: '#444',
    headerStyle: {
      backgroundColor: "transparent",
      height: 100,
    },
  },
});

export default HomeStack;