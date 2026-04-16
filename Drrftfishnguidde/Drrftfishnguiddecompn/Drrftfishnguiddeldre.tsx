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
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      overflow: hidden;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tree {
      position: relative;
      width: 50px;
      height: 50px;
      transform-style: preserve-3d;
      transform: rotateX(-20deg) rotateY(30deg);
      animation: treeAnimate 5s linear infinite;
    }

    @keyframes treeAnimate {
      0% {
        transform: rotateX(-20deg) rotateY(360deg);
      }
      100% {
        transform: rotateX(-20deg) rotateY(0deg);
      }
    }

    .tree div {
      position: absolute;
      top: -50px;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transform: translateY(calc(25px * var(--x))) translateZ(0px);
    }

    .tree div.branch span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #69c069, #77dd77);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      border-bottom: 5px solid rgba(0, 0, 0, 0.1);
      transform-origin: bottom;
      transform: rotateY(calc(90deg * var(--i))) rotateX(30deg) translateZ(28.5px);
    }

    .tree div.stem span {
      position: absolute;
      top: 110px;
      left: calc(50% - 7.5px);
      width: 15px;
      height: 50%;
      background: linear-gradient(90deg, #bb4622, #df7214);
      border-bottom: 5px solid rgba(0, 0, 0, 0.1);
      transform-origin: bottom;
      transform: rotateY(calc(90deg * var(--i))) translateZ(7.5px);
    }

    .shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      filter: blur(20px);
      transform-style: preserve-3d;
      transform: rotateX(90deg) translateZ(-65px);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="tree">
      <div class="branch" style="--x: 0;">
        <span style="--i: 0;"></span>
        <span style="--i: 1;"></span>
        <span style="--i: 2;"></span>
        <span style="--i: 3;"></span>
      </div>

      <div class="branch" style="--x: 1;">
        <span style="--i: 0;"></span>
        <span style="--i: 1;"></span>
        <span style="--i: 2;"></span>
        <span style="--i: 3;"></span>
      </div>

      <div class="branch" style="--x: 2;">
        <span style="--i: 0;"></span>
        <span style="--i: 1;"></span>
        <span style="--i: 2;"></span>
        <span style="--i: 3;"></span>
      </div>

      <div class="branch" style="--x: 3;">
        <span style="--i: 0;"></span>
        <span style="--i: 1;"></span>
        <span style="--i: 2;"></span>
        <span style="--i: 3;"></span>
      </div>

      <div class="stem">
        <span style="--i: 0;"></span>
        <span style="--i: 1;"></span>
        <span style="--i: 2;"></span>
        <span style="--i: 3;"></span>
      </div>

      <span class="shadow"></span>
    </div>
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
