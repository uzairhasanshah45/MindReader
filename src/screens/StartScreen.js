import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {backgroundColor, primaryColor} from '../utils';

const StartScreen = (props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assests/background.png')}>
      <View style={styles.contain}>
        <View style={styles.appInfo}>
          <Text style={styles.header}>Mind Reader</Text>
          <Text style={styles.txtDetail}>
            We will know what you are gussing in mind with our mathematical
            algorithms.
          </Text>
        </View>

        <View style={styles.animation}>
          <LottieView source={require('../assests/brain.json')} autoPlay loop />
        </View>

        <TouchableOpacity
          style={styles.startButt}
          onPress={() => props.navigation.navigate('Onboard')}>
          <Text style={styles.txt}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  contain: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
  },
  animation: {
    width: '100%',
    flex: 0.6,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: primaryColor,
  },
  startButt: {
    marginTop: 15,
    // backgroundColor: primaryColor,
    alignSelf: 'center',
    borderRadius: 8,
    // borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 55,
  },
  txt: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600'
  },
  txtDetail: {
    paddingTop: 15,
    fontSize: 18,
    textAlign: 'center',
    color: primaryColor,
  },
  appInfo: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
    paddingVertical: 15,
  },
});

export default StartScreen;
