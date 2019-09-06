import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from "react-native";

export default class VolunteerForm extends Component {
  

  render() {
    //const userInfo = this.props.info;
    return (
      <View style={styles.container}>
        <Text style={loginstyles.textLetters}>Volunteer's Name</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>Matilda Peterson</Text>
        </View>

        <Text style={loginstyles.textLetters}>Age</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>17</Text>
        </View>

        <Text style={loginstyles.textLetters}>Email</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>matilda@peterson.com</Text>
        </View>

        <Text style={loginstyles.textLetters}>Phone Number</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>(416)471-1406</Text>
        </View>

        <Text style={loginstyles.textLetters}>Location</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>Little Italy, Toronto</Text>
        </View>

        <Text style={loginstyles.textLetters}>About</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>I am a senior in high school. I want to major in Art History and minor in Business! I love art, design, and photography!</Text>
        </View>

        <Text style={loginstyles.textLetters}>Member Since</Text>
        <View style={loginstyles.titleContainer}>
          <Text style={loginstyles.textLetters2}>August 2019</Text>
        </View>
        <Text style={loginstyles.textLetters}>Distance to you</Text>
        
        <Text style={loginstyles.textLetters2}>250m</Text>
        <Image
                  source={require("../assets/map.png")}
                  style={styles.seniorDashboardContainer}
                />
       
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5
  },
  seniorDashboardContainer: {
    marginTop: -40,
    width: 330,
    height: 350,
    marginLeft:50,
    marginRight:50,
    resizeMode: "contain"
  },
  profile: {
    fontSize: 24,
    alignSelf: "flex-end",
    margin: 15,
    padding:10,
    marginTop: 2,
    marginBottom: 20,
    marginHorizontal: 30
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
    marginTop: -5,
    marginBottom: 10,
    marginHorizontal: 30
  },
  textLetters2: {
    color: "#77A8AC",
    fontSize: 16,
    alignSelf: "flex-start",
    margin: 15,
    paddingLeft: 20,
    marginTop: -10,
    marginBottom: 15,
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
