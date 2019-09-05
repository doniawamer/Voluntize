import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

class dashBoardInput extends Component {
  state = {
    email: "",
    password: ""
  };
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={loginstyles.textLetters}>What do you need help with?</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Be as specific as possible"
          placeholderTextColor="#77A8AC"
          autoCapitalize="none"
        />

        <Text style={loginstyles.pass}>Additional Notes</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder=" Enter notes here"
          placeholderTextColor="#77A8AC"
          autoCapitalize="none"
        />

        <Text style={loginstyles.pass}>How long does this task usually take?</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder=" Enter time in minutes"
          placeholderTextColor="#77A8AC"
          autoCapitalize="none"
        />


        <Text style={loginstyles.pass}>Is this a recurring task?</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder=" Enter yes or no"
          placeholderTextColor="#77A8AC"
          autoCapitalize="none"
        />
      </View>
    );
  }
}
export default dashBoardInput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#77A8AC",
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 30,
    width: 350
  },
  submitButton: {
    backgroundColor: "#77A8AC",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white"
  }
});

const loginstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50
  },
  contentContainer: {
    paddingTop: 40
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 30,
    flexDirection: "row"
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
    alignSelf: "flex-start"
  },
  textLetters: {
    color: "rgba(96,100,109, 1)",
    fontSize: 16,
    alignSelf: "flex-start",
    margin: 15,
    marginTop: 0,
    marginBottom: 0,
    marginHorizontal: 30
  },
  pass: {
    color: "rgba(96,100,109, 1)",
    fontSize: 16,
    alignSelf: "flex-start",
    margin: 15,
    marginTop: 15,
    marginBottom: 0,
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
  }
});