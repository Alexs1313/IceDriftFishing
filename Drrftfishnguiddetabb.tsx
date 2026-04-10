// bottom tabs

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
  type ViewStyle,
} from 'react-native';

import Drrftfishnguiddeplc from './Drrftfishnguidde/Drrftfishnguiddescrns/Drrftfishnguiddeplc';

import Drrftfishnguiddemap from './Drrftfishnguidde/Drrftfishnguiddescrns/Drrftfishnguiddemap';
import Drrftfishnguiddesavd from './Drrftfishnguidde/Drrftfishnguiddescrns/Drrftfishnguiddesavd';
import Drrftfishnguiddeblg from './Drrftfishnguidde/Drrftfishnguiddescrns/Drrftfishnguiddeblg';
import Drrftfishnguiddesessn from './Drrftfishnguidde/Drrftfishnguiddescrns/Drrftfishnguiddesessn';
import Drrftfishnguiddefccts from './Drrftfishnguidde/Drrftfishnguiddescrns/Drrftfishnguiddefccts';

const Tab = createBottomTabNavigator();

const AnimatedTabButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[style as ViewStyle, styles.drftfishnguiddetabbButton]}
      {...rest}>
      <Animated.View
        style={[styles.drftfishnguiddetabbButtonInner, {transform: [{scale}]}]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const Drrftfishnguiddetabb = () => {
  const {height, width} = useWindowDimensions();
  const isLandscape = height < width;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.drftfishnguiddetabbBar,
          {height: isLandscape ? 60 : 55},
        ],

        tabBarButton: props => (
          <AnimatedTabButton {...(props as Record<string, unknown>)} />
        ),
      }}>
      <Tab.Screen
        name="Drrftfishnguiddeplc"
        component={Drrftfishnguiddeplc}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.drftfishnguiddetabbIconWrap}>
              <Image
                source={require('./assets/i/drrftfishnguiddetab1.png')}
                tintColor={focused ? '#FFFFFF' : '#FFFFFF80'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Drrftfishnguiddemap"
        component={Drrftfishnguiddemap}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.drftfishnguiddetabbIconWrap}>
              <Image
                source={require('./assets/i/drrftfishnguiddetab2.png')}
                tintColor={focused ? '#FFFFFF' : '#FFFFFF80'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Drrftfishnguiddesavd"
        component={Drrftfishnguiddesavd}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.drftfishnguiddetabbIconWrap}>
              <Image
                source={require('./assets/i/drrftfishnguiddetab3.png')}
                tintColor={focused ? '#FFFFFF' : '#FFFFFF80'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Drrftfishnguiddeblg"
        component={Drrftfishnguiddeblg}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.drftfishnguiddetabbIconWrap}>
              <Image
                source={require('./assets/i/drrftfishnguiddetab4.png')}
                tintColor={focused ? '#FFFFFF' : '#FFFFFF80'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Drrftfishnguiddesessn"
        component={Drrftfishnguiddesessn}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.drftfishnguiddetabbIconWrap}>
              <Image
                source={require('./assets/i/drrftfishnguiddetab5.png')}
                tintColor={focused ? '#FFFFFF' : '#FFFFFF80'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Drrftfishnguiddefccts"
        component={Drrftfishnguiddefccts}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.drftfishnguiddetabbIconWrap}>
              <Image
                source={require('./assets/i/drrftfishnguiddetab6.png')}
                tintColor={focused ? '#FFFFFF' : '#FFFFFF80'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  drftfishnguiddetabbButton: {
    flex: 1,
  },
  drftfishnguiddetabbButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  drftfishnguiddetabbBar: {
    elevation: 0,
    paddingTop: 20,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 5,
    borderColor: '#000000',
    backgroundColor: '#1554A8',
    height: 55,
    paddingBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderTopWidth: 1,
    borderRadius: 8,
    bottom: 38,
    marginHorizontal: 10,
  },

  drftfishnguiddetabbIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Drrftfishnguiddetabb;
