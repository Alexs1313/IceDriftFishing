// facts

import Drrftfishnguiddelay from '../Drrftfishnguiddecompn/Drrftfishnguiddelay';

import React, {useCallback, useMemo, useState} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

type DrrftfishnguiddeFishKey = 'red' | 'yellow' | 'blue';

type DrrftfishnguiddeFishItem = {
  key: DrrftfishnguiddeFishKey;
  title: string;
  image: string;
  body: string;
  facts?: string[];
};

const drrftfishnguiddeFishItems: DrrftfishnguiddeFishItem[] = [
  {
    key: 'blue',
    title: 'Cold Depth',
    image: require('../../assets/i/drrftfishnguidbl.png'),
    body: `Blue Fish is your ultimate companion for precise, strategic, and skill-based ice fishing. Designed for those who focus on technique and improvement, it transforms every session into a calculated and rewarding process.
Discover carefully curated fishing spots where conditions matter and every decision impacts your результат. Each location is selected to support a thoughtful approach — from analyzing depth and behavior to choosing the right tactics — with detailed previews and useful insights.
With an advanced interactive map, you can explore all strategic locations in one place, compare spots, and save key areas for future sessions.
Blue Fish’s signature Pro Mode adapts to your style, offering deeper insights, intelligent recommendations, and enhanced control over your fishing experience.
Feeling spontaneous? Use the Smart Spot feature to generate a location based on optimal conditions and probability.
The app also includes interactive scenarios that simulate real fishing challenges, helping you develop skills, think ahead, and react with precision.
Focused, intelligent, and refined — Blue Fish is built for anglers who want to improve, master their technique, and fish with purpose.
Blue Fish is a modern tool designed to elevate your fishing through knowledge, control, and consistent results.`,
    facts: [
      'Under the ice, fish conserve energy\nand avoid sudden movement.\nSlow presentations\nwork more effectively.',
      'Cold water reduces activity,\nso fish respond with hesitation.\nGentle motion\nkeeps them interested.',
      'Fish rely more on vibration\nthan visibility in deep ice conditions.\nSubtle signals\nmake the difference.',
      'They often stay close to structure\nlike weeds or drops.\nFinding the right spot\nmatters more than constant movement.',
      'Bites can be extremely light\nand almost unnoticeable.\nAttention to detail\nbecomes essential.',
      'Fish may follow the bait\nwithout striking immediately.\nPatience allows\nthe moment to develop.',
      'Light conditions under ice vary\nthroughout the day.\nAdjusting depth and position\nimproves results.',
      'In winter, feeding windows are shorter.\nTiming matters more than effort.\nBeing present\nat the right moment counts.',
      'Small movements outperform big ones.\nA slight twitch\ncan trigger a reaction.',
    ],
  },
  {
    key: 'yellow',
    title: 'Calm Ice',
    image: require('../../assets/i/drrftfishnguidpyel.png'),
    body: `Yellow Fish is your ultimate companion for calm, balanced, and атмосферні fishing sessions. Designed for those who enjoy the peaceful side of ice fishing, it transforms every trip into a relaxing and mindful experience.
Discover carefully curated locations across frozen lakes and quiet природні spots. Each place is selected to match a slower, more enjoyable rhythm — from casual fishing to long, peaceful sessions surrounded by nature — with visual previews and simple descriptions to guide your journey.
With an intuitive interactive map, you can explore all relaxing spots in one place, easily switch between locations, and save your favorite places to return anytime.
Yellow Fish’s signature Relax Mode adapts to your mood, offering light suggestions, комфортні умови, and a smooth, distraction-free experience.
Feeling spontaneous? Use the Easy Spot feature to instantly find a calm fishing location and start without unnecessary planning.
The app also includes interactive scenarios that gently guide you through fishing situations, helping you feel more confident and comfortable on the ice.
Clean, minimal, and peaceful — Yellow Fish is built for those who value atmosphere, simplicity, and the joy of fishing itself.
Yellow Fish is a modern experience focused on balance and comfort, helping you enjoy every moment without rush or pressure.`,
    facts: [
      'Silence on the ice\nclears your thoughts.\nFocus comes naturally\nwithout effort.',
      'Time slows down\nwhen nothing is rushed.\nYou begin to notice\nsmall details.',
      'Cold air sharpens awareness\nand brings clarity.\nThe environment\nguides your pace.',
      'Waiting becomes part of the experience,\nnot something to avoid.\nPatience\nturns into rhythm.',
      'Each small movement\nfeels more meaningful.\nSimplicity\ncreates depth.',
      'You disconnect from noise\nand reconnect with the moment.\nStillness\nbecomes comfortable.',
      'There is no pressure to rush.\nOnly quiet observation\nand steady presence.',
      'The experience is not only about catching.\nIt is about being there,\nfully engaged\nin a calm state.',
    ],
  },
  {
    key: 'red',
    title: 'Wild Catch',
    image: require('../../assets/i/drrftfishnguidplacred.png'),
    body: `Red Fish is your ultimate companion for fast-paced ice fishing and high-energy experiences. Designed for those who seek action, intensity, and rewarding catches, it transforms every fishing session into an exciting challenge.
Discover carefully selected fishing spots known for active fish behavior and dynamic conditions. Each location is chosen to match an energetic style — from quick bites to competitive fishing sessions — with visual previews and short descriptions to guide your decisions.
With an intuitive interactive map, you can explore all high-activity spots in one place, switch between locations effortlessly, and save your favorite hotspots for later.
Red Fish’s signature Action Mode adapts to your pace, offering smart tips, bite predictions, and real-time suggestions to maximize your results.
Feeling spontaneous? Use the Quick Catch feature to instantly generate a high-potential fishing spot and jump straight into the action without planning.
The experience also includes interactive fishing scenarios that simulate real-life situations, helping you react faster and improve your performance under changing conditions.
Bold, dynamic, and result-focused — Red Fish is built for those who want more action, more excitement, and bigger catches.
Red Fish is a modern feature designed to elevate your ice fishing experience through speed, precision, and energy. It combines smart tools and curated locations to help you make the most out of every moment on the ice.`,
    facts: [
      'Consistency builds rhythm.\nRepeating simple actions\ncreates better control.',
      'Changing depth slowly\nhelps locate active fish.\nPrecision\nbeats randomness.',
      'Less noise above the ice\nkeeps the area calm.\nStillness\nextends your chances.',
      'Simple gear is often enough.\nUnderstanding how to use it\nmatters more than quantity.',
      'Waiting between movements\ncreates anticipation.\nSpace in action\ninvites response.',
      'Testing different patterns\nreveals what works today.\nFlexibility\nis part of the process.',
      'Watching the line closely\nis more important than reacting fast.\nAwareness\ncomes before action.',
    ],
  },
];

const Drrftfishnguiddefccts = () => {
  const [drrftfishnguiddeSelectedFish, setDrrftfishnguiddeSelectedFish] =
    useState<DrrftfishnguiddeFishItem | null>(null);

  const drrftfishnguiddeList = useMemo(() => drrftfishnguiddeFishItems, []);

  const drrftfishnguiddeShareFish = async (drrftfishnguiddeText: string) => {
    try {
      await Share.share({
        message: drrftfishnguiddeText,
      });
    } catch {
      // ignore
    }
  };

  useFocusEffect(
    useCallback(() => {
      setDrrftfishnguiddeSelectedFish(null);
    }, []),
  );

  const drrftfishnguiddeBack = () => setDrrftfishnguiddeSelectedFish(null);

  return (
    <Drrftfishnguiddelay>
      <View style={styles.drrftfishnguiddecontainer}>
        <View style={styles.drrftfishnguiddetitleBar}>
          {drrftfishnguiddeSelectedFish && (
            <Pressable
              onPress={drrftfishnguiddeBack}
              style={styles.drrftfishnguiddebackBtn}
              hitSlop={10}>
              <Image
                source={require('../../assets/i/drrftfishnguiddback.png')}
                style={{width: 24, height: 24}}
              />
            </Pressable>
          )}
          <Text style={styles.drrftfishnguiddetitleText}>ICE FACTS</Text>
        </View>

        {!drrftfishnguiddeSelectedFish && (
          <View style={styles.drrftfishnguiddeassistantCard}>
            <Image
              source={require('../../assets/i/drrftfishnguidplace.png')}
              style={styles.drrftfishnguiddeassistantImg}
              resizeMode="contain"
            />
            <View style={styles.drrftfishnguiddeassistantTextCol}>
              <Text style={styles.drrftfishnguiddeassistantName}>William:</Text>
              <Text style={styles.drrftfishnguiddeassistantText}>
                Each fish has its own behavior and secrets. Choose one and
                discover what it reveals.
              </Text>
            </View>
          </View>
        )}

        {!drrftfishnguiddeSelectedFish &&
          drrftfishnguiddeList.map(drrftfishnguiddeFish => (
            <Pressable
              key={drrftfishnguiddeFish.key}
              onPress={() =>
                setDrrftfishnguiddeSelectedFish(drrftfishnguiddeFish)
              }
              style={styles.drrftfishnguiddefishRow}>
              <Image
                source={drrftfishnguiddeFish.image}
                style={styles.drrftfishnguiddefishBubbleImg}
              />
              <Text style={styles.drrftfishnguiddefishTitle}>
                {drrftfishnguiddeFish.title}
              </Text>
            </Pressable>
          ))}

        {drrftfishnguiddeSelectedFish && (
          <>
            <View style={styles.drrftfishnguiddefishRow}>
              <View
                style={[
                  styles.drrftfishnguiddefishBubbleLarge,
                  {backgroundColor: drrftfishnguiddeSelectedFish.accent},
                ]}
              />
              <Image
                source={drrftfishnguiddeSelectedFish.image}
                style={styles.drrftfishnguiddefishBubbleImg}
              />
              <Text style={styles.drrftfishnguiddefishTitle}>
                {drrftfishnguiddeSelectedFish.title}
              </Text>
            </View>

            {(drrftfishnguiddeSelectedFish.facts?.length
              ? drrftfishnguiddeSelectedFish.facts
              : [drrftfishnguiddeSelectedFish.body]
            ).map((drrftfishnguiddeFact, drrftfishnguiddeFactIdx) => (
              <View
                key={`${drrftfishnguiddeSelectedFish.key}_${drrftfishnguiddeFactIdx}`}
                style={styles.drrftfishnguiddedetailsCard}>
                <Text style={styles.drrftfishnguiddedetailsLabel}>
                  This is interesting:
                </Text>
                <Text style={styles.drrftfishnguiddedetailsText}>
                  {drrftfishnguiddeFact}
                </Text>
                <Pressable
                  onPress={() =>
                    drrftfishnguiddeShareFish(
                      `${drrftfishnguiddeSelectedFish.title}\n\n${drrftfishnguiddeFact}`,
                    )
                  }
                  style={styles.drrftfishnguiddeshareBtn}>
                  <Text style={styles.drrftfishnguiddeshareBtnText}>SHARE</Text>
                </Pressable>
              </View>
            ))}
          </>
        )}
      </View>
    </Drrftfishnguiddelay>
  );
};

export default Drrftfishnguiddefccts;

const styles = StyleSheet.create({
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
    marginBottom: 10,
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
    position: 'relative',
  },
  drrftfishnguiddetitleText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Akatab-Black',
  },
  drrftfishnguiddebackBtn: {
    position: 'absolute',
    left: 10,
    top: 6,
    bottom: 6,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center',
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

  drrftfishnguiddefishRow: {
    marginTop: 18,
    backgroundColor: '#1554A8',
    borderRadius: 14,
    padding: 4,
    minHeight: 103,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  drrftfishnguiddefishBubble: {
    width: 74,
    height: 48,
    borderRadius: 14,
    opacity: 0.95,
  },

  drrftfishnguiddefishTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Akatab-Black',
    marginLeft: 14,
    flex: 1,
    textAlign: 'center',
  },

  drrftfishnguiddedetailsCard: {
    marginTop: 18,
    backgroundColor: '#1554A8',
    borderRadius: 16,
    padding: 14,
  },

  drrftfishnguiddedetailsLabel: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Akatab-Black',
    textAlign: 'center',
    marginBottom: 10,
  },
  drrftfishnguiddedetailsText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 19,
    fontFamily: 'Akatab-Regular',
    textAlign: 'center',
    opacity: 0.95,
  },
  drrftfishnguiddeshareBtn: {
    marginTop: 16,
    backgroundColor: '#FF8A3D',
    borderRadius: 5,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    alignSelf: 'center',
  },
  drrftfishnguiddeshareBtnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Akatab-Black',
  },
});
