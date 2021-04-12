import React from "react";
import { useSelector } from 'react-redux';
import { createStackNavigator } from "react-navigation-stack";
import Home from "./home";
import SignUp from "./signup";
import Header from '../shared/header';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Home'/>,
      };
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