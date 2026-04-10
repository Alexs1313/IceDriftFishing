// blog

import React, {useMemo, useState} from 'react';

import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';

import Drrftfishnguiddelay from '../Drrftfishnguiddecompn/Drrftfishnguiddelay';

type DrrftfishnguiddeBlogPost = {
  id: string;
  title: string;
  body: string;
};

const drrftfishnguiddeBlogPosts: DrrftfishnguiddeBlogPost[] = [
  {
    id: 'drrftfishnguiddeblg_1',
    title: 'The calm of the ice',
    body: `When you step onto a frozen lake, everything slows down. The noise disappears, and the world becomes quiet and still. Ice fishing is not just about catching fish — it’s about entering a different state of mind.

As you move further onto the ice, you begin to notice how different this environment feels from everyday life. There are no sudden sounds, no constant interruptions — only a wide, open silence. This calm creates space in your mind, allowing thoughts to settle and tension to fade. Even your movements become more deliberate, more aware. The act of simply standing there, surrounded by stillness, becomes part of the experience. Over time, this quiet atmosphere reshapes how you perceive time, making each moment feel slower, fuller, and more meaningful.`,
  },
  {
    id: 'drrftfishnguiddeblg_2',
    title: 'A new kind of focus',
    body: `On the ice, your attention sharpens naturally. You watch the line, the movement, the smallest signals beneath the surface. Every detail matters more, and every moment becomes intentional.

This kind of focus is different from the one you use in everyday tasks. It’s not forced or pressured — it grows naturally from the environment. You begin to notice subtle vibrations, slight changes in tension, even the way the line moves in response to unseen activity below. Your senses become more tuned, and your mind stays present without drifting. This sustained awareness creates a deeper connection between you and what you’re doing, turning a simple activity into something immersive and mentally engaging.`,
  },
  {
    id: 'drrftfishnguiddeblg_3',
    title: 'The rhythm of patience',
    body: `Ice fishing teaches you to wait. There is no rush, no constant motion — just a steady rhythm. And in that stillness, you begin to understand the process, not just the result.

At first, waiting may feel unfamiliar or even uncomfortable. But over time, you begin to settle into it. The pauses between actions are no longer empty — they become part of the rhythm. You start to recognize patterns: how long it takes, when to adjust, when to stay still. This rhythm builds a quiet discipline, helping you let go of the need for immediate results. Instead, you begin to value consistency, observation, and timing. The experience becomes less about catching something quickly and more about being fully engaged in the unfolding process.`,
  },
  {
    id: 'drrftfishnguiddeblg_4',
    title: 'Connection with nature',
    body: `Surrounded by snow, ice, and open space, you feel fully present. The cold air, the sound of ice, the vast landscape — everything works together. It’s a raw and honest connection with nature.

There are no barriers between you and the environment. You feel the temperature directly, hear the subtle cracks and shifts of the ice, and see the horizon stretch endlessly. This exposure creates a sense of authenticity — nothing is filtered or artificial. You become more aware of natural elements and how they interact. The wind direction, the light, the changing sky — all of it becomes part of your awareness. This connection is not just visual; it’s physical and emotional, grounding you in a way that feels both simple and profound.`,
  },
  {
    id: 'drrftfishnguiddeblg_5',
    title: 'Simplicity that matters',
    body: `You don’t need much — just the right spot, the right gear, and time. This simplicity removes distractions and brings clarity. It allows you to focus on what truly matters.

In a world filled with constant input and complexity, this simplicity feels refreshing. There are fewer decisions to make, fewer things competing for your attention. Each element you bring has a clear purpose, and nothing feels excessive. This reduction of noise — both physical and mental — helps you focus on the essentials. You begin to appreciate the value of minimalism, where less truly becomes more. The experience becomes cleaner, more intentional, and easier to enjoy without unnecessary pressure or complication.`,
  },
  {
    id: 'drrftfishnguiddeblg_6',
    title: 'Every catch feels different',
    body: `On the ice, every bite feels earned. There’s anticipation, tension, and excitement in every movement. Even a small catch becomes a memorable moment.

Unlike fast-paced environments where results come quickly, here every catch is the result of patience, observation, and timing. The moment you feel movement on the line, everything sharpens — your focus, your reaction, your awareness. That brief interaction carries weight because of everything that came before it. Whether the catch is big or small, it holds meaning. It’s not just about the outcome, but about the entire sequence leading up to it. Each catch becomes a story, a moment that stays with you long after the day ends.`,
  },
  {
    id: 'drrftfishnguiddeblg_7',
    title: 'Adapting to conditions',
    body: `Ice fishing is about reading the environment. Depth, temperature, time of day — everything affects the outcome. Learning to adapt is what makes the experience rewarding.

No two days on the ice are exactly the same. Conditions change constantly, and success depends on your ability to notice and respond to those changes. You learn to observe patterns, test different approaches, and adjust your strategy without frustration. This adaptability builds a deeper understanding of the environment and your role within it. Over time, you develop a more intuitive sense of what works and when. The process becomes dynamic, where learning and adjusting are just as important as the final result.`,
  },
  {
    id: 'drrftfishnguiddeblg_8',
    title: 'The atmosphere of stillness',
    body: `The frozen landscape creates a unique atmosphere. It’s quiet, minimal, and almost meditative. You’re not just fishing — you’re experiencing the moment.

This atmosphere has a calming effect that goes beyond the activity itself. The lack of movement, the soft sounds, and the open space create a sense of balance. Your breathing slows, your thoughts become clearer, and your attention settles naturally. It feels less like doing something and more like being part of something. This meditative quality allows you to disconnect from external noise and reconnect with your own internal rhythm. The experience becomes restorative, offering both mental clarity and emotional calm.`,
  },
  {
    id: 'drrftfishnguiddeblg_9',
    title: 'Focus creates results',
    body: `When distractions fade, your performance improves. You react faster, think clearer, and make better decisions. Focus becomes your biggest advantage.

Without constant interruptions, your mind operates more efficiently. You begin to trust your instincts, react more precisely, and maintain consistency over time. This level of focus doesn’t feel exhausting — it feels natural and sustainable. As your awareness improves, so does your ability to make small but important decisions. These subtle improvements accumulate, leading to better outcomes. The environment teaches you that clarity and attention are not just helpful — they are essential.`,
  },
  {
    id: 'drrftfishnguiddeblg_10',
    title: 'The beauty of the process',
    body: `Ice fishing is not only about the catch. It’s about the time, the environment, and the experience itself. Every trip becomes something personal.

Each outing carries its own atmosphere, its own rhythm, and its own set of moments. Even without a catch, the experience feels complete because of everything you observe and feel along the way. The process becomes something you value independently of results. You begin to notice small details — the changing light, the patterns in the snow, the quiet shifts in the environment. These details add depth to the experience, making each trip unique and meaningful in its own way.`,
  },
  {
    id: 'drrftfishnguiddeblg_11',
    title: 'The feeling of freedom',
    body: `Out on the ice, there are no limits or noise. Just open space, fresh air, and your own pace. It’s a different kind of freedom.

This freedom is not about movement or speed — it’s about the absence of pressure. You are not being rushed, evaluated, or interrupted. You choose your pace, your actions, and your focus. The open space around you reinforces this feeling, creating a sense of possibility and ease. It allows you to step away from structured routines and experience a more natural flow of time. This kind of freedom feels quiet but powerful, offering a sense of control and calm that is often missing in daily life.`,
  },
  {
    id: 'drrftfishnguiddeblg_12',
    title: 'Why it matters',
    body: `Ice fishing is more than a hobby. It’s a way to slow down, reset, and reconnect. And sometimes, the best moments are the quietest ones.

In a fast-moving world, experiences like this become increasingly valuable. They offer a chance to pause, reflect, and regain balance. Ice fishing creates space not only for activity but for thought and awareness. It helps you reconnect with simple actions and natural surroundings, reminding you that not everything needs to be fast or complex to be meaningful. These quiet moments, often overlooked, become the ones that leave the strongest impression — not because of intensity, but because of their depth and clarity.`,
  },
];

function drrftfishnguiddeSnippet(
  drrftfishnguiddeText: string,
  drrftfishnguiddeMax = 160,
) {
  const drrftfishnguiddeOneLine = drrftfishnguiddeText
    .replace(/\s+/g, ' ')
    .trim();
  if (drrftfishnguiddeOneLine.length <= drrftfishnguiddeMax) {
    return drrftfishnguiddeOneLine;
  }
  return `${drrftfishnguiddeOneLine.slice(0, drrftfishnguiddeMax).trim()}...`;
}

const Drrftfishnguiddeblg = () => {
  const [drrftfishnguiddeSelectedPost, setDrrftfishnguiddeSelectedPost] =
    useState<DrrftfishnguiddeBlogPost | null>(null);

  const drrftfishnguiddeHeaderTitle = drrftfishnguiddeSelectedPost
    ? 'BLOG'
    : 'BLOG';

  const drrftfishnguiddeList = useMemo(() => drrftfishnguiddeBlogPosts, []);

  const drrftfishnguiddeSharePost = async (
    drrftfishnguiddePost: DrrftfishnguiddeBlogPost,
  ) => {
    try {
      await Share.share({
        message: `${drrftfishnguiddePost.title}\n\n${drrftfishnguiddePost.body}`,
      });
    } catch {
      console.error('Error');
    }
  };

  const drrftfishnguiddeBack = () => {
    setDrrftfishnguiddeSelectedPost(null);
  };

  return (
    <Drrftfishnguiddelay>
      <View style={styles.drrftfishnguiddecontainer}>
        <View style={styles.drrftfishnguiddetitleBar}>
          {drrftfishnguiddeSelectedPost && (
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
          <Text style={styles.drrftfishnguiddetitleText}>
            {drrftfishnguiddeHeaderTitle}
          </Text>
        </View>

        {!drrftfishnguiddeSelectedPost && (
          <View style={styles.drrftfishnguiddeassistantCard}>
            <Image
              source={require('../../assets/i/drrftfishnguidplace.png')}
              style={styles.drrftfishnguiddeassistantImg}
              resizeMode="contain"
            />
            <View style={styles.drrftfishnguiddeassistantTextCol}>
              <Text style={styles.drrftfishnguiddeassistantName}>William:</Text>
              <Text style={styles.drrftfishnguiddeassistantText}>
                Here are insights from fishing spots. Choose a place and
                explore.
              </Text>
            </View>
          </View>
        )}

        {!drrftfishnguiddeSelectedPost &&
          drrftfishnguiddeList.map(drrftfishnguiddePost => (
            <View
              key={drrftfishnguiddePost.id}
              style={styles.drrftfishnguiddepostCard}>
              <Text style={styles.drrftfishnguiddepostTitle}>
                {drrftfishnguiddePost.title}
              </Text>
              <Text style={styles.drrftfishnguiddepostText}>
                {drrftfishnguiddeSnippet(drrftfishnguiddePost.body, 170)}
              </Text>
              <Pressable
                onPress={() =>
                  setDrrftfishnguiddeSelectedPost(drrftfishnguiddePost)
                }
                style={styles.drrftfishnguiddereadBtn}>
                <Text style={styles.drrftfishnguiddereadBtnText}>
                  READ FULLY
                </Text>
              </Pressable>
            </View>
          ))}

        {drrftfishnguiddeSelectedPost && (
          <View style={styles.drrftfishnguiddefullCard}>
            <Text style={styles.drrftfishnguiddepostTitle}>
              {drrftfishnguiddeSelectedPost.title}
            </Text>
            <Text style={styles.drrftfishnguiddefullText}>
              {drrftfishnguiddeSelectedPost.body}
            </Text>
            <Pressable
              onPress={() =>
                drrftfishnguiddeSharePost(drrftfishnguiddeSelectedPost)
              }
              style={styles.drrftfishnguiddeshareBtn}>
              <Text style={styles.drrftfishnguiddeshareBtnText}>SHARE</Text>
            </Pressable>
          </View>
        )}
      </View>
    </Drrftfishnguiddelay>
  );
};

export default Drrftfishnguiddeblg;

const styles = StyleSheet.create({
  drrftfishnguiddefullCard: {
    marginTop: 26,
    backgroundColor: '#1554A8',
    borderRadius: 16,
    padding: 14,
  },
  drrftfishnguiddepostTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Akatab-SemiBold',
    marginBottom: 5,
  },

  drrftfishnguiddepostText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Akatab-Regular',
  },

  drrftfishnguiddefullText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 23,
    fontFamily: 'Akatab-SemiBold',
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
    marginBottom: 5,
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
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Akatab-Regular',
  },

  drrftfishnguiddepostCard: {
    marginTop: 18,
    backgroundColor: '#1554A8',
    borderRadius: 14,
    padding: 14,
  },

  drrftfishnguiddereadBtn: {
    marginTop: 14,
    backgroundColor: '#FF8A3D',
    borderRadius: 5,
    height: 44,
    width: 215,

    alignItems: 'center',
    justifyContent: 'center',
  },
  drrftfishnguiddereadBtnText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Akatab-Black',
  },
  drrftfishnguiddeshareBtn: {
    marginTop: 14,
    backgroundColor: '#FF8A3D',
    borderRadius: 5,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
  drrftfishnguiddeshareBtnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Akatab-Black',
  },
});
