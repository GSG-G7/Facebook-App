import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Story = ({story, owner = false}) => {
  const image = require('../../assets/story1.png');
  const user = require('../../assets/user1.png');
  return (
    <View style={stl.story}>
      <Image resizeMode="cover" style={stl.imgStory} source={image} />
      <Text style={stl.nameText}>{story.name}</Text>
      <View style={[stl.imgAccountWrapper, owner ? stl.isOwner : stl.notOwner]}>
        {owner ? (
          <Icon size={32} name="plus" color="#2851A3" />
        ) : (
          <Image style={stl.imgAccount} source={user} />
        )}
      </View>
    </View>
  );
};

const stl = StyleSheet.create({
  story: {
    width: '25%',
    height: '85%',
    borderRadius: 20,
    marginRight: 10,
    flexDirection: 'row',
  },
  imgStory: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  nameText: {
    position: 'absolute',
    color: '#fff',
    fontWeight: 'bold',
    bottom: 10,
    width: '100%',
    textAlign: 'center',
  },
  imgAccountWrapper: {
    position: 'absolute',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    left: 8,
    top: 8,
  },
  isOwner: {
    backgroundColor: '#fff',
  },
  notOwner: {
    backgroundColor: '#2851A3',
    padding: '7%',
  },
  imgAccount: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default Story;
