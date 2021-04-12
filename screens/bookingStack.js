import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Book from './book'
import Header from '../shared/header';
const screens = {
  Book: {
    screen: Book,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Book'/>,
      };
    },
  },
}

const BookingStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: {
        backgroundColor: "transparent",
        height: 100,
  
      },
    },
  });

  export default BookingStack;