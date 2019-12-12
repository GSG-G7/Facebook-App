import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Input} from '../../components';

class ForgotPass extends React.Component {
  static navigationOptions = {
    title: 'Find Your Account',
    headerStyle: {
      backgroundColor: '#133783',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerMode: 'float',
  };

  render() {
    return (
      <View style={stl.forgotPass}>
        {/* <Input style={stl.forgotInput} text="Phone or email" type="email" /> */}
        <TextInput style={stl.forgotInput} placeholder="Phone or email" />
        <Text style={stl.forgotText}>
          Please enter your phone number or email to search for your account
        </Text>
      </View>
    );
  }
}

const stl = StyleSheet.create({
  forgotPass: {
    marginRight: 15,
    marginLeft: 15,
  },
  forgotInput: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#1877F2',
  },
  forgotText: {
    textAlign: 'center',
    marginTop: 30,
  },
});

export default ForgotPass;
