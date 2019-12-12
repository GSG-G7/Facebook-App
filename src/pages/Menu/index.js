import React from 'react';
import {
  AsyncStorage,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Menu extends React.Component {
  signOut = async () => {
    const {navigation} = this.props;
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={stl.menu}>
        <View style={stl.menuNav}>
          <Image
            style={stl.imgProfile}
            source={require('../../assets/owner.png')}
          />
          <View style={stl.navInfo}>
            <Text style={stl.ownerName}>Owner Name</Text>
            <Text style={stl.ownerDesc}>View YOur Profile</Text>
          </View>
        </View>
        <View style={stl.lineV} />
        <View style={stl.menuList}>
          <TouchableOpacity style={stl.listItem}>
            <Icon name="account-multiple" size={33} color="#385898" />
            <Text style={stl.listName}>Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.signOut()} style={stl.listItem}>
            <Icon name="exit-to-app" size={33} color="#4A4A4A" />
            <Text style={stl.listName}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const stl = StyleSheet.create({
  menu: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    paddingTop: 15,
  },
  menuNav: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 15,
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  navInfo: {
    marginLeft: 10,
  },
  ownerName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  ownerDesc: {
    color: '#828282',
    fontSize: 15,
  },
  lineV: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCCCCC',
  },
  listItem: {
    flexDirection: 'row',
    paddingTop: 10,
    width: '100%',
    paddingBottom: 10,
    alignItems: 'center',
  },
  listName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default Menu;
