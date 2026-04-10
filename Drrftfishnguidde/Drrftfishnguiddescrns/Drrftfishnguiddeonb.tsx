import Drrftfishnguiddelay from '../Drrftfishnguiddecompn/Drrftfishnguiddelay';
import {useNavigation} from '@react-navigation/native';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {useState} from 'react';

const drrftfishnguiddeSteps = [
  {
    title: 'Welcome to the world of winter fishing',
    description:
      'I am your assistant. I will guide you through the app, help you find the best fishing spots, and show you how to get the most out of every session. Here you will discover frozen lakes, remote locations, and perfect spots for winter fishing around the world. A calm atmosphere, clean design, and a focus on what matters — the moment, the ice, and the catch.',
    image: require('../../assets/i/drrftfishnguiddeon1.png'),
    buttonText: 'HELLO!',
  },
  {
    title: 'Explore fishing spots',
    description:
      'Browse carefully selected locations: frozen lakes, remote areas, and the best fishing spots around the world. Each location includes a description, conditions, and visual preview.',
    image: require('../../assets/i/drrftfishnguiddeon2.png'),
    buttonText: 'OKAY',
  },
  {
    title: 'Master the catch',
    description: `You will face different situations that can happen during winter fishing. Choose the right action and learn how to react in real conditions.
This section will help you better understand the ice, improve your skills, and make confident decisions during every fishing session.`,
    image: require('../../assets/i/drrftfishnguiddeon3.png'),
    buttonText: 'Next',
  },
  {
    title: 'Choose your fishing style',
    description: `Three styles — three different fishing experiences.
Choose your approach and discover how ice fishing feels in different ways: action, balance, or precision.`,
    image: require('../../assets/i/drrftfishnguiddeon4.png'),
    buttonText: 'CONTINUE',
  },
  {
    title: 'Random fishing spot',
    description: `At any time, you can discover a random fishing location on the ice.
The app will select a new spot for you, ready to explore with full details, conditions, and atmosphere.
This is an easy way to find new places and start fishing without planning.`,
    image: require('../../assets/i/drrftfishnguiddeon5.png'),
    buttonText: 'Next',
  },
];

const Drrftfishnguiddeonb = () => {
  const navigation = useNavigation();
  const [drrftfishnguiddeStep, setDrrftfishnguiddeStep] = useState(0);

  const drrftfishnguiddeNext = () => {
    drrftfishnguiddeStep === 4
      ? navigation.replace('Drrftfishnguiddetabb')
      : setDrrftfishnguiddeStep(drrftfishnguiddeStep + 1);
  };

  return (
    <Drrftfishnguiddelay>
      <View style={styles.drrftfishnguiddecontainer}>
        <Image
          source={drrftfishnguiddeSteps[drrftfishnguiddeStep].image}
          style={[
            drrftfishnguiddeStep === 0 && {marginBottom: -70},
            drrftfishnguiddeStep === 4 && {marginBottom: -70},
          ]}
        />
        <View style={styles.drrftfishnguiddebox}>
          <Text style={styles.drrftfishnguiddetitle}>
            {drrftfishnguiddeSteps[drrftfishnguiddeStep].title}
          </Text>
          <Text style={styles.drrftfishnguiddedescr}>
            {drrftfishnguiddeSteps[drrftfishnguiddeStep].description}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.drrftfishnguiddenextbtn}
          onPress={drrftfishnguiddeNext}
          activeOpacity={0.8}>
          <Text style={styles.drrftfishnguiddenextbtntext}>
            {drrftfishnguiddeSteps[drrftfishnguiddeStep].buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </Drrftfishnguiddelay>
  );
};

const styles = StyleSheet.create({
  drrftfishnguiddecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  drrftfishnguiddebox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1554A8',
    padding: 10,
    paddingHorizontal: 20,
    width: '90%',
    borderRadius: 15,
    minHeight: 250,
  },
  drrftfishnguiddetitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  drrftfishnguiddedescr: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 13,
    lineHeight: 22,
  },
  drrftfishnguiddenextbtn: {
    backgroundColor: '#FF8A3D',
    minWidth: 131,
    paddingHorizontal: 4,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  drrftfishnguiddenextbtntext: {
    fontSize: 22,
    fontFamily: 'Akatab-Black',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Drrftfishnguiddeonb;
