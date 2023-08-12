import { getDownloadURL, ref } from '@firebase/storage';
import { useQuery } from '@tanstack/react-query';
import { collection, DocumentData, getDocs, limit, query } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import ActionButtons from '../../components/ActionButtons';
import DeckSwiper from '../../components/DeckSwiper';

import Header from '../../components/Header';
import LoadingScreen from '../../components/LoadingScreen';
import { db, storage } from '../../config/config';

const wait = (duration: number) => {
  return new Promise(resolve => setTimeout(resolve, duration));
}

const getDeviceLocation = () => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const degToRad = (degrees: number) => degrees * (Math.PI / 180);
  const earthRadius = 6371; // Radius of the earth in kilometers

  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
};

const getEateries = async (numberOfEateries: number) => {
  console.log("Getting eateries from firestore.");
  
  try {
    const position = await getDeviceLocation();
    const deviceLatitude: number = position.coords.latitude;
    const deviceLongitude: number = position.coords.longitude;

    const q = query(collection(db, 'eateries'), limit(numberOfEateries)); // Limit just for query cost
    const querySnapshot = await getDocs(q);

    const newData: DocumentData[] = [];

    await Promise.allSettled(
      querySnapshot.docs.map(async (doc) => {
        const data = doc.data();

        try {
          // Fetch image URLs for each post and wait for all the promises to resolve
          const imagesFromStorage: string[] = await Promise.all(
            data.posts.map(async ({ image_url }: { image_url: string }) => {
              const imageUrl = await getDownloadURL(ref(storage, image_url));
              return imageUrl;
            })
          );

          const distance = calculateDistance(deviceLatitude, deviceLongitude, data.location.latitude, data.location.longitude);

          newData.push({ ...data, posts: imagesFromStorage, distance: distance });
        } catch (error) {
          console.error('Error fetching image URLs:', error);
          throw new Error('Failed to fetch image URLs');
        }
      })
    );

    return newData.sort((a, b) => a.distance - b.distance);
  } catch (error) {
    console.error('Error fetching eateries:', error);
    throw new Error('Failed to fetch eateries');
  }
};

export default function HomeScreen() {
    const [currentEateryIndex, setCurrentEateryIndex] = useState<number>(0);
  const swiperRef = useRef<Swiper<DocumentData>>(null);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['eateries'],
    queryFn: () => wait(1000).then(res => getEateries(5).catch(err => console.log(err))),
    staleTime: 6 * 60 * 60 * 1000, // should be 6 hour
    refetchOnWindowFocus: false,
  });

  if(isLoading) return <LoadingScreen />

  if(isError) return <Text>{JSON.stringify(error)}</Text>

  if(data === undefined) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homePage}>
        <Header />
        {
          currentEateryIndex >= data.length ? 
            <Text>No more eateries</Text> 
          : 
            <>
              <DeckSwiper eateries={data} currentEateryIndex={currentEateryIndex} setCurrentEateryIndex={setCurrentEateryIndex} swiperRef={swiperRef}/>
              <ActionButtons swiperRef={swiperRef} eateryName={data[currentEateryIndex].name}/>
            </>
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homePage: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
});