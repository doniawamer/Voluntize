import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  createAppContainer,
  StackActions,
  NavigationActions
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default class HomeScreen extends React.Component {
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