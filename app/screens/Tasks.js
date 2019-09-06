import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  Alert
} from "react-native";

import { Card, CardTitle, CardContent } from "react-native-card-view";

import Button from "react-native-button";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Tasks extends React.Component {
  render() {
    const { userInfo, flow, title, task3 } = this.props.navigation.state.params;
    //SENIOR
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.titleLetters}>Welcome, {userInfo.nickname}!</Text>

          <View style={styles.profile}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Profile", {
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

          <View style={styles.dashboardContainer2}>
            <Button
              containerStyle={{
                padding: 10,
                height: 40,
                width: 100,
                overflow: "hidden",
                borderRadius: 1000,
                marginHorizontal: 8,
                backgroundColor: "#CDAD70"
              }}
              disabledContainerStyle={{ backgroundColor: "grey" }}
              style={{ fontSize: 14, color: "white" }}
              onPress={() => this.props.navigation.navigate("Dash")}
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
                backgroundColor: "#A09E9C"
              }}
              disabledContainerStyle={{ backgroundColor: "grey" }}
              style={{ fontSize: 14, color: "white" }}
              onPress={() => this.props.navigation.navigate("SDash")}
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
              onPress={() => this.props.navigation.navigate("Task")}
            >
              Favourites
            </Button>
          </View>

          <TouchableOpacity
             onPress={() => Alert.alert(
                'Matlida wants to volunteer with you!',
                'View her profile?',
                [
                  {text: 'Yes', onPress: () => this.props.navigation.navigate("VolunteerProfile")},
                  {text: 'No', onPress: this.onDeleteBTN},
                ],
                { cancelable: false }
              )}
          >
            <View style={styles.containercard}>
              <Card title="CARD WITH DIVIDER">
                <CardTitle>
                  <Text style={styles.titleLetters2}>Grocery Run</Text>
                </CardTitle>
                <CardContent style={styles.cardContent}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text style={styles.titleLettersgreen}>Not recurring</Text>
                    <Text style={styles.titleLettersgreen}>~ 45 mins</Text>
                  </View>

                  <View style={styles.notes}>
                    <Text style={styles.titleLettersgray2}>
                      About the task:
                    </Text>
                    <Text style={styles.titleLettersgray}>
                      Quick grocery run from the Sunday farmers market
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Button
                      containerStyle={{
                        padding: 8,
                        height: 35,
                        width: 100,
                        overflow: "hidden",
                        marginTop: 5,
                        borderRadius: 10,
                        alignSelf: "center",
                        backgroundColor: "#6F8D71"
                      }}
                      disabledContainerStyle={{ backgroundColor: "grey" }}
                      style={{ fontSize: 14, color: "#FFF" }}
                      onPress={() => {}}
                    >
                      Edit
                    </Button>
                    <Button
                      containerStyle={{
                        padding: 8,
                        height: 35,
                        width: 100,
                        overflow: "hidden",
                        marginTop: 10,
                        marginBottom: 8,
                        borderRadius: 10,
                        alignSelf: "center",
                        backgroundColor: "#CDAD70"
                      }}
                      disabledContainerStyle={{ backgroundColor: "grey" }}
                      style={{ fontSize: 14, color: "#FFF" }}
                      onPress={() => {}}
                    >
                      Delete
                    </Button>
                  </View>
                </CardContent>
              </Card>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

// // Styling
// const styles = StyleSheet.create({
//   dashboardContainer: {
//     alignSelf: "flex-start",
//     flexDirection: "row",
//     marginTop: 15,
//     marginBottom: 10,
//     marginHorizontal: 30
//   },
//   profile: {
//     fontSize: 24,
//     alignSelf: "flex-end",
//     margin: 15,
//     marginTop: -42,
//     marginBottom: 20,
//     marginHorizontal: 30
//   },
//   seniorDashboardContainer: {
//     width: 50,
//     height: 50,
//     resizeMode: "contain"
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 15
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: "rgba(0,0,0,0.4)",
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: "center"
//   },
//   contentContainer: {
//     paddingTop: 10
//   },
//   welcomeContainer: {
//     alignItems: "center",
//     marginTop: 10,
//     marginBottom: 20
//   },
//   titleContainer: {
//     alignItems: "center",
//     marginTop: 10,
//     marginHorizontal: 90,
//     flexDirection: "row"
//   },
//   backgroundContainer: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "contain",
//     marginTop: 0,
//     marginLeft: -10
//   },
//   welcomeImage: {
//     width: 110,
//     height: 110,
//     resizeMode: "contain",
//     marginTop: 0,
//     marginBottom: 3,
//     marginLeft: -10
//   },
//   getStartedContainer: {
//     alignItems: "center",
//     marginHorizontal: 50
//   },
//   homeScreenFilename: {
//     marginVertical: 7
//   },
//   codeHighlightText: {
//     color: "rgba(96,100,109, 0.8)"
//   },
//   codeHighlightContainer: {
//     backgroundColor: "rgba(0,0,0,0.05)",
//     borderRadius: 3,
//     paddingHorizontal: 4
//   },
//   getStartedText: {
//     fontSize: 20,
//     color: "rgba(96,100,109, 1)",
//     lineHeight: 24,
//     textAlign: "center"
//   },
//   heading1: {
//     padding: 0,
//     margin: 0,
//     fontSize: 24,
//     color: "rgba(96,100,109, 1)",
//     lineHeight: 24,
//     textAlign: "left"
//   },

//   titleLetters: {
//     color: "rgba(96,100,109, 1)",
//     fontSize: 24,
//     alignSelf: "flex-start",
//     margin: 15,
//     marginTop: 0,
//     marginBottom: -2,
//     marginHorizontal: 30
//   },
//   titleLettersblue: {
//     color: "#77A8AC",
//     fontSize: 20,
//     lineHeight: 24,
//     textAlign: "center"
//   },
//   titleLettersgreen: {
//     color: "#6F8D71",
//     fontSize: 20,
//     lineHeight: 24,
//     textAlign: "center"
//   },

//   tabBarInfoContainer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: "black",
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3
//       },
//       android: {
//         elevation: 20
//       }
//     }),
//     alignItems: "center",
//     backgroundColor: "#fbfbfb",
//     paddingVertical: 20
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: "rgba(96,100,109, 1)",
//     textAlign: "center"
//   },
//   navigationFilename: {
//     marginTop: 5
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: "center"
//   },
//   helpLink: {
//     paddingVertical: 15
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: "#2e78b7"
//   },
//   passtext: {
//     alignSelf: "center",
//     color: "#CDAD70",
//     paddingTop: 5,
//     textDecorationLine: "underline"
//   },
//   textHeading: {
//     marginBottom: 20,
//     padding: 20,
//     color: "#000",
//     fontSize: 25,
//     lineHeight: 19
//   },
//   textParagraph: {
//     marginBottom: 20,
//     color: "rgba(0,0,0,0.4)",
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: "center"
//   }
// });

// const loginstyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 40
//   },
//   contentContainer: {
//     paddingTop: 40
//   },
//   titleContainer: {
//     alignItems: "center",
//     marginTop: 10,
//     marginHorizontal: 30,
//     flexDirection: "row",
//     marginBottom: 0
//   },
//   backgroundContainer: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "contain",
//     marginTop: 0,
//     marginLeft: -10
//   },
//   titleLetters: {
//     color: "rgba(96,100,109, 1)",
//     fontSize: 24,
//     lineHeight: 24,
//     alignSelf: "flex-start",
//     marginBottom: 0
//   },
//   titleLettersblue: {
//     color: "#77A8AC",
//     fontSize: 20,
//     lineHeight: 24,
//     textAlign: "center"
//   },
//   titleLettersgreen: {
//     color: "#6F8D71",
//     fontSize: 20,
//     lineHeight: 24,
//     textAlign: "center"
//   }
// });

// Styling
const styles = StyleSheet.create({
  dashboardContainer: {
    alignSelf: "flex-start",
    flexDirection: "column",
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 30
  },
  dashboardContainer2: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 30
  },
  containercard: {
    marginHorizontal: 28,
    marginTop: 7
  },
  notes: {
    marginTop: 10,
    alignItems: "flex-start"
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
    paddingTop: 30
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
  titleContainerM: {
    alignItems: "flex-start",
    marginTop: 1,
    marginHorizontal: 0,
    marginRight: 50,
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
    marginLeft: 20,
    textAlign: "left"
  },
  marketplaceText: {
    fontSize: 13,
    color: "#3e4444",
    lineHeight: 24,
    padding: 5,
    marginRight: 5,
    marginLeft: 5,
    textAlign: "left"
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
  titleLetters3: {
    color: "#77A8AC",
    fontSize: 20,
    alignSelf: "flex-start",
    margin: 15,
    marginTop: -2,
    marginBottom: 5,
    marginHorizontal: 30
  },
  titleLetters2: {
    color: "rgba(96,100,109, 1)",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "flex-start",
    marginTop: 0,
    marginBottom: -15,
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
    fontSize: 14,
    lineHeight: 16
  },
  titleLettersyellow: {
    color: "#CDAD70",
    fontSize: 14,
    lineHeight: 16
  },
  titleLettersgray: {
    color: "rgba(96,100,109, 1)",
    fontSize: 14,
    lineHeight: 16,
    marginTop: 5
  },
  titleLettersgray2: {
    color: "rgba(96,100,109, 1)",
    fontSize: 14,
    lineHeight: 16,
    // fontWeight: bold,
    marginTop: 5
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
