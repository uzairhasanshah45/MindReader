import React, {PropTypes} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {primaryColor} from '../utils';

const Input = (props) => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}}></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 20,
    color: primaryColor,
  },
});

export default Input;
