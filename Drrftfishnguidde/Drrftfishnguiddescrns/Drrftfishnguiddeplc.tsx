import {
  DRRFTFISHNGUIDDE_SAVED_KEY,
  type DrrftfishnguiddeCategory,
  drrftfishnguiddeCategoryBtnLabel,
  drrftfishnguiddeCategoryLabel,
  drrftfishnguiddeCoordsText,
  type DrrftfishnguiddePlace,
  drrftfishnguiddePlaces,
} from '../Drrftfishnguiddecompn/Drrftfishnguiddedata';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useMemo, useState} from 'react';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  Image,
  Pressable,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Drrftfishnguiddelay from '../Drrftfishnguiddecompn/Drrftfishnguiddelay';

const Drrftfishnguiddeplc = () => {
  const drrftfishnguiddeNavigation = useNavigation();
  const [drrftfishnguiddeCategory, setDrrftfishnguiddeCategory] =
    useState<DrrftfishnguiddeCategory>('glaciers');
  const [drrftfishnguiddeSelectedPlace, setDrrftfishnguiddeSelectedPlace] =
    useState<DrrftfishnguiddePlace | null>(null);
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

  const drrftfishnguiddeFilteredPlaces = useMemo(() => {
    return drrftfishnguiddePlaces.filter(
      p => p.category === drrftfishnguiddeCategory,
    );
  }, [drrftfishnguiddeCategory]);

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

  const drrftfishnguiddeBack = () => {
    if (drrftfishnguiddeSelectedPlace) {
      setDrrftfishnguiddeSelectedPlace(null);
    }
  };

  const drrftfishnguiddeHeaderTitle = drrftfishnguiddeSelectedPlace
    ? `CATEGORY: ${
        drrftfishnguiddeCategoryLabel[drrftfishnguiddeSelectedPlace.category]
      }`
    : 'PLACES';

  return (
    <Drrftfishnguiddelay>
      <View style={styles.drrftfishnguiddecontainer}>
        <View style={styles.drrftfishnguiddetitleBar}>
          {drrftfishnguiddeSelectedPlace && (
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

        {!drrftfishnguiddeSelectedPlace && (
          <View style={styles.drrftfishnguiddeassistantCard}>
            <Image
              source={require('../../assets/i/drrftfishnguidplace.png')}
              style={styles.drrftfishnguiddeassistantImg}
              resizeMode="contain"
            />
            <View style={styles.drrftfishnguiddeassistantTextCol}>
              <Text style={styles.drrftfishnguiddeassistantName}>William:</Text>
              <Text style={styles.drrftfishnguiddeassistantText}>
                Here are some great fishing spots. Choose a category and start
                exploring.
              </Text>
            </View>
          </View>
        )}

        {!drrftfishnguiddeSelectedPlace && (
          <>
            <View style={styles.drrftfishnguiddesectionTitlePill}>
              <Text style={styles.drrftfishnguiddesectionTitleText}>
                Categories:
              </Text>
            </View>
            <View style={styles.drrftfishnguiddecategoriesRow}>
              {(['glaciers', 'fishing', 'atmospheric'] as const).map(
                drrftfishnguiddeCat => {
                  const drrftfishnguiddeActive =
                    drrftfishnguiddeCategory === drrftfishnguiddeCat;
                  return (
                    <Pressable
                      key={drrftfishnguiddeCat}
                      onPress={() =>
                        setDrrftfishnguiddeCategory(drrftfishnguiddeCat)
                      }
                      style={[
                        styles.drrftfishnguiddecategoryBtn,
                        drrftfishnguiddeActive &&
                          styles.drrftfishnguiddecategoryBtnActive,
                      ]}>
                      <Text style={styles.drrftfishnguiddecategoryBtnText}>
                        {drrftfishnguiddeCategoryBtnLabel[drrftfishnguiddeCat]}
                      </Text>
                    </Pressable>
                  );
                },
              )}
            </View>

            {drrftfishnguiddeFilteredPlaces.map(drrftfishnguiddePlaceItem => (
              <View
                key={drrftfishnguiddePlaceItem.id}
                style={styles.drrftfishnguiddeplaceCard}>
                <View style={styles.drrftfishnguiddeplaceCardHeader}>
                  <Text style={styles.drrftfishnguiddeplaceTitle}>
                    {drrftfishnguiddePlaceItem.title}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      setDrrftfishnguiddeSelectedPlace(
                        drrftfishnguiddePlaceItem,
                      )
                    }
                    hitSlop={8}
                    style={[
                      styles.drrftfishnguiddesmallIconBtn,
                      drrftfishnguiddeIsSaved(drrftfishnguiddePlaceItem.id) &&
                        styles.drrftfishnguiddesmallIconBtnActive,
                    ]}>
                    <Image
                      source={require('../../assets/i/drrftfishnguiddeopen.png')}
                    />
                  </TouchableOpacity>
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
            ))}
          </>
        )}

        {drrftfishnguiddeSelectedPlace && (
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
                onPress={() => {
                  if (!drrftfishnguiddeSelectedPlace) {
                    return;
                  }
                  (drrftfishnguiddeNavigation as any).navigate(
                    'Drrftfishnguiddemap',
                    {drrftfishnguiddePlaceId: drrftfishnguiddeSelectedPlace.id},
                  );
                }}
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

const styles = StyleSheet.create({
  drrftfishnguiddetitleBar: {
    backgroundColor: '#1554A8',
    borderRadius: 15,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  drrftfishnguiddetitleText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Akatab-Black',
  },
  drrftfishnguiddecontainer: {
    flex: 1,
    paddingTop: 65,
    paddingHorizontal: 16,
    paddingBottom: 120,
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
  drrftfishnguiddebackBtnText: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 28,
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
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Akatab-Regular',
  },

  drrftfishnguiddesectionTitlePill: {
    marginTop: 24,
    alignSelf: 'flex-start',
    backgroundColor: '#1554A8',
    borderRadius: 15,
    height: 40,
    paddingHorizontal: 16,
    minWidth: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drrftfishnguiddesectionTitleText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Akatab-Black',
  },

  drrftfishnguiddecategoriesRow: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  drrftfishnguiddecategoryBtn: {
    backgroundColor: '#FF8A3D',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    opacity: 0.65,
  },
  drrftfishnguiddecategoryBtnActive: {
    backgroundColor: '#E6772D',
    opacity: 1,
  },
  drrftfishnguiddecategoryBtnText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Akatab-Bold',
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
  drrftfishnguiddesmallIconBtnActive: {
    backgroundColor: '#FF8A3D',
  },
  drrftfishnguiddesmallIconBtnText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 18,
    fontFamily: 'Akatab-Black',
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
  drrftfishnguiddedetailsSaveBtnText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
    fontFamily: 'Akatab-Black',
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
  },
  drrftfishnguiddeactionBtnPrimary: {
    backgroundColor: '#FF8A3D',
    width: 86,
  },
  drrftfishnguiddeactionBtnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Akatab-Black',
  },
});

export default Drrftfishnguiddeplc;
