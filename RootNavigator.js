import { StackNavigator } from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
  } from 'react-native';  
import React, { Component } from 'react';
import HomeScreen from './pages/HomeScreen'
import FormScreen from './pages/FormScreen'

const RootNavigator = StackNavigator({
    Home: {screen: HomeScreen},
    Form: {screen: FormScreen},
  });
export default RootNavigator