import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView
} from "react-native";

import Button from "react-native-button";
import DashBoardInput from "../components/DashBoardInputs";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Tasks extends React.Component {
    
  render() {
    const {userInfo, flow, title} = this.props.navigation.state.params;
    //SENIOR
      return (
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <Text style={styles.titleLetters}>
              Welcome, {userInfo.nickname}!
            </Text>

            <View style={styles.profile}>
              <TouchableOpacity
                onPress={() =>
                  this.props.nav.navigate("Profile", {
                    title: title,
                    flow: flow,
                    userInfo: userInfo
                  })
                }
              >
                <Image
                  source={require("../assets/man.png")}
                  style={styles.seniorDashboardContainer}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.dashboardContainer}>
              <Button
                containerStyle={{
                  padding: 10,
                  height: 40,
                  width: 100,
                  overflow: "hidden",
                  borderRadius: 1000,
                  marginHorizontal: 8,
                  backgroundColor: "#A09E9C"
                }}
                disabledContainerStyle={{ backgroundColor: "grey" }}
                style={{ fontSize: 14, color: "white" }}
                onPress={() => this.props.nav.navigate("SDash")}
              >
                Create Task
              </Button>

              <Button
                containerStyle={{
                  padding: 10,
                  height: 40,
                  width: 100,
                  overflow: "hidden",
                  marginHorizontal: 10,
                  borderRadius: 1000,
                  backgroundColor: "#CDAD70"
                }}
                disabledContainerStyle={{ backgroundColor: "grey" }}
                style={{ fontSize: 14, color: "white" }}
                onPress={() => this.props.nav.navigate("SDash")}
              >
                Tasks
              </Button>
              <Button
                containerStyle={{
                  padding: 10,
                  height: 40,
                  width: 100,
                  overflow: "hidden",
                  marginHorizontal: 10,
                  borderRadius: 1000,
                  backgroundColor: "#CDAD70"
                }}
                disabledContainerStyle={{ backgroundColor: "grey" }}
                style={{ fontSize: 14, color: "white" }}
                onPress={() => this.props.nav.navigate("Task")}
              >
                Favourites
              </Button>
            </View>

            
            

            <Button
              containerStyle={{
                padding: 10,
                height: 45,
                width: 300,
                overflow: "hidden",
                marginTop: 15,
                borderRadius: 10,
                alignSelf: "center",
                backgroundColor: "#6F8D71"
              }}
              disabledContainerStyle={{ backgroundColor: "grey" }}
              style={{ fontSize: 16, color: "#FFF" }}
              onPress={() => this.props.nav.navigate("Dash")}
            >
              Create Task
            </Button>
          </ScrollView>
        </View>
      );
  }
}

// Styling
const styles = StyleSheet.create({
  dashboardContainer: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 30
  },
  profile: {
    fontSize: 24,
    alignSelf: "flex-end",
    margin: 15,
    marginTop: -42,
    marginBottom: 20,
    marginHorizontal: 30
  },
  seniorDashboardContainer: {
    width: 50,
    height: 50,
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 15
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 10
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
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
    marginTop: 0,
    marginLeft: -10
  },
  welcomeImage: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    marginTop: 0,
    marginBottom: 3,
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
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  heading1: {
    padding: 0,
    margin: 0,
    fontSize: 24,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "left"
  },

  titleLetters: {
    color: "rgba(96,100,109, 1)",
    fontSize: 24,
    alignSelf: "flex-start",
    margin: 15,
    marginTop: 0,
    marginBottom: -2,
    marginHorizontal: 30
  },
  titleLettersblue: {
    color: "#77A8AC",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center"
  },
  titleLettersgreen: {
    color: "#6F8D71",
    fontSize: 20,
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
  },
  passtext: {
    alignSelf: "center",
    color: "#CDAD70",
    paddingTop: 5,
    textDecorationLine: "underline"
  },
  textHeading: {
    marginBottom: 20,
    padding: 20,
    color: "#000",
    fontSize: 25,
    lineHeight: 19
  },
  textParagraph: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  }
});

const loginstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40
  },
  contentContainer: {
    paddingTop: 40
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 30,
    flexDirection: "row",
    marginBottom: 0
  },
  backgroundContainer: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginTop: 0,
    marginLeft: -10
  },
  titleLetters: {
    color: "rgba(96,100,109, 1)",
    fontSize: 24,
    lineHeight: 24,
    alignSelf: "flex-start",
    marginBottom: 0
  },
  titleLettersblue: {
    color: "#77A8AC",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center"
  },
  titleLettersgreen: {
    color: "#6F8D71",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center"
  }
});
