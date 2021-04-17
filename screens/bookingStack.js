import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import BookCar from './book'
import CarDetails from './carDetails';
import Header from '../shared/header';
const screens = {
  BookCar: {
    screen: BookCar,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Book'/>,
      };
    },
  },

  CarDetails: {
    screen: CarDetails,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='CarDetail'/>,
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