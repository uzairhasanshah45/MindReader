import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
import OnboardScreen from '../screens/OnboardScreen';
import GameStartScreen from '../screens/StartGameScreem';
import GameScreen from '../screens/GameScreen';
import GameSelectScreen from '../screens/GameSelectScreen';
import GameScreenTwo from '../screens/GameScreenTwo';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Onboard" component={OnboardScreen} />
        <Stack.Screen name="SelectGame" component={GameSelectScreen} />
        <Stack.Screen name="StartGame" component={GameStartScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="GameTwo" component={GameScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
