import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import HomeStack from "../screens/homeStack";
import LoginStack from "../screens/loginStack";
import BookingStack from "../screens/bookingStack";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },

  Login: {
    screen: LoginStack,
  },

  Book: {
    screen: BookingStack,
  },
});

export default createAppContainer(RootDrawerNavigator)
