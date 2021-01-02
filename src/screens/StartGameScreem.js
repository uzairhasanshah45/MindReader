import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ImageBackground,
} from 'react-native';
import {Header} from '../components';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContaner from '../components/NumberContaner';
import Colors from '../constants/colors';
import {primaryColor} from '../utils';

const StartGameScreem = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(false);

  const numberInputHendler = (inputTaxt) => {
    setEnteredValue(inputTaxt.replace(/[^0-9]/g, ''));
  };

  const resetInputHendler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHendler = () => {
    const choseNumber = parseInt(enteredValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be btween 1 and 99.', [
        {text: 'Okay', style: 'destructive', onPress: resetInputHendler},
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choseNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContiner}>
        <Text style={styles.txtMessage}>You selected</Text>
        <NumberContaner>{selectedNumber}</NumberContaner>
        <Button
          title="START GAME"
          onPress={() =>
            props.navigation.navigate('Game', {data: selectedNumber})
          }
          color="gray"
        />
      </Card>
    );
  }

  return (
    <ImageBackground
      source={require('../assests/brainholewide.jpg')}
      style={{height: '100%', width: '100%', flex: 1}}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
          <Header game={'Cerebral Game'} />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <Card style={styles.inputContainer}>
              <Text style={styles.txtMessage}>Select a Number</Text>
              <Text style={styles.txtMessageSmall}>
                (Trust me, algorithms doesn't use this number to evaluate
                result)
              </Text>

              <View style={{height: 15}} />
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHendler}
                value={enteredValue}
              />

              <View style={{height: 15}} />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                    style={{color: 'black'}}
                    title="Reset"
                    onPress={resetInputHendler}
                    color={Colors.accent}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Confirm"
                    onPress={confirmInputHendler}
                    color={Colors.primary}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, width: '100%', backgroundColor: 'rgba(0,0,0,0.55)'},
  screen: {
    flex: 1,
    padding: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-Sans-bold',
  },
  inputContainer: {
    width: '90%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
    borderRadius: 30
  },
  input: {
    marginVertical: 10,
    width: 100,
    textAlign: 'center',
  },
  summaryContiner: {
    marginTop: 20,
    alignItems: 'center',
    width: '90%',
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
  text: {
    // fontFamily: 'open-Sans',
  },
});

export default StartGameScreem;
