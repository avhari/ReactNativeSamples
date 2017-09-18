import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <Text>Hello, Navigation!</Text>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: App},
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
