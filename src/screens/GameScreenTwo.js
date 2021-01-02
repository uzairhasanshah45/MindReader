import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ImageBackground,
  Modal,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {Header} from '../components';
import Card from '../components/Card';
import NumberContaner from '../components/NumberContaner';
import {primaryColor} from '../utils';
import LottieView from 'lottie-react-native';
import colors from '../constants/colors';


const height = Dimensions.get('window').height

const StartScreem = (props) => {
  const answerTrue = true;
  const [showModal, setShowModal] = useState(false);
  const [cState, setCstate] = useState(1);

  const modalOkAction = () => {
    props.navigation.navigate('SelectGame');
  };

  return (
    <ImageBackground
      source={require('../assests/brainholewide.jpg')}
      style={{height: '100%', width: '100%', flex: 1}}>
      <View style={styles.screen}>
        <Header game="We Know" />
        {/* <View style={styles.animation}>
        <LottieView source={require('../assests/thinking.json')} autoPlay loop />
        </View> */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setshowModal(true)}>
          <View style={styles.modalView}>
            <View style={styles.contain}>
              <Text
                style={[
                  styles.modalButtonTxt,
                  {color: answerTrue ? 'green' : 'red'},
                ]}>
                {answerTrue ? 'You answer is Detected' : 'Wrong Answer'}
              </Text>
              <View style={{width: '100%', height: '100%'}}>
                <LottieView
                  source={
                    answerTrue
                      ? require('../assests/success.json')
                      : require('../assests/failure.json')
                  }
                  autoPlay
                  loop
                />
              </View>
              <View>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={modalOkAction}>
                  <Text style={[styles.ButtonTxt]}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.animation}>
        <LottieView source={require('../assests/thinking.json')} autoPlay loop />
        </View>
        <View style={styles.contains}>
          {cState === 1 && (
            <View style={styles.bxView}>
              <View
                style={styles.txtBox}
                onPress={() => props.navigation.navigate('StartGame')}>
                <Text style={styles.txtMessage}>
                  Select a whole number between 1 and 10.
                </Text>
              </View>
            </View>
          )}

          {cState === 2 && (
            <View style={styles.bxView}>
              <View
                style={styles.txtBox}
                onPress={() => props.navigation.navigate('StartGame')}>
                <Text style={styles.txtMessage}>
                  Multiply the numberin your mind by 2
                </Text>
              </View>
            </View>
          )}

          {cState === 3 && (
            <View style={styles.bxView}>
              <View
                style={styles.txtBox}
                onPress={() => props.navigation.navigate('StartGame')}>
                <Text style={styles.txtMessage}>
                  Multiply the previous result by 5
                </Text>
              </View>
            </View>
          )}

          {cState === 4 && (
            <View style={styles.bxView}>
              <View
                style={styles.txtBox}
                onPress={() => props.navigation.navigate('StartGame')}>
                <Text style={styles.txtMessage}>
                  Now divide the current result number by your original number.
                </Text>
              </View>
            </View>
          )}

          {cState === 5 && (
            <View style={styles.bxView}>
              <View
                style={styles.txtBox}
                onPress={() => props.navigation.navigate('StartGame')}>
                <Text style={styles.txtMessage}>
                  Subtract 7 from your current result number.
                </Text>
              </View>
            </View>
          )}

          {cState === 6 && (
            <View style={styles.bxView}>
              <View style={styles.txtBox} onPress={() => setShowModal(true)}>
                <Text style={styles.txtMessage}>Now, your result is 3</Text>
              </View>
            </View>
          )}

          <View style={styles.bxView}>
            <TouchableOpacity
              style={styles.txtBox}
              onPress={() => {
                if (cState === 6) {
                  setShowModal(true);
                } else {
                  setCstate((state) => state + 1);
                }
              }}>
              <Text style={styles.txtMessage}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  buttonContiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  contains: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  animation: {
    width: '100%',
    // marginLeft: '13%',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtMessage: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  txtMessageSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
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
    width: '80%',
    height: '35%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-around',
    paddingVertical: 25,
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
    marginTop: '-10%'
  },
  bxView: {
    width: '100%',  
     marginTop: height - 730,
  },
  txtBox: {
    width: '85%',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#832810',
    // marginTop: height - 500
  },
  txtMessage: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default StartScreem;
