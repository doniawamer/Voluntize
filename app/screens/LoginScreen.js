import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Alert
} from "react-native";

import Button from "react-native-button";
import Inputs from "../components/inputs";
import { seniorInfo, volunteerInfo } from "../components/UserInfo";

let userInfo = "";

export default class LoginScreen extends React.Component {
  SOrV = () => {
    const { flow } = this.props.navigation.state.params;
    if (flow == "senior") {
      userInfo = seniorInfo;
    } else if (flow == "volunteer") {
      userInfo = volunteerInfo;
    } else {
      Alert.alert("Errr");
    }
  };

  render() {
    // console.log(this.props.navigation.state.params);
    const { title, flow } = this.props.navigation.state.params;

    {this.SOrV()}
    // console.log(userInfo);

    return (
      <ScrollView style={loginstyles.container}>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.titleLetters}>{title}</Text>
        </View>

        <View style={loginstyles.contentContainer}>
          <Inputs></Inputs>
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
            backgroundColor: "#77A8AC"
          }}
          disabledContainerStyle={{ backgroundColor: "grey" }}
          style={{ fontSize: 16, color: "#FFF" }}
          onPress={
            () =>
            this.props.navigation.navigate("Dash", {
              title: title,
              flow: flow,
              userInfo: userInfo,
            })
          }
        >
          Login
        </Button>

        <Text style={styles.passtext}>Forgot your password?</Text>
      </ScrollView>
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

const loginstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40
  },
  contentContainer: {
    paddingTop: 30
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
