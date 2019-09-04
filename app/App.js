import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";

import {
  createAppContainer,
  StackActions,
  NavigationActions
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Button from "react-native-button";


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require("../app/assets/Oldlogo.png")
                  : require("../app/assets/Oldlogo.png")
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.getStartedText}>Request Help </Text>
            <Text style={styles.titleLetters}>Give Back</Text>
            <Text ></Text>
          </View>
          <Text ></Text> 
          {/* whitespace */}
          <Text style={styles.titleLetters}>
            Fostering a sense of community.
          </Text>

          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../app/assets/pedestriancrossing.png")}
              style={styles.backgroundContainer}
            />
          </View>

          <Button
            containerStyle={{
              padding: 10,
              height: 45,
              width: 300,
              marginHorizontal: 65,
              overflow: "hidden",
              borderRadius: 10,
              backgroundColor: "#BFB093"
            }}
            disabledContainerStyle={{ backgroundColor: "grey" }}
            style={{ fontSize: 20, color: "white" }}
            onPress={() => this.props.navigation.navigate("SDash")}
          >
            Senior Login
          </Button>

          <View style={styles.titleContainer}>
            <Button
              containerStyle={{
                padding: 10,
                height: 45,
                width: 300,
                marginHorizontal: -25,
                overflow: "hidden",
                borderRadius: 10,
                backgroundColor: "#BFB093"
              }}
              disabledContainerStyle={{ backgroundColor: "grey" }}
              style={{ fontSize: 20, color: "white" }}
              onPress={() => this.props.navigation.navigate("VLogin")}
            >
              Volunteer Log In
            </Button>
          </View>

          <Button
            containerStyle={{ paddingTop: 40 }}
            style={{ fontSize: 10, color: "black" }}
          >
            Terms of Service
          </Button>
        </ScrollView>
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
          onPress={() => this.props.navigation.navigate("SDash")}
        />

        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

class SeniorDash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.titleLetters}>
            Welcome Arnold
          </Text>
          <Text style={styles.titleLetters}> 
          {/* //used for whitespace */}
          </Text>

          <View style={styles.dashboardContainer}>
          <Button
            containerStyle={{
              padding: 10,
              height: 40,
              width: 100,
              marginHorizontal: 5,
              overflow: "hidden",
              borderRadius: 1000,
              backgroundColor: "#3e4444"
            }}
            disabledContainerStyle={{ backgroundColor: "grey" }}
            style={{ fontSize: 14, color: "white" }}
            onPress={() => this.props.navigation.navigate("SDash")}
          >
            Create Task
          </Button>
          
          <Button
            containerStyle={{
              padding: 10,
              height: 40,
              width: 100,
              marginHorizontal: 5,
              overflow: "hidden",
              borderRadius: 1000,
              backgroundColor: "#e6e2d3"
            }}
            disabledContainerStyle={{ backgroundColor: "grey" }}
            style={{ fontSize: 14, color: "black" }}
            onPress={() => this.props.navigation.navigate("SDash")}
          >
            Favourites
          </Button>
          <Button
            containerStyle={{
              padding: 10,
              height: 40,
              width: 100,
              marginHorizontal: 5,
              overflow: "hidden",
              borderRadius: 1000,
              backgroundColor: "#e6e2d3"
            }}
            disabledContainerStyle={{ backgroundColor: "grey" }}
            style={{ fontSize: 14, color: "black" }}
            onPress={() => this.props.navigation.navigate("SDash")}
          >
            History
          </Button>
          <Image
              source={require("../app/assets/man.png")}
              style={styles.seniorDashboardContainer}
            />

          </View>

          <TextInput
          underlineColorAndroid = "transparent"
          placeholder = "What do you need help with?"
          placeholderTextColor = "#3b3a30"
          autoCapitalize = "none"
          >

          </TextInput>

        

          <Button
            containerStyle={{ paddingTop: 40 }}
            style={{ fontSize: 10, color: "black" }}
          >
            Terms of Service
          </Button>
        </ScrollView>
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
          onPress={() => this.props.navigation.navigate("SDash")}
        />

        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate("SProfile")}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate("Home")}
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
          onPress={() => this.props.navigation.navigate("SDash")}
        />

        <Button
          title="Fav"
          onPress={() => this.props.navigation.navigate("SFav")}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate("Home")}
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
          onPress={() => this.props.navigation.navigate("VDash")}
        />

        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate("Home")}
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
          onPress={() => this.props.navigation.navigate("VTasks")}
        />

        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate("VProfile")}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate("Home")}
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
          onPress={() => this.props.navigation.navigate("VDash")}
        />

        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate("VProfile")}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate("Home")}
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
          onPress={() => this.props.navigation.navigate("VDash")}
        />

        <Button
          title="Tasks"
          onPress={() => this.props.navigation.navigate("VTasks")}
        />

        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate("Home")}
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
    VProfile: VolunteerProfile
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  dashboardContainer: {
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 0,
    flexDirection: "row"
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 90,
    flexDirection: "row"
  },
  backgroundContainer: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  seniorDashboardContainer: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginLeft: -170
  },
  welcomeImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 25,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },

  titleLetters: {
    color: "#BFB093",
    fontSize: 25,
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});

