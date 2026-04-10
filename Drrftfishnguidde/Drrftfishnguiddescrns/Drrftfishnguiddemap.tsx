import MapView, {Marker, PROVIDER_GOOGLE, type Region} from 'react-native-maps';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {
  Image,
  Platform,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Drrftfishnguiddelay from '../Drrftfishnguiddecompn/Drrftfishnguiddelay';
import {
  DRRFTFISHNGUIDDE_SAVED_KEY,
  drrftfishnguiddeCoordsText,
  type DrrftfishnguiddePlace,
  drrftfishnguiddePlaces,
} from '../Drrftfishnguiddecompn/Drrftfishnguiddedata';

const drrftfishnguiddeInitialRegion: Region = {
  latitude: 55,
  longitude: 20,
  latitudeDelta: 15,
  longitudeDelta: 15,
};

type DrrftfishnguiddeMapRouteParams = {
  drrftfishnguiddePlaceId?: string;
};

const Drrftfishnguiddemap = () => {
  const drrftfishnguiddeRoute = useRoute();
  const [drrftfishnguiddeSelectedPlace, setDrrftfishnguiddeSelectedPlace] =
    useState<DrrftfishnguiddePlace | null>(null);
  const [drrftfishnguiddeDetailsOpen, setDrrftfishnguiddeDetailsOpen] =
    useState(false);
  const [drrftfishnguiddeSavedIds, setDrrftfishnguiddeSavedIds] = useState<
    string[]
  >([]);

  useEffect(() => {
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
  }, []);

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
      console.log('error');
    }
  };

  useFocusEffect(
    useCallback(() => {
      setDrrftfishnguiddeSelectedPlace(null);
      setDrrftfishnguiddeDetailsOpen(false);
    }, []),
  );

  const drrftfishnguiddeSharePlace = async (place: DrrftfishnguiddePlace) => {
    try {
      await Share.share({
        message: `${place.title}\nCoordinates: ${drrftfishnguiddeCoordsText(
          place.coordinates,
        )}\n\n${place.description}`,
      });
    } catch {
      console.log('error');
    }
  };

  const drrftfishnguiddeBack = () => {
    if (drrftfishnguiddeDetailsOpen) {
      setDrrftfishnguiddeDetailsOpen(false);
      return;
    }
    setDrrftfishnguiddeSelectedPlace(null);
  };

  const drrftfishnguiddePlacesForMap = useMemo(() => {
    return drrftfishnguiddePlaces;
  }, []);

  useEffect(() => {
    const drrftfishnguiddeParams = (drrftfishnguiddeRoute as any)?.params as
      | DrrftfishnguiddeMapRouteParams
      | undefined;
    const drrftfishnguiddePlaceId =
      drrftfishnguiddeParams?.drrftfishnguiddePlaceId;
    if (!drrftfishnguiddePlaceId) {
      return;
    }
    const drrftfishnguiddeFound = drrftfishnguiddePlaces.find(
      p => p.id === drrftfishnguiddePlaceId,
    );
    if (drrftfishnguiddeFound) {
      setDrrftfishnguiddeSelectedPlace(drrftfishnguiddeFound);
    }
  }, [drrftfishnguiddeRoute]);

  return (
    <Drrftfishnguiddelay>
      <View style={styles.drrftfishnguiddecontainer}>
        <View style={styles.drrftfishnguiddetitleBar}>
          {(drrftfishnguiddeDetailsOpen || drrftfishnguiddeSelectedPlace) && (
            <Pressable
              onPress={drrftfishnguiddeBack}
              style={styles.drrftfishnguiddebackBtn}
              hitSlop={10}>
              <Image
                source={require('../../assets/i/drrftfishnguiddback.png')}
                style={styles.drrftfishnguiddebackIcon}
              />
            </Pressable>
          )}
          <Text style={styles.drrftfishnguiddetitleText}>INTERACTIVE MAP</Text>
        </View>

        {!drrftfishnguiddeDetailsOpen && (
          <>
            {!drrftfishnguiddeSelectedPlace && (
              <View style={styles.drrftfishnguiddeassistantCard}>
                <Image
                  source={require('../../assets/i/drrftfishnguidplace.png')}
                  style={styles.drrftfishnguiddeassistantImg}
                  resizeMode="contain"
                />
                <View style={styles.drrftfishnguiddeassistantTextCol}>
                  <Text style={styles.drrftfishnguiddeassistantName}>
                    William:
                  </Text>
                  <Text style={styles.drrftfishnguiddeassistantText}>
                    I’ve marked the best spots on the map. Tap any location to
                    explore.
                  </Text>
                </View>
              </View>
            )}

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

            <View style={styles.drrftfishnguiddemapWrap}>
              <MapView
                style={styles.drrftfishnguiddemap}
                provider={
                  Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined
                }
                initialRegion={drrftfishnguiddeInitialRegion}>
                {drrftfishnguiddePlacesForMap.map(drrftfishnguiddePlaceItem => (
                  <Marker
                    key={drrftfishnguiddePlaceItem.id}
                    coordinate={{
                      latitude: drrftfishnguiddePlaceItem.coordinates.lat,
                      longitude: drrftfishnguiddePlaceItem.coordinates.lng,
                    }}
                    title={drrftfishnguiddePlaceItem.title}
                    description={`Coordinates: ${drrftfishnguiddeCoordsText(
                      drrftfishnguiddePlaceItem.coordinates,
                    )}`}
                    onPress={() =>
                      setDrrftfishnguiddeSelectedPlace(
                        drrftfishnguiddePlaceItem,
                      )
                    }>
                    <Image
                      source={require('../../assets/i/drrftfishnguidpin.png')}
                    />
                  </Marker>
                ))}
              </MapView>
            </View>
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

export default Drrftfishnguiddemap;

const styles = StyleSheet.create({
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
  drrftfishnguiddecontainer: {
    flex: 1,
    paddingTop: 65,
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  drrftfishnguiddetitleBar: {
    backgroundColor: '#1554A8',
    borderRadius: 15,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  drrftfishnguiddebackIcon: {width: 24, height: 24},

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
    width: '90%',
    fontFamily: 'Akatab-Regular',
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

  drrftfishnguiddemapWrap: {
    marginTop: 18,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 8,
    borderColor: '#1554A8',
    backgroundColor: '#1554A8',
  },
  drrftfishnguiddemap: {
    width: '100%',
    height: 360,
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
