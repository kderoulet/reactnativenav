import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import RootNavigator from './RootNavigator';

export default class App extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <RootNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abcdef',
  },

});
