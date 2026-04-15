import React, {useEffect, useMemo, useRef, useState} from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import Drrftfishnguiddelay from '../Drrftfishnguiddecompn/Drrftfishnguiddelay';

type DrrftfishnguiddeOptionKey = 'A' | 'B' | 'C' | 'D';

type DrrftfishnguiddeSessionItem = {
  id: string;
  situation: string;
  options: Record<DrrftfishnguiddeOptionKey, string>;
  correct: DrrftfishnguiddeOptionKey;
  explanation: string;
};

const drrftfishnguiddeSessionItems: DrrftfishnguiddeSessionItem[] = [
  {
    id: 'drrftfishnguiddesessn_1',
    situation: 'You notice slight movement on your line under the ice.',
    options: {
      A: 'Pull immediately',
      B: 'Wait and observe',
      C: 'Reel fast',
      D: 'Ignore',
    },
    correct: 'B',
    explanation:
      'Waiting helps confirm a real bite and avoids losing the catch.',
  },
  {
    id: 'drrftfishnguiddesessn_2',
    situation: 'The weather suddenly gets colder and wind increases.',
    options: {
      A: 'Keep fishing the same way',
      B: 'Change location',
      C: 'Adjust depth',
      D: 'Stop fishing',
    },
    correct: 'C',
    explanation: 'Fish often move deeper in colder conditions.',
  },
  {
    id: 'drrftfishnguiddesessn_3',
    situation: 'No bites for a long time.',
    options: {
      A: 'Stay and wait',
      B: 'Change bait',
      C: 'Leave immediately',
      D: 'Drill randomly',
    },
    correct: 'B',
    explanation: 'Changing bait increases chances of attracting fish.',
  },
  {
    id: 'drrftfishnguiddesessn_4',
    situation: 'You feel a strong pull on the line.',
    options: {
      A: 'Pull aggressively',
      B: 'Stay still',
      C: 'Lift steadily',
      D: 'Drop the line',
    },
    correct: 'C',
    explanation: 'Smooth control prevents losing the fish.',
  },
  {
    id: 'drrftfishnguiddesessn_5',
    situation: 'Ice starts making cracking sounds.',
    options: {
      A: 'Ignore it',
      B: 'Move away carefully',
      C: 'Run',
      D: 'Keep fishing',
    },
    correct: 'B',
    explanation: 'Safety is critical on unstable ice.',
  },
  {
    id: 'drrftfishnguiddesessn_6',
    situation: 'You see fish on your sonar.',
    options: {
      A: 'Do nothing',
      B: 'Lower bait slowly',
      C: 'Pull up',
      D: 'Change spot',
    },
    correct: 'B',
    explanation: 'Precise bait placement increases success.',
  },
  {
    id: 'drrftfishnguiddesessn_7',
    situation: 'Your line freezes slightly.',
    options: {
      A: 'Pull harder',
      B: 'Warm the line',
      C: 'Cut it',
      D: 'Ignore',
    },
    correct: 'B',
    explanation: 'Frozen gear reduces sensitivity.',
  },
  {
    id: 'drrftfishnguiddesessn_8',
    situation: 'You catch a small fish.',
    options: {
      A: 'Leave spot',
      B: 'Keep fishing',
      C: 'Change bait',
      D: 'Drill new hole',
    },
    correct: 'B',
    explanation: 'Activity often means more fish nearby.',
  },
  {
    id: 'drrftfishnguiddesessn_9',
    situation: 'Heavy snowfall begins.',
    options: {
      A: 'Stop fishing',
      B: 'Continue',
      C: 'Adjust setup',
      D: 'Leave',
    },
    correct: 'C',
    explanation: 'Visibility and comfort affect performance.',
  },
  {
    id: 'drrftfishnguiddesessn_10',
    situation: 'No movement at all.',
    options: {
      A: 'Wait longer',
      B: 'Change depth',
      C: 'Pull line',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Depth change often reveals fish.',
  },
  {
    id: 'drrftfishnguiddesessn_11',
    situation: 'You feel light taps on the line.',
    options: {
      A: 'Pull instantly',
      B: 'Wait slightly',
      C: 'Reel fast',
      D: 'Ignore',
    },
    correct: 'B',
    explanation: 'Small taps often precede a real bite.',
  },
  {
    id: 'drrftfishnguiddesessn_12',
    situation: 'The hole starts freezing.',
    options: {
      A: 'Ignore',
      B: 'Clear ice',
      C: 'Move away',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Clear holes improve control.',
  },
  {
    id: 'drrftfishnguiddesessn_13',
    situation: 'Fish disappears from sonar.',
    options: {
      A: 'Wait',
      B: 'Change bait',
      C: 'Adjust depth',
      D: 'Leave',
    },
    correct: 'C',
    explanation: 'Fish often move vertically.',
  },
  {
    id: 'drrftfishnguiddesessn_14',
    situation: 'Strong wind affects your balance.',
    options: {
      A: 'Ignore',
      B: 'Sit down',
      C: 'Stabilize position',
      D: 'Leave',
    },
    correct: 'C',
    explanation: 'Stability improves precision.',
  },
  {
    id: 'drrftfishnguiddesessn_15',
    situation: 'You get repeated small bites.',
    options: {
      A: 'Pull fast',
      B: 'Stay consistent',
      C: 'Change spot',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Consistency helps secure the catch.',
  },
  {
    id: 'drrftfishnguiddesessn_16',
    situation: 'Water is very clear.',
    options: {
      A: 'Use bright bait',
      B: 'Use subtle bait',
      C: 'Move',
      D: 'Wait',
    },
    correct: 'B',
    explanation: 'Clear water requires natural presentation.',
  },
  {
    id: 'drrftfishnguiddesessn_17',
    situation: 'You feel resistance while reeling.',
    options: {
      A: 'Pull harder',
      B: 'Slow down',
      C: 'Stop',
      D: 'Drop',
    },
    correct: 'B',
    explanation: 'Slow reeling prevents line break.',
  },
  {
    id: 'drrftfishnguiddesessn_18',
    situation: 'Your bait sinks too fast.',
    options: {
      A: 'Ignore',
      B: 'Change bait weight',
      C: 'Pull up',
      D: 'Leave',
    },
    correct: 'B',
    explanation: 'Controlled descent attracts fish.',
  },
  {
    id: 'drrftfishnguiddesessn_19',
    situation: 'You hear other anglers catching fish nearby.',
    options: {
      A: 'Stay',
      B: 'Move closer',
      C: 'Ignore',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Fish often gather in active zones.',
  },
  {
    id: 'drrftfishnguiddesessn_20',
    situation: 'You feel nothing for long time.',
    options: {
      A: 'Wait',
      B: 'Change location',
      C: 'Stop',
      D: 'Pull line',
    },
    correct: 'B',
    explanation: 'Relocation increases chances.',
  },
  {
    id: 'drrftfishnguiddesessn_21',
    situation: 'Your hands get cold.',
    options: {
      A: 'Ignore',
      B: 'Warm up',
      C: 'Continue',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Comfort affects performance.',
  },
  {
    id: 'drrftfishnguiddesessn_22',
    situation: 'Line tension changes suddenly.',
    options: {
      A: 'Pull fast',
      B: 'React calmly',
      C: 'Ignore',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Calm reaction prevents mistakes.',
  },
  {
    id: 'drrftfishnguiddesessn_23',
    situation: 'You see bubbles under ice.',
    options: {
      A: 'Ignore',
      B: 'Lower bait slowly',
      C: 'Move',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Bubbles indicate activity.',
  },
  {
    id: 'drrftfishnguiddesessn_24',
    situation: 'Fish escapes near the hole.',
    options: {
      A: 'Pull harder',
      B: 'Stay controlled',
      C: 'Stop',
      D: 'Drop',
    },
    correct: 'B',
    explanation: 'Control is key near the surface.',
  },
  {
    id: 'drrftfishnguiddesessn_25',
    situation: 'You feel strong wind shift.',
    options: {
      A: 'Ignore',
      B: 'Adjust position',
      C: 'Stop',
      D: 'Move randomly',
    },
    correct: 'B',
    explanation: 'Position affects stability.',
  },
  {
    id: 'drrftfishnguiddesessn_26',
    situation: 'You see shadow under ice.',
    options: {
      A: 'Pull',
      B: 'Lower bait slowly',
      C: 'Move',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Slow movement attracts fish.',
  },
  {
    id: 'drrftfishnguiddesessn_27',
    situation: 'Your bait gets stuck.',
    options: {
      A: 'Pull hard',
      B: 'Release gently',
      C: 'Cut line',
      D: 'Ignore',
    },
    correct: 'B',
    explanation: 'Gentle movement prevents damage.',
  },
  {
    id: 'drrftfishnguiddesessn_28',
    situation: 'You catch multiple small fish.',
    options: {
      A: 'Leave',
      B: 'Stay consistent',
      C: 'Change bait',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Small fish signal activity.',
  },
  {
    id: 'drrftfishnguiddesessn_29',
    situation: 'Ice surface becomes slippery.',
    options: {
      A: 'Ignore',
      B: 'Move carefully',
      C: 'Run',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Safety ensures stability.',
  },
  {
    id: 'drrftfishnguiddesessn_30',
    situation: 'You feel confident and focused.',
    options: {
      A: 'Rush',
      B: 'Stay consistent',
      C: 'Change everything',
      D: 'Stop',
    },
    correct: 'B',
    explanation: 'Consistency leads to better results.',
  },
];

const Drrftfishnguiddesessn = () => {
  const [drrftfishnguiddeIdx, setDrrftfishnguiddeIdx] = useState(0);
  const [drrftfishnguiddePicked, setDrrftfishnguiddePicked] =
    useState<DrrftfishnguiddeOptionKey | null>(null);
  const [drrftfishnguiddePhase, setDrrftfishnguiddePhase] = useState<
    'options' | 'reveal' | 'explain'
  >('options');
  const drrftfishnguiddeRevealTimerRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const drrftfishnguiddeItem = useMemo(
    () => drrftfishnguiddeSessionItems[drrftfishnguiddeIdx],
    [drrftfishnguiddeIdx],
  );

  const drrftfishnguiddeAnswered = drrftfishnguiddePicked !== null;

  useEffect(() => {
    return () => {
      if (drrftfishnguiddeRevealTimerRef.current) {
        clearTimeout(drrftfishnguiddeRevealTimerRef.current);
        drrftfishnguiddeRevealTimerRef.current = null;
      }
    };
  }, []);

  const drrftfishnguiddePick = (
    drrftfishnguiddeKey: DrrftfishnguiddeOptionKey,
  ) => {
    if (drrftfishnguiddePhase !== 'options') {
      return;
    }
    setDrrftfishnguiddePicked(drrftfishnguiddeKey);
    setDrrftfishnguiddePhase('reveal');
    if (drrftfishnguiddeRevealTimerRef.current) {
      clearTimeout(drrftfishnguiddeRevealTimerRef.current);
      drrftfishnguiddeRevealTimerRef.current = null;
    }
    drrftfishnguiddeRevealTimerRef.current = setTimeout(() => {
      setDrrftfishnguiddePhase('explain');
    }, 1500);
  };

  const drrftfishnguiddeNext = () => {
    const drrftfishnguiddeNextIdx =
      (drrftfishnguiddeIdx + 1) % drrftfishnguiddeSessionItems.length;
    setDrrftfishnguiddeIdx(drrftfishnguiddeNextIdx);
    setDrrftfishnguiddePicked(null);
    setDrrftfishnguiddePhase('options');
    if (drrftfishnguiddeRevealTimerRef.current) {
      clearTimeout(drrftfishnguiddeRevealTimerRef.current);
      drrftfishnguiddeRevealTimerRef.current = null;
    }
  };

  const drrftfishnguiddeOptionStyle = (
    drrftfishnguiddeKey: DrrftfishnguiddeOptionKey,
  ) => {
    if (drrftfishnguiddePhase === 'options') {
      return styles.drrftfishnguiddeoptionBtn;
    }
    if (drrftfishnguiddeKey === drrftfishnguiddeItem.correct) {
      return [
        styles.drrftfishnguiddeoptionBtn,
        styles.drrftfishnguiddeoptionBtnCorrect,
      ];
    }
    if (drrftfishnguiddeKey === drrftfishnguiddePicked) {
      return [
        styles.drrftfishnguiddeoptionBtn,
        styles.drrftfishnguiddeoptionBtnWrong,
      ];
    }
    return styles.drrftfishnguiddeoptionBtn;
  };

  return (
    <Drrftfishnguiddelay>
      <View style={styles.drrftfishnguiddecontainer}>
        <View style={styles.drrftfishnguiddetitleBar}>
          <Text style={styles.drrftfishnguiddetitleText}>ICE SESSION</Text>
        </View>

        <View style={styles.drrftfishnguiddeassistantCard}>
          <Image
            source={require('../../assets/i/drrftfishnguiddeon1.png')}
            style={styles.drrftfishnguiddeassistantImg}
            resizeMode="contain"
          />
          <View style={styles.drrftfishnguiddeassistantTextCol}>
            <Text style={styles.drrftfishnguiddeassistantName}>William:</Text>
            <Text style={styles.drrftfishnguiddeassistantText}>
              I’ve prepared situations you may face on the ice. Choose your
              action and learn how to react correctly.
            </Text>
          </View>
        </View>

        <View style={styles.drrftfishnguiddecard}>
          <Text style={styles.drrftfishnguiddecardTitle}>Situation:</Text>
          <Text style={styles.drrftfishnguiddecardText}>
            {drrftfishnguiddeItem.situation}
          </Text>

          {drrftfishnguiddePhase === 'options' && (
            <>
              <Text style={styles.drrftfishnguiddecardSubTitle}>Options:</Text>

              {(['A', 'B', 'C', 'D'] as const).map(drrftfishnguiddeKey => (
                <Pressable
                  key={drrftfishnguiddeKey}
                  onPress={() => drrftfishnguiddePick(drrftfishnguiddeKey)}
                  style={drrftfishnguiddeOptionStyle(drrftfishnguiddeKey)}>
                  <Text style={styles.drrftfishnguiddeoptionText}>
                    {drrftfishnguiddeKey}){' '}
                    {drrftfishnguiddeItem.options[drrftfishnguiddeKey]}
                  </Text>
                </Pressable>
              ))}
            </>
          )}

          {drrftfishnguiddePhase === 'reveal' && drrftfishnguiddeAnswered && (
            <>
              <Text style={styles.drrftfishnguiddecardSubTitle}>Options:</Text>
              {(['A', 'B', 'C', 'D'] as const).map(drrftfishnguiddeKey => (
                <View
                  key={drrftfishnguiddeKey}
                  style={drrftfishnguiddeOptionStyle(drrftfishnguiddeKey)}>
                  <Text style={styles.drrftfishnguiddeoptionText}>
                    {drrftfishnguiddeKey}){' '}
                    {drrftfishnguiddeItem.options[drrftfishnguiddeKey]}
                  </Text>
                </View>
              ))}
            </>
          )}

          {drrftfishnguiddePhase === 'explain' && drrftfishnguiddeAnswered && (
            <>
              <Text style={styles.drrftfishnguiddecardSubTitle}>
                Correct answer:
              </Text>
              <View
                style={[
                  styles.drrftfishnguiddeoptionBtn,
                  styles.drrftfishnguiddeoptionBtnCorrect,
                ]}>
                <Text style={styles.drrftfishnguiddeoptionText}>
                  {drrftfishnguiddeItem.correct}){' '}
                  {drrftfishnguiddeItem.options[drrftfishnguiddeItem.correct]}
                </Text>
              </View>

              <Text style={styles.drrftfishnguiddecardSubTitle}>
                Explanation:
              </Text>
              <Text style={styles.drrftfishnguiddeexplanationText}>
                {drrftfishnguiddeItem.explanation}
              </Text>
            </>
          )}
        </View>

        {drrftfishnguiddePhase === 'explain' && drrftfishnguiddeAnswered && (
          <Pressable
            onPress={drrftfishnguiddeNext}
            style={styles.drrftfishnguiddenextBtn}>
            <Text style={styles.drrftfishnguiddenextBtnText}>
              NEXT SITUATION
            </Text>
          </Pressable>
        )}
      </View>
    </Drrftfishnguiddelay>
  );
};

export default Drrftfishnguiddesessn;

const styles = StyleSheet.create({
  drrftfishnguiddeoptionBtn: {
    width: '100%',
    borderRadius: 4,
    paddingVertical: 4,
    height: 46,
    paddingHorizontal: 4,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#0B2D5A',
    marginBottom: 12,
  },

  drrftfishnguiddeoptionBtnCorrect: {
    backgroundColor: '#007C17',
    borderColor: '#FFFFFF',
  },

  drrftfishnguiddeoptionBtnWrong: {
    backgroundColor: '#9D0000',
    borderColor: '#FFFFFF',
  },
  drrftfishnguiddecontainer: {
    flex: 1,
    paddingTop: 65,
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  drrftfishnguiddetitleBar: {
    backgroundColor: '#1554A8',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drrftfishnguiddetitleText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Akatab-Black',
  },

  drrftfishnguiddeassistantCard: {
    marginTop: 24,
    backgroundColor: '#1554A8',
    borderRadius: 15,
    padding: 12,
    paddingBottom: 0,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  drrftfishnguiddeassistantImg: {
    width: 122,
    height: 136,
  },
  drrftfishnguiddeassistantTextCol: {
    flex: 1,
  },
  drrftfishnguiddeassistantName: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Akatab-Bold',
    marginBottom: 4,
  },
  drrftfishnguiddeassistantText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 15,
    fontFamily: 'Akatab-Regular',
  },

  drrftfishnguiddecard: {
    marginTop: 24,
    backgroundColor: '#1554A8',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  drrftfishnguiddecardTitle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Akatab-Black',
    marginBottom: 8,
  },
  drrftfishnguiddecardText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Akatab-Regular',
    textAlign: 'center',
    marginBottom: 16,
  },
  drrftfishnguiddecardSubTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Akatab-SemiBold',
    marginTop: 6,
    marginBottom: 10,
    textAlign: 'center',
  },

  drrftfishnguiddeoptionText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Akatab-Black',
    textAlign: 'center',
  },
  drrftfishnguiddeexplanationText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Akatab-Regular',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  drrftfishnguiddenextBtn: {
    marginTop: 18,
    backgroundColor: '#FF8A3D',
    borderRadius: 5,
    height: 46,
    width: 216,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  drrftfishnguiddenextBtnText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Akatab-Black',
  },
});
