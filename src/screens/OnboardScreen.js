import React from 'react';
import {View, Text, Image, Dimensions, ImageBackground} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardScreen = (props) => {
  return (
    <ImageBackground
      source={require('../assests/background.png')}
      style={{width: '100%', height: '100%'}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.55)',
        }}>
        <Onboarding
          // containerStyles={{backgroundColor: '#DDD1C7'}}
          titleStyles={{color: '#fff'}}
          subTitleStyles={{color: '#fff'}}
          // bottomBarColor={'#f9f9f9'}
          onSkip={() => props.navigation.navigate('SelectGame')}
          onDone={() => props.navigation.navigate('SelectGame')}
          pages={[
            {
              // backgroundColor: '#272121',
              title: 'Mind Game',
              subtitle:
                'Mind Reader is a mind game where we will try to read your mind using equation of math.',
              image: (
                <Image
                  source={require('../assests/m.png')}
                  resizeMode="contain"
                  style={{
                    width: Dimensions.get('window').width,
                    height: 250,
                  }}
                />
              ),
            },
            {
              // backgroundColor: '#272121',
              title: 'How to play ?',
              subtitle:
                'You have to choose some number and you have to perform some calculation to view end result.',
              image: (
                <Image
                  source={require('../assests/number.png')}
                  resizeMode="contain"
                  style={{
                    width: Dimensions.get('window').width,
                    height: 150,
                  }}
                />
              ),
            },

            {
              // backgroundColor: '#272121',
              title: "Let's Start ?",
              subtitle: "Let's find our what is inside your mind.",
              image: (
                <Image
                  source={require('../assests/mind.png')}
                  resizeMode="contain"
                  style={{
                    width: Dimensions.get('window').width,
                    height: 150,
                  }}
                />
              ),
            },
          ]}
        />
      </View>
    </ImageBackground>
  );
};

export default OnboardScreen;
