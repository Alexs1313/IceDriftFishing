import {
  DRRFTFISHNGUIDDE_SAVED_KEY,
  drrftfishnguiddeCoordsText,
  type DrrftfishnguiddePlace,
  drrftfishnguiddePlaces,
} from '../Drrftfishnguiddecompn/Drrftfishnguiddedata';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';

import Drrftfishnguiddelay from '../Drrftfishnguiddecompn/Drrftfishnguiddelay';

const Drrftfishnguiddesavd = () => {
  const drrftfishnguiddeNavigation = useNavigation();

  const [drrftfishnguiddeMode, setDrrftfishnguiddeMode] = useState<
    'saved' | 'random'
  >('saved');
  const [drrftfishnguiddeSelectedPlace, setDrrftfishnguiddeSelectedPlace] =
    useState<DrrftfishnguiddePlace | null>(null);
  const [drrftfishnguiddeDetailsOpen, setDrrftfishnguiddeDetailsOpen] =
    useState(false);
  const [drrftfishnguiddeSavedIds, setDrrftfishnguiddeSavedIds] = useState<
    string[]
  >([]);

  useFocusEffect(
    useCallback(() => {
      let drrftfishnguiddeMounted = true;
      (async () => {
        try {
          const drrftfishnguiddeRawSaved = await AsyncStorage.getItem(
            DRRFTFISHNGUIDDE_SAVED_KEY,
          );
          const drrftfishnguiddeParsedSaved = drrftfishnguiddeRawSaved
            ? (JSON.parse(drrftfishnguiddeRawSaved) as unknown)
            : [];
          const drrftfishnguiddeSavedIdList = Array.isArray(
            drrftfishnguiddeParsedSaved,
          )
            ? drrftfishnguiddeParsedSaved.filter(v => typeof v === 'string')
            : [];
          if (drrftfishnguiddeMounted) {
            setDrrftfishnguiddeSavedIds(drrftfishnguiddeSavedIdList);
          }
        } catch {
          if (drrftfishnguiddeMounted) {
            setDrrftfishnguiddeSavedIds([]);
          }
        }
      })();
      return () => {
        drrftfishnguiddeMounted = false;
      };
    }, []),
  );

  const drrftfishnguiddeIsSaved = (id: string) =>
    drrftfishnguiddeSavedIds.includes(id);

  const drrftfishnguiddeToggleSaved = async (placeId: string) => {
    const drrftfishnguiddeNextSavedIds = drrftfishnguiddeIsSaved(placeId)
      ? drrftfishnguiddeSavedIds.filter(id => id !== placeId)
      : [...drrftfishnguiddeSavedIds, placeId];
    setDrrftfishnguiddeSavedIds(drrftfishnguiddeNextSavedIds);
    try {
      await AsyncStorage.setItem(
        DRRFTFISHNGUIDDE_SAVED_KEY,
        JSON.stringify(drrftfishnguiddeNextSavedIds),
      );
    } catch {
      console.error('Error');
    }
  };

  const drrftfishnguiddeSharePlace = async (place: DrrftfishnguiddePlace) => {
    try {
      await Share.share({
        message: `${place.title}\nCoordinates: ${drrftfishnguiddeCoordsText(
          place.coordinates,
        )}\n\n${place.description}`,
      });
    } catch {
      console.error('Error');
    }
  };

  const drrftfishnguiddeSavedPlaces = useMemo(() => {
    const drrftfishnguiddeSavedSet = new Set(drrftfishnguiddeSavedIds);
    return drrftfishnguiddePlaces.filter(p =>
      drrftfishnguiddeSavedSet.has(p.id),
    );
  }, [drrftfishnguiddeSavedIds]);

  const drrftfishnguiddePickRandom = () => {
    const drrftfishnguiddePool =
      drrftfishnguiddeSavedPlaces.length > 0
        ? drrftfishnguiddeSavedPlaces
        : drrftfishnguiddePlaces;
    const drrftfishnguiddeIdx = Math.floor(
      Math.random() * drrftfishnguiddePool.length,
    );
    const drrftfishnguiddeNext =
      drrftfishnguiddePool[drrftfishnguiddeIdx] ?? null;
    setDrrftfishnguiddeSelectedPlace(drrftfishnguiddeNext);
    setDrrftfishnguiddeDetailsOpen(false);
    setDrrftfishnguiddeMode('random');
  };

  const drrftfishnguiddeOpenMap = (placeId: string) => {
    (drrftfishnguiddeNavigation as any).navigate('Drrftfishnguiddemap', {
      drrftfishnguiddePlaceId: placeId,
    });
  };

  useFocusEffect(
    useCallback(() => {
      setDrrftfishnguiddeSelectedPlace(null);
      setDrrftfishnguiddeDetailsOpen(false);
      setDrrftfishnguiddeMode('saved');
    }, []),
  );

  const drrftfishnguiddeBack = () => {
    if (drrftfishnguiddeDetailsOpen) {
      setDrrftfishnguiddeDetailsOpen(false);
      return;
    }
    if (drrftfishnguiddeMode === 'random') {
      setDrrftfishnguiddeMode('saved');
      setDrrftfishnguiddeSelectedPlace(null);
    }
  };

  const drrftfishnguiddeHeaderTitle =
    drrftfishnguiddeMode === 'random' ? 'RANDOM LOCATION' : 'SAVED PLACES';

  const drrftfishnguiddeShowBack =
    drrftfishnguiddeMode === 'random' || drrftfishnguiddeDetailsOpen;

  return (
    <Drrftfishnguiddelay>
      <View style={styles.drrftfishnguiddecontainer}>
        <View style={styles.drrftfishnguiddetitleBar}>
          {drrftfishnguiddeShowBack && (
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

        {!drrftfishnguiddeDetailsOpen && (
          <View style={styles.drrftfishnguiddeassistantCard}>
            <Image
              source={require('../../assets/i/drrftfishnguidplace.png')}
              style={styles.drrftfishnguiddeassistantImg}
              resizeMode="contain"
            />
            <View style={styles.drrftfishnguiddeassistantTextCol}>
              <Text style={styles.drrftfishnguiddeassistantName}>William:</Text>
              <Text style={styles.drrftfishnguiddeassistantText}>
                {drrftfishnguiddeMode === 'random'
                  ? 'I’ve picked a random fishing spot for you. Check the details and start exploring.'
                  : 'Your saved fishing spots are here. Return anytime or find a new one.'}
              </Text>
            </View>
          </View>
        )}

        {!drrftfishnguiddeDetailsOpen && drrftfishnguiddeMode === 'saved' && (
          <>
            <Pressable
              onPress={drrftfishnguiddePickRandom}
              style={styles.drrftfishnguidderandomBtn}>
              <Text style={styles.drrftfishnguidderandomBtnText}>
                GET A RANDOM LOCATION
              </Text>
            </Pressable>

            {drrftfishnguiddeSavedPlaces.length === 0 ? (
              <View style={styles.drrftfishnguiddeemptyWrap}>
                <Text style={styles.drrftfishnguiddeemptyTitle}>
                  {`YOU DON'T HAVE ANY SAVED\nPLACES YET`}
                </Text>

                <Pressable
                  onPress={() =>
                    (drrftfishnguiddeNavigation as any).navigate(
                      'Drrftfishnguiddeplc',
                    )
                  }
                  style={styles.drrftfishnguiddeemptyBtn}>
                  <Text style={styles.drrftfishnguiddeemptyBtnText}>
                    PLACES
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() =>
                    (drrftfishnguiddeNavigation as any).navigate(
                      'Drrftfishnguiddemap',
                    )
                  }
                  style={styles.drrftfishnguiddeemptyBtn}>
                  <Text style={styles.drrftfishnguiddeemptyBtnText}>MAP</Text>
                </Pressable>
              </View>
            ) : (
              drrftfishnguiddeSavedPlaces.map(drrftfishnguiddePlaceItem => (
                <View
                  key={drrftfishnguiddePlaceItem.id}
                  style={styles.drrftfishnguiddeplaceCard}>
                  <View style={styles.drrftfishnguiddeplaceCardHeader}>
                    <Text style={styles.drrftfishnguiddeplaceTitle}>
                      {drrftfishnguiddePlaceItem.title}
                    </Text>
                    <Pressable
                      onPress={() => {
                        setDrrftfishnguiddeSelectedPlace(
                          drrftfishnguiddePlaceItem,
                        );
                        setDrrftfishnguiddeDetailsOpen(true);
                      }}
                      hitSlop={8}
                      style={styles.drrftfishnguiddesmallIconBtn}>
                      <Image
                        source={require('../../assets/i/drrftfishnguiddeopen.png')}
                      />
                    </Pressable>
                  </View>
                  <Text style={styles.drrftfishnguiddecoordsText}>
                    Coordinates:{' '}
                    {drrftfishnguiddeCoordsText(
                      drrftfishnguiddePlaceItem.coordinates,
                    )}
                  </Text>
                  <View style={styles.drrftfishnguiddeplaceThumb}>
                    <Image
                      source={drrftfishnguiddePlaceItem.image}
                      style={styles.drrftfishnguiddeplaceThumbImg}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              ))
            )}
          </>
        )}

        {!drrftfishnguiddeDetailsOpen && drrftfishnguiddeMode === 'random' && (
          <>
            {drrftfishnguiddeSelectedPlace && (
              <View style={styles.drrftfishnguiddeplaceCard}>
                <View style={styles.drrftfishnguiddeplaceCardHeader}>
                  <Text style={styles.drrftfishnguiddeplaceTitle}>
                    {drrftfishnguiddeSelectedPlace.title}
                  </Text>
                  <Pressable
                    onPress={() => setDrrftfishnguiddeDetailsOpen(true)}
                    hitSlop={8}
                    style={styles.drrftfishnguiddesmallIconBtn}>
                    <Image
                      source={require('../../assets/i/drrftfishnguiddeopen.png')}
                    />
                  </Pressable>
                </View>
                <Text style={styles.drrftfishnguiddecoordsText}>
                  Coordinates:{' '}
                  {drrftfishnguiddeCoordsText(
                    drrftfishnguiddeSelectedPlace.coordinates,
                  )}
                </Text>
                <View style={styles.drrftfishnguiddeplaceThumb}>
                  <Image
                    source={drrftfishnguiddeSelectedPlace.image}
                    style={styles.drrftfishnguiddeplaceThumbImg}
                    resizeMode="cover"
                  />
                </View>
              </View>
            )}
          </>
        )}

        {drrftfishnguiddeDetailsOpen && drrftfishnguiddeSelectedPlace && (
          <View style={styles.drrftfishnguiddedetailsCard}>
            <View style={styles.drrftfishnguiddedetailsHero}>
              <Image
                source={drrftfishnguiddeSelectedPlace.image}
                style={styles.drrftfishnguiddedetailsHeroImg}
                resizeMode="cover"
              />
              <Pressable
                onPress={() =>
                  drrftfishnguiddeToggleSaved(drrftfishnguiddeSelectedPlace.id)
                }
                hitSlop={10}
                style={[
                  styles.drrftfishnguiddedetailsSaveBtn,
                  drrftfishnguiddeIsSaved(drrftfishnguiddeSelectedPlace.id) &&
                    styles.drrftfishnguiddedetailsSaveBtnActive,
                ]}>
                <Image
                  source={require('../../assets/i/drrftfishnguiddsave.png')}
                />
              </Pressable>
            </View>

            <Text style={styles.drrftfishnguiddedetailsTitle}>
              {drrftfishnguiddeSelectedPlace.title}
            </Text>
            <Text style={styles.drrftfishnguiddecoordsText}>
              Coordinates:{' '}
              {drrftfishnguiddeCoordsText(
                drrftfishnguiddeSelectedPlace.coordinates,
              )}
            </Text>

            <Text style={styles.drrftfishnguiddedetailsLabel}>
              Description:
            </Text>
            <Text style={styles.drrftfishnguiddedetailsText}>
              {drrftfishnguiddeSelectedPlace.description}
            </Text>

            <View style={styles.drrftfishnguiddedetailsActionsRow}>
              <Pressable
                onPress={() =>
                  drrftfishnguiddeOpenMap(drrftfishnguiddeSelectedPlace.id)
                }
                style={[
                  styles.drrftfishnguiddeactionBtn,
                  {width: 40, height: 40, borderRadius: 5},
                ]}>
                <Image
                  source={require('../../assets/i/drrftfishnguiddbmap.png')}
                />
              </Pressable>
              <Pressable
                onPress={() =>
                  drrftfishnguiddeSharePlace(drrftfishnguiddeSelectedPlace)
                }
                style={[
                  styles.drrftfishnguiddeactionBtn,
                  styles.drrftfishnguiddeactionBtnPrimary,
                ]}>
                <Text style={styles.drrftfishnguiddeactionBtnText}>SHARE</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </Drrftfishnguiddelay>
  );
};

export default Drrftfishnguiddesavd;

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
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Akatab-Regular',
  },

  drrftfishnguiddesectionTitlePill: {
    marginTop: 24,
    alignSelf: 'stretch',
    backgroundColor: '#1554A8',
    borderRadius: 15,
    height: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drrftfishnguiddesectionTitleText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Akatab-Black',
  },

  drrftfishnguidderandomBtn: {
    marginTop: 32,
    backgroundColor: '#003099',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '99%',
    alignSelf: 'center',
  },
  drrftfishnguidderandomBtnText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Akatab-Black',
  },

  drrftfishnguiddeemptyWrap: {
    marginTop: 30,
    alignItems: 'center',
    gap: 16,
  },
  drrftfishnguiddeemptyTitle: {
    color: '#00243A',
    fontSize: 20,
    fontFamily: 'Akatab-Bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  drrftfishnguiddeemptyBtn: {
    width: '72%',
    height: 44,
    borderRadius: 6,
    backgroundColor: '#FF8A3D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drrftfishnguiddeemptyBtnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Akatab-Black',
  },

  drrftfishnguiddeplaceCard: {
    marginTop: 18,
    backgroundColor: '#1554A8',
    borderRadius: 14,
    padding: 14,
  },
  drrftfishnguiddeplaceCardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10,
  },
  drrftfishnguiddeplaceTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Akatab-SemiBold',
  },
  drrftfishnguiddecoordsText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Akatab-Regular',
    marginTop: -6,
  },
  drrftfishnguiddeplaceThumb: {
    marginTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
    height: 170,
  },
  drrftfishnguiddeplaceThumbImg: {
    width: '100%',
    height: '100%',
  },
  drrftfishnguiddesmallIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#FF8A3D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  drrftfishnguiddedetailsCard: {
    marginTop: 26,
    backgroundColor: '#1554A8',
    borderRadius: 16,
    padding: 14,
  },
  drrftfishnguiddedetailsHero: {
    borderRadius: 12,
    overflow: 'hidden',
    height: 160,
    backgroundColor: '#0B2D5A',
    position: 'relative',
  },
  drrftfishnguiddedetailsHeroImg: {
    width: '100%',
    height: '100%',
  },
  drrftfishnguiddedetailsSaveBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#FF8A3D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drrftfishnguiddedetailsSaveBtnActive: {
    backgroundColor: '#00B2FF',
  },
  drrftfishnguiddedetailsTitle: {
    marginTop: 12,
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Akatab-SemiBold',
    marginBottom: 10,
  },
  drrftfishnguiddedetailsLabel: {
    marginTop: 10,
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Akatab-SemiBold',
  },
  drrftfishnguiddedetailsText: {
    marginTop: 4,
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Akatab-SemiBold',
    opacity: 0.95,
  },
  drrftfishnguiddedetailsActionsRow: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 12,
  },
  drrftfishnguiddeactionBtn: {
    backgroundColor: '#FF8A3D',
    borderRadius: 5,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  drrftfishnguiddeactionBtnPrimary: {
    backgroundColor: '#FF8A3D',
    minWidth: 120,
  },
  drrftfishnguiddeactionBtnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Akatab-Black',
  },
});
