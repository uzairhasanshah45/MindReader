import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({game, hide}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{hide ? 'Select Game' : 'Mind Reader'}</Text>
      {!hide && (
        <View style={styles.rw}>
          <Text style={styles.level}>{game}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
    // padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
  level: {
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
    color: 'white',
  },
  rw: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 5,
  },
});

export {Header};
