import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./login";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login",
    },
  },
}

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: {
        backgroundColor: "transparent",
        height: 100,
  
      },
    },
  });

  export default LoginStack;