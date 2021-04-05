import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import HomeStack from "../screens/homeStack";
import LoginStack from "../screens/loginStack";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },

  Login: {
    screen: LoginStack,
  },
});

export default createAppContainer(RootDrawerNavigator)
