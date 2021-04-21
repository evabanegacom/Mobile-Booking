import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import HomeStack from "../screens/homeStack";
import LoginStack from "../screens/loginStack";
import BookingStack from "../screens/bookingStack";
import YourBookingStack from '../screens/yourBooking'

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },

  Login: {
    screen: LoginStack,
  },

  BookCar: {
    screen: BookingStack,
  },

  YourBookings: {
    screen: YourBookingStack,
  },
});

export default createAppContainer(RootDrawerNavigator)
