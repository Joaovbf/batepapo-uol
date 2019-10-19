import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import HeaderSection from './app/components/Header'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import registerScreen from './app/screens/registerScreen';
import chatScreen from './app/screens/chatScreen';
import loginScreen from './app/screens/loginScreen';

export default class App extends React.Component {
  render(){
    return <AppContainer />
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Register: {screen:registerScreen},
  Chat:{screen:chatScreen},
  Login:{screen:loginScreen}
},
{initialRouteName: 'Login'})

const AppContainer = createAppContainer(AppSwitchNavigator)