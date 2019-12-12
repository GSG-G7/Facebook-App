import React from 'react';
import {
  AsyncStorage,
  View,
  ScrollView,
  StyleSheet,
  ListView,
  Text,
  ActivityIndicator,
} from 'react-native';
import {CreatePost, Story, CardPost} from '../../components';

import {getAllPosts, addPost, getUserInfo} from '../../fireBase/queries';

const stories = [
  {
    id: 1,
    name: 'Ahmad kaled',
    profileImg: '../../assets/owner.png',
  },
  {
    id: 2,
    name: 'Ali abed',
    profileImg: '../../assets/owner.png',
  },
  {
    id: 3,
    name: 'Ali abed',
    profileImg: '../../assets/owner.png',
  },
  {
    id: 4,
    name: 'Ali abed',
    profileImg: '../../assets/owner.png',
  },
];

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    userName: null,
    allPosts: null,
    postValue: '',
    loading: true,
  };

  componentDidMount = () => {
    AsyncStorage.getItem('userId').then(userId => {
      if (userId) {
        getAllPosts(userId)
          .then(snapshot => {
            const postArr = [];
            snapshot.forEach(doc => {
              const onePost = doc.data();

              postArr.push(onePost);
            });
            return postArr;
          })
          .then(allPost => {
            // Make request to get all data about BOST'S USER
            allPost.forEach(onePost => {
              getUserInfo(onePost.user_id)
                .then(result => {
                  onePost.mainInfo = result.data();
                })
                .then(() => {
                  this.setState({allPosts: allPost, loading: false});
                });
            });
          })
          .catch(err => console.log(err));
      }
    });
  };

  handlePost = value => {
    this.setState({postValue: value});
  };

  sendPost = () => {
    const {postValue} = this.state;
    AsyncStorage.getItem('userId').then(userId => {
      if (userId) {
        const data = {
          content: postValue,
          timestamp: Date.now(),
          user_id: userId,
        };
        addPost(data)
          .then(docRef => {
            console.log('Success add post', docRef.id);
          })
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    const {postValue, loading, allPosts} = this.state;
    // console.log(111111111, allPosts);
    return (
      <View style={stl.home}>
        <ScrollView>
          <CreatePost
            sendPost={this.sendPost}
            value={postValue}
            handlePost={this.handlePost}
          />
          <View style={stl.stories}>
            <Story owner={true} story={{name: 'Add to Story'}} />
            {stories.map(el => (
              <Story key={el.id} story={el} />
            ))}
          </View>

          <View style={stl.cards}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <>
                {allPosts.map(post => (
                  <CardPost onePost={post} />
                ))}
              </>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const stl = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  stories: {
    paddingLeft: 20,
    marginTop: 15,
    marginBottom: 15,
    height: 200,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  cards: {
    height: '50%',
  },
});

export default Home;
