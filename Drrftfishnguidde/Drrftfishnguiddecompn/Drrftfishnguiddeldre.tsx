import React, {useEffect, useRef} from 'react';
import {View, ScrollView, ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

import {Animated} from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

export const brightbrainhtmlLoader = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: transparent;
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle {
    width: 1em;
    height: 1em;
    margin: 0 0.25em;
    border-radius: 50%;
    background-color: #1554A8;
    animation: wave 1.5s infinite ease-in-out;
  }

  @keyframes wave {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1em);
    }
  }

  .circle:nth-child(1) { animation-delay: 0s; }
  .circle:nth-child(2) { animation-delay: 0.2s; }
  .circle:nth-child(3) { animation-delay: 0.4s; }
  .circle:nth-child(4) { animation-delay: 0.6s; }
  .circle:nth-child(5) { animation-delay: 0.8s; }
</style>
</head>
<body>
  <div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</body>
</html>`;

const Drrftfishnguiddeldre = () => {
  const navigation = useNavigation();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      navigation.replace('Drrftfishnguiddeonb');
    }, 6000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
        console.log('timer cleared');
      }
    };
  }, [navigation]);

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/i/drrftfishnguiddebg.png')}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <WebView
            originWhitelist={['*']}
            source={{html: brightbrainhtmlLoader}}
            style={{width: 260, height: 80, backgroundColor: 'transparent'}}
            scrollEnabled={false}
            transparent={true}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Drrftfishnguiddeldre;
