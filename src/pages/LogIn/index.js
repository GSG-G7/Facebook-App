import React, {Component} from 'react';
import {
  AsyncStorage,
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';

import {ButtonComponent} from '../../components';
import singIn from '../../fireBase/signIn';
import {handleStorage, addPost} from '../../utils';

class LogIn extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    email: '',
    password: '',
    passwordDot: '',
  };

  handleChnageEmail = value => {
    this.setState({email: value});
  };

  handleChangePassword = value => {
    const lastIndex = value[value.length - 1];
    const {password} = this.state;
    let newPass;
    newPass = password + lastIndex;
    if (value.length < newPass.length) {
      newPass = newPass.substring(0, newPass.length - 2);
      if (lastIndex === undefined) {
        newPass = '';
      }
    }
    this.setState({
      password: newPass,
      passwordDot: value,
    });
  };

  clickForgotPass = () => {
    const {navigation} = this.props;
    navigation.navigate('ForgotPass');
  };

  clickCreate = () => {
    const {navigation} = this.props;
    navigation.navigate('NewAccount');
  };

  clickLogin = () => {
    const {navigation} = this.props;
    const {email, password} = this.state;
    singIn(email, password)
      .then(snapshot => {
        let ok = false;
        let objData;
        let userId;
        snapshot.forEach(doc => {
          ok = doc.exists;
          objData = doc.data();
          userId = doc.id;
        });
        if (ok) {
          handleStorage('userId', userId);
          navigation.navigate('WrapperHome');
        } else {
          console.log('Your email or password is wrong');
        }
      })
      .catch(err => console.log('1111111111111111 ERRROR:', err));
  };

  render() {
    const {email, passwordDot} = this.state;
    let dots = '';
    if (passwordDot.length > 0) {
      for (let i = 0; i < passwordDot.length; i++) {
        dots += '*';
      }
    }

    return (
      <View style={stl.login}>
        <View style={stl.loginHeader}>
          <Image
            style={stl.logo}
            source={require('../../assets/logoWhite.png')}
          />
        </View>
        <View style={stl.loginContent}>
          <View style={stl.loginLang}>
            <Text style={stl.langText}>العربية</Text>
            <Text style={stl.dot}>{'\u2B24'}</Text>
            <Text style={stl.langText}>Francais</Text>
            <Text style={stl.dot}>{'\u2B24'}</Text>
            <Text style={stl.langText}>More...</Text>
          </View>
          <View style={stl.loginInfo}>
            <View style={stl.loginInputFirst}>
              <TextInput
                style={stl.input}
                placeholder="Phone or email"
                value={email}
                onChangeText={txt => this.handleChnageEmail(txt)}
                onBlur={() => Keyboard.dismiss()}
              />
            </View>
            <TextInput
              style={stl.input}
              placeholder="Password"
              value={dots}
              onChangeText={txt => this.handleChangePassword(txt)}
              onBlur={() => Keyboard.dismiss()}
            />
            <View style={stl.btnLogin}>
              <ButtonComponent
                style={{
                  btn: {backgroundColor: '#1877F2'},
                  text: {color: '#ddd'},
                }}
                title="Log in"
                func={this.clickLogin}
              />
            </View>
            <ButtonComponent
              style={{
                text: {color: '#1877F2', fontSize: 18, fontWeight: 'bold'},
              }}
              title="Forgot Password?"
              func={this.clickForgotPass}
            />
          </View>
          <View style={stl.loginOr}>
            <View style={stl.lineH} />
            <Text>OR</Text>
            <View style={stl.lineH} />
          </View>
          <View style={stl.loginCreate}>
            <ButtonComponent
              style={{
                btn: {
                  backgroundColor: '#67ae55',
                },
                text: {color: '#fff', fontSize: 18},
              }}
              title="Create New Facebook Account"
              func={this.clickCreate}
            />
          </View>
        </View>
      </View>
    );
  }
}

const stl = StyleSheet.create({
  login: {
    flex: 1,
  },
  logo: {
    width: 70,
    height: 70,
  },
  loginHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    backgroundColor: '#1D3C78',
  },
  loginContent: {
    height: '70%',
    marginLeft: '12%',
    marginRight: '12%',
  },
  loginLang: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  langText: {
    fontSize: 15,
    color: '#555',
  },
  dot: {
    fontSize: 10,
    color: '#555',
    marginRight: 8,
    marginLeft: 8,
  },
  loginInfo: {
    marginTop: 30,
    marginBottom: 30,
  },
  loginInputFirst: {
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  btnLogin: {
    marginTop: 30,
    marginBottom: 30,
  },

  loginOr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  lineH: {
    width: '46%',
    height: 1,
    backgroundColor: '#ddd',
  },
  loginCreate: {
    marginRight: 20,
    marginLeft: 20,
  },
});

export default LogIn;
