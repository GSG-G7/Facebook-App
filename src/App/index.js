import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {LogIn, ForgotPass, NewAccount, SignUp, WrapperHome} from '../pages';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userId = await AsyncStorage.getItem('userId');
    console.log('user from Async::', userId);
    this.props.navigation.navigate(userId ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={stl.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const AppStack = createStackNavigator({WrapperHome: WrapperHome});
const AuthStack = createStackNavigator({LogIn, ForgotPass, NewAccount, SignUp});

const AppCounter = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={stl.app}>
        <AppCounter />
      </SafeAreaView>
    </>
  );
};

const stl = StyleSheet.create({
  app: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default App;
