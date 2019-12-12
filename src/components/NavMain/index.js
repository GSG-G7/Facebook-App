import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const logoLink = require('../../assets/logoText.png');
const logoChat = require('../../assets/logoChat.png');

const NavMain = () => {
  return (
    <View style={stl.navMain}>
      <Image resizeMode="contain" style={stl.logoTxt} source={logoLink} />
      <View style={stl.navMainRight}>
        <View style={[stl.iconWrapper, stl.iconWrapperFirst]}>
          <Icon
            resizeMode="contain"
            style={stl.searchIcon}
            name="magnify"
            size={40}
            color="#373737"
          />
        </View>
        <View style={stl.iconWrapper}>
          <Image resizeMode="contain" style={stl.chatIcon} source={logoChat} />
        </View>
      </View>
    </View>
  );
};

const stl = StyleSheet.create({
  navMain: {
    paddingTop: 10,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  logoTxt: {
    width: '40%',
    height: '100%',
  },
  navMainRight: {
    flexDirection: 'row',
    width: '30%',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#F2F3F5',
    borderRadius: 25,
  },
  iconWrapperFirst: {
    marginRight: 10,
  },
  chatIcon: {
    height: 30,
    width: 30,
  },
  searchIcon: {},
});

export default NavMain;
