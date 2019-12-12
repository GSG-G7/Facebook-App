import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonComponent = ({title, func, style}) => {
  return (
    <>
      <TouchableOpacity
        style={style ? [stl.btn, style.btn] : stl.btn}
        onPress={func && (() => func())}>
        <Text style={style ? [stl.text, style.text] : stl.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const stl = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  btnText: {
    fontSize: 18,
  },
});

export default ButtonComponent;
