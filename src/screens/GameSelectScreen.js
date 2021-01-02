import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import {Header} from '../components';
import {backgroundColor, primaryColor} from '../utils';
import LottieView from 'lottie-react-native';
 

const GameScreen = (props) => {
  return (
    <ImageBackground
      source={require('../assests/brainholewide.jpg')}
      style={{height: '100%', width: '100%', flex: 1}}>
      <View style={styles.container}>
        <Header score={1} question={1} hide />
        <View style={styles.animation}>
          <LottieView source={require('../assests/hero.json')} autoPlay loop />
        </View>
        <View style={styles.options}>
          <View style={{height: 30}} />
          <View style={styles.bxView}>
            <TouchableOpacity
              style={styles.txtBox}
              onPress={() => props.navigation.navigate('StartGame')}>
              <Text style={styles.txtMessage}>Cerebral Game</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bxView}>
            <TouchableOpacity
              style={styles.txtBox}
              onPress={() => props.navigation.navigate('GameTwo')}>
              <Text style={styles.txtMessage}>We Know</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.bxView}>
            <TouchableOpacity
              style={styles.txtBox}
              onPress={() => alert('Coming Soon!')}>
              <Text style={styles.txtMessage}>Mind Game 3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bxView}>
            <TouchableOpacity
              style={styles.txtBox}
              onPress={() => alert('Coming Soon!')}>
              <Text style={styles.txtMessage}>Mind Game 4</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    height: 121,
    width: 121,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  options: {
    flex: 1,
    justifyContent: 'center',
    // marginTop: 150,
    position: 'absolute',
    bottom: 20,
    left: 110
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  colorBox: {
    height: 120,
    width: 120,
    borderRadius: 8,
  },
  plusSign: {
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
  },
  ques: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ans: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  animation: {
    width: '80%',
    marginLeft: '13%',
    flex: 0.7,
  },
  bxView: {
    // justifyContent: 'space-around',
    marginTop: 10
  },
  txtBox: {
    width: '120%',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#832810',
  },
  gameTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 38,
    fontWeight: 'bold'
  },
  txtMessage: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contain: {
    width: '70%',
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  modalButtonTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  ButtonTxt: {
    color: 'black',
  },
  modalButton: {
    backgroundColor: primaryColor,
    width: '30%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
});

export default GameScreen;
