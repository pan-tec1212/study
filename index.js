/**
 * @format
 */
import React from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Main = () => (
  <GestureHandlerRootView style={styles.root}>
    <App />
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

AppRegistry.registerComponent(appName, () => Main);
