import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList79052Navigator from '../features/NotificationList79052/navigator';
import Settings79051Navigator from '../features/Settings79051/navigator';
import Settings79043Navigator from '../features/Settings79043/navigator';
import UserProfile79041Navigator from '../features/UserProfile79041/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList79052: { screen: NotificationList79052Navigator },
Settings79051: { screen: Settings79051Navigator },
Settings79043: { screen: Settings79043Navigator },
UserProfile79041: { screen: UserProfile79041Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
