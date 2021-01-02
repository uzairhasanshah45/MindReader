import React, {PropTypes} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Colors from '../constants/colors';

const NumberContaner = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 35,
    color: 'white',
  },
});

export default NumberContaner;
