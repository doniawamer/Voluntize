import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  createAppContainer,
  StackActions,
  NavigationActions
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>

        <Button
          title="Login Seniors"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "SLogin" })]
              })
            );
          }}
        />

        <Button
          title="Login Volunteers"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "VLogin" })]
              })
            );
          }}
        />
      </View>
    );
  }
}

// Seniors 
class SeniorLogin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Senior Login</Text>

        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('SDash')}
        />

        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    );
  }
}

class SeniorDash extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Senior Dashboard</Text>

        <Button
          title="Favs"
          onPress={() => this.props.navigation.navigate('SFav')}
        />

        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate('SProfile')}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    );
  }
}

class SeniorFav extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Fav Volunteers</Text>

        <Button
          title="Dash"
          onPress={() => this.props.navigation.navigate('SDash')}
        />

        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate('SProfile')}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    );
  }
}

class SeniorProfile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Senior Profile</Text>

        <Button
          title="Dash"
          onPress={() => this.props.navigation.navigate('SDash')}
        />

        <Button
          title="Fav"
          onPress={() => this.props.navigation.navigate('SFav')}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    );
  }
}

// Volunteer
class VolunteerLogin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Volunteer Login</Text>

        <Button
          title="Dashboard"
          onPress={() => this.props.navigation.navigate('VDash')}
        />

        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    );
  }
}


class VolunteerDash extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Volunteer Dashboard</Text>

        <Button
          title="Tasks"
          onPress={() => this.props.navigation.navigate('VTasks')}
        />

        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate('VProfile')}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    );
  }
}

class VolunteerTasks extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Tasks Signed Up For</Text>

        <Button
          title="Dash"
          onPress={() => this.props.navigation.navigate('VDash')}
        />

        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate('VProfile')}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    );
  }
}

class VolunteerProfile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Volunteer Profile</Text>

        <Button
          title="Dash"
          onPress={() => this.props.navigation.navigate('VDash')}
        />

        <Button
          title="Tasks"
          onPress={() => this.props.navigation.navigate('VTasks')}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    );
  }
}


// Routes
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SLogin: SeniorLogin,
    VLogin: VolunteerLogin, 
    SDash: SeniorDash,
    SFav: SeniorFav,
    SProfile: SeniorProfile,
    VDash: VolunteerDash,
    VTasks: VolunteerTasks,
    VProfile: VolunteerProfile,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
     <AppContainer />
    );
  }
}

