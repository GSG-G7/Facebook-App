import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {ButtonComponent} from '../../components';
import {addUser} from '../../fireBase/queries';
import {handleStorage} from '../../utils';

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Sign Up Form',
    headerStyle: {
      backgroundColor: '#4267B2',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordDot: '',
  };

  handleChange = (type, value) => {
    console.log(value);
    if (type === 'firstName') {
      this.setState({firstName: value});
    } else if (type === 'lastName') {
      this.setState({lastName: value});
    } else if (type === 'email') {
      this.setState({email: value});
    }
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

  onSubmit = () => {
    const data = this.state;
    const {navigation} = this.props;
    addUser(data)
      .then(docRef => {
        handleStorage('userId', docRef.id);
        navigation.navigate('WrapperHome');
      })
      .catch(err => console.log(err));
  };

  render() {
    const {firstName, lastName, email, passwordDot} = this.state;

    let dots = '';
    if (passwordDot.length > 0) {
      for (let i = 0; i < passwordDot.length; i++) {
        dots += '*';
      }
    }
    return (
      <View style={stl.signUp}>
        <View style={stl.signUpContent}>
          <View style={stl.signUpItem}>
            <Text style={stl.itemLable}>first Name</Text>
            <TextInput
              value={firstName}
              onChangeText={txt => this.handleChange('firstName', txt)}
              placeholder="first name"
              style={stl.signUpInput}
            />
          </View>
          <View style={stl.signUpItem}>
            <Text style={stl.itemLable}>Last Name</Text>
            <TextInput
              value={lastName}
              onChangeText={txt => this.handleChange('lastName', txt)}
              placeholder="last name"
              style={stl.signUpInput}
            />
          </View>
          <View style={stl.signUpItem}>
            <Text style={stl.itemLable}>email</Text>
            <TextInput
              value={email}
              onChangeText={txt => this.handleChange('email', txt)}
              placeholder="your email"
              style={stl.signUpInput}
            />
          </View>
          <View style={stl.signUpItem}>
            <Text style={stl.itemLable}>password</Text>
            <TextInput
              value={dots}
              onChangeText={txt => this.handleChangePassword(txt)}
              placeholder="password"
              style={stl.signUpInput}
            />
          </View>
        </View>
        <ButtonComponent
          func={this.onSubmit}
          title="Submit"
          style={{
            btn: {
              backgroundColor: '#1877F2',
              width: '100%',
            },
            text: {color: '#fff', fontSize: 18},
          }}
        />
      </View>
    );
  }
}

const stl = StyleSheet.create({
  signUp: {
    flex: 1,
    padding: 15,
    paddingTop: 25,
  },
  signUpContent: {
    marginBottom: 20,
  },
  signUpItem: {
    marginBottom: 15,
  },
  itemLable: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 17,
    color: '#4A4A4A',
  },
  signUpInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    paddingLeft: 10,
  },
});

export default SignUp;
