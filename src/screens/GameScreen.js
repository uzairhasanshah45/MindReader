import React, { useState, useRef, useEffect } from 'react';
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
  ScrollView
} from 'react-native';
import { Header } from '../components';
import Card from '../components/Card';
import NumberContaner from '../components/NumberContaner';
import { primaryColor } from '../utils';
import LottieView from 'lottie-react-native';
import Colors from '../constants/colors';


const genereteRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return genereteRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const StartScreem = (props) => {
  const { data } = props.route.params;
  const answerTrue = true;
  const [showModal, setShowModal] = useState(false);
  const [currentGuess, setCurrentGuess] = useState(
    genereteRandomBetween(1, 100, data),
  );
  const [rounds, setRounds] = useState(0);

  const cuttentLow = useRef(1);
  const cuttentHigh = useRef(100);

  const { onGameOver } = props;

  useEffect(() => {
    if (currentGuess === data) {
      setShowModal(true);
    }
  }, [currentGuess, data, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < data) ||
      (direction === 'greater' && currentGuess > data)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      cuttentHigh.current = currentGuess;
    } else {
      cuttentLow.current = currentGuess;
    }
    const nextNumber = genereteRandomBetween(
      cuttentLow.current,
      cuttentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds) => curRounds + 1);
  };

  const modalOkAction = () => {
    props.navigation.navigate('SelectGame');
  };

  return (
    <ImageBackground
      source={require('../assests/brainholewide.jpg')}
      style={{ height: '100%', width: '100%', flex: 1 }}>
      <View style={styles.screen}>
        <Header game="Cerebral Game" />

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
                  { color: answerTrue ? 'green' : 'red' },
                ]}>
                {answerTrue ? 'You answer is Detected' : 'Wrong Answer'}
              </Text>
              <View style={{ width: '100%', height: '100%' }}>
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

        <View style={styles.contains}>
          <Text style={styles.txtMessage}>Opponent's Guess</Text>
          <NumberContaner white>{currentGuess}</NumberContaner>
          <Card style={styles.buttonContiner}>
            <Button
              title="LOWER"
              onPress={nextGuessHandler.bind(this, 'lower')}
              color={Colors.primary}
            />
            <Button
              title="GREATER"
              onPress={nextGuessHandler.bind(this, 'greater')}
              color={Colors.primary}
            />
          </Card>
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
  bxView: {
    justifyContent: 'space-around',
    flex: 1,
  },
  txtBox: {
    width: '85%',
    alignSelf: 'center',
    // borderColor: 'white',
    // borderWidth: 3,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#000',
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
  },
  button: {
    width: 100,
    borderRadius: 30
  },
});

export default StartScreem;
