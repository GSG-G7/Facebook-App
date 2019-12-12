import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {ButtonComponent} from '../../components';

class NewAccount extends React.Component {
  static navigationOptions = {
    title: 'Create Account',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  handleNext = () => {
    const {navigation} = this.props;
    navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={stl.newAcc}>
        <View style={stl.newAccContent}>
          <Text style={stl.joinTitle}>Join Facebook</Text>
          <Text style={stl.desc}>
            we'll help you create a new account in a few easy steps
          </Text>
          <ButtonComponent
            func={this.handleNext}
            title="Next"
            style={{
              btn: {
                backgroundColor: '#1877F2',
                width: '100%',
              },
              text: {color: '#fff', fontSize: 18},
            }}
          />
        </View>
        <View style={stl.aleadyAccount}>
          <ButtonComponent
            title="Already have an account?"
            style={{
              text: {color: '#1877F2', fontSize: 18, fontWeight: 'bold'},
            }}
          />
        </View>
      </View>
    );
  }
}

const stl = StyleSheet.create({
  newAcc: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
  },
  newAccContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  joinTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
  },
  desc: {
    color: '#555',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  aleadyAccount: {
    marginBottom: '5%',
  },
});

export default NewAccount;
