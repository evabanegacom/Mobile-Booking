import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import AllBookings from "./allBookings";
import Book from './book'
import Header from '../shared/header';
const screens = {
  YourBookings: {
    screen: AllBookings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='All Your Bookings'/>,
      };
    },
  },
}

const YourBookingStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: {
        backgroundColor: "transparent",
        height: 100,
  
      },
    },
  });

  export default YourBookingStack;