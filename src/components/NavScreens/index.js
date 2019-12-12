import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenInfo = [
  {id: 1, iconName: 'home'},
  {id: 2, iconName: 'account-group'},
  {id: 3, iconName: 'youtube-tv'},
  {id: 4, iconName: 'account-circle-outline'},
  {id: 5, iconName: 'bell'},
  {id: 6, iconName: 'menu'},
];

const NavScreens = screens => {
  return (
    <View style={stl.screen}>
      {screenInfo.map(({id, iconName}) => {
        return (
          <View
            key={id}
            style={[stl.screenWrapper, id === 1 ? stl.screenActive : '']}>
            <Icon
              resizeMode="contain"
              name={iconName}
              size={40}
              color="#1877F2"
            />
          </View>
        );
      })}
    </View>
  );
};

const stl = StyleSheet.create({
  screen: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
    backgroundColor: '#fff',
    zIndex: -1,
  },
  screenWrapper: {
    paddingRight: '3%',
    paddingLeft: '3%',
  },
  screenActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#1877F2',
    zIndex: 1,
  },
});

export default NavScreens;
