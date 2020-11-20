/**
 * Author: Akhmad Rizki Prayoga
 * Simple tabNavigation
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Feather name="home" style={{fontSize:50}} />
      </View>
    )
  }
}

class ProfileCreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileCreen</Text>
        <Feather name="user" style={{fontSize:50}} />
      </View>
    )
  }
}

class HistoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HistoryScreen</Text>
        <Feather name="archive" style={{fontSize:50}} />
      </View>
    )
  }
}

class CartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CartScreen</Text>
        <Feather name="book" style={{fontSize:50}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileCreen,
    },
    History: {
      screen: HistoryScreen,
    },
    Cart: {
      screen: CartScreen,
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    labeled: true,
    shifting: false,
    barStyle: { backgroundColor: '#0096b5' },
  }
);

export default createAppContainer(TabNavigator);
