/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'

import A from './app/playWithStackNav/A'
import B from './app/playWithStackNav/B'
import C from './app/playWithStackNav/C'
import LearnStackNav from './app/playWithStackNav/learnStackNav'

import CreateView from './app/playWithRealm/createView'
import ReadView from './app/playWithRealm/readView'
import UpdateView from './app/playWithRealm/updateView'
import DeleteView from './app/playWithRealm/deleteView'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

// uncomment to use stack navigator
// const AppNav = StackNavigator({
//   A: {screen: A},
//   B: {screen: B},
//   C: {screen: C},
// })

// uncomment to use tab navigator
const AppNav = TabNavigator({
  LearnStackNav: {screen: LearnStackNav},
  ReadView: {screen: ReadView},
  CreateView: {screen: CreateView},
  UpdateView: {screen: UpdateView},
  DeleteView: {screen: DeleteView},
},
{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    labelStyle:{
      fontSize: 9,
    },
    activeTintColor: '#e91e63',
  },
})

// uncomment to use drawer navigator
// const AppNav = DrawerNavigator({
//   A: {screen: A},
//   B: {screen: B},
//   C: {screen: C},
// })

export default class App extends Component<{}> {
  render() {
    return <AppNav />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
