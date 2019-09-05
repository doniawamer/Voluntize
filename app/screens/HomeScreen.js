
import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";

import Button from "react-native-button";

export default class HomeScreen extends React.Component {
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
                  ? require("../assets/Oldlogo.png")
                  : require("../assets/Oldlogo.png")
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.getStartedText}>Request Help. </Text>
            <Text style={styles.titleLettersblue}>Give</Text>
            <Text style={styles.titleLettersgreen}> Back.</Text>
          </View>
          <Text style={styles.titleLetters}>
            Fostering a sense of community.
          </Text>

          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/pedestriancrossing.png")}
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
              backgroundColor: "#CDAD70"
            }}
            disabledContainerStyle={{ backgroundColor: "grey" }}
            style={{ fontSize: 20, color: "white" }}
            onPress={() => this.props.navigation.navigate("Login", {
              title: 'Seniors Login',
              flow: 'senior'
            })}
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
                backgroundColor: "#CDAD70"
              }}
              disabledContainerStyle={{ backgroundColor: "grey" }}
              style={{ fontSize: 20, color: "white" }}
              onPress={() => this.props.navigation.navigate("Login", {
                title: 'Volunteer Login',
                flow: 'volunteer', 
              })}
            >
              Volunteer Login
            </Button>
          </View>

          <Button
            containerStyle={{ paddingTop: 20 }}
            style={{ fontSize: 10, color: "#6F8D71" }}
          >
            Terms of Service
          </Button>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    color: "#BFB093",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center"
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