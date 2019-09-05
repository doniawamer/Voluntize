import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

export default class ProfileForm extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
  }

  render() {
    const userInfo = this.props.info;
    return (
      <View style={styles.container}>
        <Text style={loginstyles.textLetters3}>Edit</Text>

        <Text style={loginstyles.textLetters}>Name</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>{userInfo.name}</Text>
        </View>

        <Text style={loginstyles.textLetters}>Username</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>{userInfo.username}</Text>
        </View>

        <Text style={loginstyles.textLetters}>Email</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>{userInfo.email}</Text>
        </View>

        <Text style={loginstyles.textLetters}>Location</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>{userInfo.location}</Text>
        </View>

        <View
          style={{
            borderBottomColor: "rgba(96,100,109, 1)",
            borderBottomWidth: 1,
            margin: 3,
            marginBottom: 15,
            marginTop: 15,
            width: 350,
            alignSelf: "center"
          }}
        />

        <Text style={loginstyles.textLetters}>About</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>{userInfo.profile}</Text>
        </View>

        <Text style={loginstyles.textLetters}>Member Since</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>{userInfo.member}</Text>
        </View>
      </View>
    );
  }
}

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
    alignSelf: "flex-start",
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
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 30
  },
  textLetters2: {
    color: "#77A8AC",
    fontSize: 16,
    alignSelf: "flex-start",
    margin: 15,
    paddingLeft: 20,
    marginTop: 0,
    marginBottom: 8,
    marginHorizontal: 30
  },
  textLetters3: {
    color: "#CDAD70",
    fontSize: 16,
    textDecorationLine: "underline",
    alignSelf: "flex-end",
    margin: 15,
    paddingLeft: 90,
    marginTop: -8,
    marginBottom: 1,
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
