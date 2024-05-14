import { useCallback, useEffect, useState } from 'react'; // Import useMemo
import { Image, StyleSheet, View } from 'react-native';

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import { useBottomSheetStore, useLocationStore, useModalStore, useSelectedImageStore } from '~/store/store';
import { useImageGet } from '~/hooks/image';
import { ImageType } from '~/types';
import ModalComponent from '~/components/Modal';
import { useModalControls } from '~/hooks/pop-image';

export default function Home()
{

  const setCoordiantes = useLocationStore().setCoords
  const location = useLocationStore((state) => state.coords)
  const { data, isLoading, isError } = useImageGet()
  const { selectedImage, setSelectedImage } = useSelectedImageStore()
  useEffect(() =>
  {
    (async () =>
    {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted')
      {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCoordiantes(location)
    })();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {location && <MapView
          initialRegion={{
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={styles.map} >
          {data && data?.map((m: ImageType) => (
            <Marker
              onPress={() => { setSelectedImage(m) }}
              key={m._id}
              className='p-2 border-2 border-black '
              coordinate={{ latitude: Number(m?.latitude), longitude: Number(m?.longitude) }}
            >
              <View className=' border-2 border-white'>
                <Image

                  className='border-white border-[2px] -rotate-3'
                  source={{
                    uri: m.url,
                  }} style={{ height: 35, width: 35 }} />
              </View>
            </Marker>
          ))}
        </MapView>}
        {selectedImage && <ModalComponent />}

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
