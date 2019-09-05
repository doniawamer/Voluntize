import React from "react";
import {
  createAppContainer,
} from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Tasks from './screens/Tasks'

// Routes
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Dash: Dashboard,
    Profile: Profile,
    Tasks: Tasks
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
