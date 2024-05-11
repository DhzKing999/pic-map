import { useEffect } from 'react'; // Import useMemo
import { Image, StyleSheet, View } from 'react-native';

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import ModalComponent from '~/components/Modal';
import { useLocationStore, useModalStore } from '~/store/store';

export default function Home()
{

  const setCoordiantes = useLocationStore().setCoords
  const openModel = useModalStore().onOpen
  const location = useLocationStore((state) => state.coords)

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
          <Marker
            onPress={() => openModel()}
            className='p-2 border-2 border-black'
            coordinate={{ latitude: location?.coords.latitude, longitude: location?.coords.longitude }}
          >
            <ModalComponent url='https://res.cloudinary.com/dzsl2h59g/image/upload/v1714223392/image_gtla0u.jpg'>
              <View className=' border-2 border-white'>
                <Image
                  className='border-white border-[2px] -rotate-3'
                  source={{
                    uri: 'https://res.cloudinary.com/dzsl2h59g/image/upload/v1714223392/image_gtla0u.jpg',
                  }} style={{ height: 35, width: 35 }} />
              </View>
            </ModalComponent>

          </Marker>
        </MapView>}

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
