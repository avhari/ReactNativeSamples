import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Jai Ulagamma!</Text>
        <Text>Viji''s  Project!!!!!!</Text>
        <Text>WE will do the Hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
