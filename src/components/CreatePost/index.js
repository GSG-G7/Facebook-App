import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const profileImg = require('../../assets/owner.png');

const otherTypesOfPost = [
  {id: 1, text: 'Live', iconName: 'video-outline', color: '#E53935'},
  {
    id: 2,
    text: 'Photo',
    iconName: 'image-size-select-actual',
    color: '#7CB342',
  },
  {id: 3, text: 'Check In', iconName: 'map-marker', color: '#C2185B'},
];

class CreatePost extends React.Component {
  render() {
    const {handlePost, postValue, sendPost} = this.props;
    return (
      <View style={stl.post}>
        <View style={stl.postTopContent}>
          <Image style={stl.ownerImg} source={profileImg} />
          <TextInput
            value={postValue}
            onChangeText={txt => handlePost(txt)}
            style={stl.ponstInput}
            placeholder="what's on your mind?"
          />
          <TouchableOpacity onPress={() => sendPost()} style={stl.sendMessage}>
            <Icon name="send" color="#3b5998" size={22} />
          </TouchableOpacity>
        </View>
        <View style={stl.lineH} />
        <View style={stl.postBottomContent}>
          {otherTypesOfPost.map((type, index) => {
            return (
              <React.Fragment key={type.id}>
                <View style={stl.oneType}>
                  <Icon
                    resizeMode="contain"
                    name={type.iconName}
                    size={40}
                    color={type.color}
                  />
                  <Text style={stl.oneTypeText}>{type.text}</Text>
                </View>
                {index < otherTypesOfPost.length - 1 && (
                  <View style={stl.lineV} />
                )}
              </React.Fragment>
            );
          })}
        </View>
      </View>
    );
  }
}

const stl = StyleSheet.create({
  post: {
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  postTopContent: {
    height: 50,
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 15,
    alignItems: 'center',
  },
  ownerImg: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },
  ponstInput: {
    height: 45,
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 50,
    fontSize: 18,
    paddingLeft: 20,
  },
  sendMessage: {
    marginLeft: 8,
  },
  lineH: {
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    marginTop: 20,
  },
  postBottomContent: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: '3%',
    marginLeft: '3%',
  },
  oneType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oneTypeText: {
    marginLeft: 3,
    fontWeight: 'bold',
  },
  lineV: {
    width: 1,
    height: '50%',
    backgroundColor: '#CCCCCC',
  },
});

export default CreatePost;
