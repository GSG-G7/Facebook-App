import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardPost = ({onePost}) => {
  return (
    <View style={stl.cardPost}>
      <View style={stl.cardPostInfo}>
        <View style={stl.cardInfoLeft}>
          <View style={stl.imgWrapper}>
            <Image
              style={stl.imgProfile}
              source={require('../../assets/user1.png')}
            />
          </View>
          <Text style={stl.nameAccount}>{`${onePost.mainInfo &&
            onePost.mainInfo.first_name} ${onePost.mainInfo &&
            onePost.mainInfo.last_name}`}</Text>
        </View>
        <Icon name="dots-horizontal" size={25} />
      </View>
      <View style={stl.cardPostContent}>
        <Text>{onePost.content}</Text>
      </View>
      <View style={stl.cardPostAction}>
        <View style={stl.actionItem}>
          <Icon name="thumb-up-outline" color="#4A4A4A" size={25} />
          <Text>Like</Text>
        </View>
        <View style={stl.actionItem}>
          <Icon name="comment-outline" color="#4A4A4A" size={25} />
          <Text>Comment</Text>
        </View>
        <View style={stl.actionItem}>
          <Icon name="facebook-messenger" color="#4A4A4A" size={25} />
          <Text>Send</Text>
        </View>
      </View>
    </View>
  );
};

const stl = StyleSheet.create({
  cardPost: {
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
  },
  cardPostInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  imgProfile: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  nameAccount: {
    marginLeft: 10,
  },
  cardPostContent: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardPostAction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CardPost;
