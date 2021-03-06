import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./login";
import Book from './book'
import Header from '../shared/header';
const screens = {
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='SignIn'/>,
      };
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