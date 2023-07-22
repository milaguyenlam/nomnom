import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { RefObject, useState } from 'react'
import Swiper from 'react-native-deck-swiper'
import { collection, DocumentData, getDocs, limit, query } from 'firebase/firestore'
import { db, storage } from '../config/firebase'
import { getDownloadURL, ref } from '@firebase/storage'
import { useQuery } from '@tanstack/react-query'

interface Props {
  swiperRef: RefObject<Swiper<DocumentData>>,
}

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

  const position = await getDeviceLocation();
  const deviceLatitude: number = position.coords.latitude;
  const deviceLongitude: number = position.coords.longitude;

  const q = query(collection(db, 'eateries'), limit(numberOfEateries));
  const querySnapshot = await getDocs(q);

  const newData: DocumentData[] = [];

  await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const data = doc.data();

      // Fetch image URLs for each post and wait for all the promises to resolve
      const imagesFromStorage: string[] = await Promise.all(
        data.posts.map(async ({ image_url }: { image_url: string }) => {
          const imageUrl = await getDownloadURL(ref(storage, image_url));
          return imageUrl;
        })
      );

      const distance = calculateDistance(deviceLatitude, deviceLongitude, data.location.latitude, data.location.longitude);

      newData.push({ ...data, posts: imagesFromStorage, distance: distance });
    })
  );

  return newData;
}

export default function NextEaterySwiper({ swiperRef } : Props) {
  const [currentEateryIndex, setCurrentEateryIndex] = useState<number>(0);
  const eateriesQuery = useQuery({
    queryKey: ['eateries'],
    queryFn: () => wait(1000).then(res => getEateries(2)),
    staleTime: 6 * 60 * 60 * 1000, // should be 6 hour
    refetchOnWindowFocus: false,
  });

  const onSwipedLeft = () => {
    console.log("Current eatery index ", currentEateryIndex);
    setCurrentEateryIndex(currentEateryIndex + 1);
  }

  if(eateriesQuery.isLoading) return <Text>Loading...</Text>

  if(eateriesQuery.data === undefined) return null;

  return (
    <View style={styles.swiperWrapper}>
      <Swiper
        ref={swiperRef}
        cards={eateriesQuery.data!}
        cardIndex={currentEateryIndex}
        renderCard={(eatery: DocumentData) => <Text>Hi</Text>}
        backgroundColor={'transparent'}
        onSwipedLeft={onSwipedLeft}
        containerStyle={{
          height: Dimensions.get('window').height * 0.6
        }}
        cardVerticalMargin={0}
        cardHorizontalMargin={0}
        cardStyle={{
          width: '100%',
          height: '100%',
        }}
        verticalSwipe={false}
        horizontalSwipe={false}
      />
    </View>  
  )
}

const styles = StyleSheet.create({
  swiperWrapper: {
    height: Dimensions.get('window').height * 0.6,
  },
});