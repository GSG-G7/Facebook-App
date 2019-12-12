import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Home';
import Groups from '../Groups';
import Videos from '../Videos';
import Profile from '../Profile';
import Notification from '../Notification';
import Menu from '../Menu';

import {NavMain} from '../../components';

const RouteConfigs = {
  Home: {
    screen: Home,
  },
  Groups: {
    screen: Groups,
  },
  Videos: {
    screen: Videos,
  },
  Profile: {
    screen: Profile,
  },
  Notification: {
    screen: Notification,
  },
  Menu: {
    screen: Menu,
  },
};

const TabNavigatorConfig = {
  order: ['Home', 'Groups', 'Videos', 'Profile', 'Notification', 'Menu'],
  initialRouteName: 'Home',
  navigationOptions: {
    header: <NavMain />,
  },
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (routeName === 'Menu') {
        iconName = 'menu';
      } else if (routeName === 'Groups') {
        iconName = focused ? 'account-group' : 'account-group-outline';
      } else if (routeName === 'Videos') {
        iconName = focused ? 'youtube-tv' : 'television';
      } else if (routeName === 'Notification') {
        iconName = focused ? 'bell' : 'bell-outline';
      } else if (routeName === 'Profile') {
        iconName = focused ? 'account-circle' : 'account-circle-outline';
      }

      return <Icon name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: '#1877F2',
    inactiveTintColor: '#4A4A4A',
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#fff',
    },
    indicatorStyle: {
      backgroundColor: '#1877F2',
    },
  },
};

const WrapperHome = createMaterialTopTabNavigator(
  RouteConfigs,
  TabNavigatorConfig,
);

export default WrapperHome;
