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

import A from './A'
import B from './B'
import C from './C'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
})

// uncomment to use stack navigator
const AppNav = StackNavigator({
    A: { screen: A },
    B: { screen: B },
    C: { screen: C },
})

export default class App extends Component<{}> {
    static navigationOptions = ({ navigation }) => ({
        title: 'Learn w/ StackNav',
    })
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
