import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Swiper from 'react-native-deck-swiper';
import { useQuery } from '@tanstack/react-query'
import { collection, getDocs, query, limit, where, QuerySnapshot, DocumentData, endAt, orderBy } from 'firebase/firestore';
import { db, storage } from '../config/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { RefObject } from 'react';

import PictureCard from './PictureCard';

interface Props {
  swiperRef: RefObject<Swiper<string>>
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

export default function DeckSwiper({ swiperRef } : Props) {  
  const [index, setIndex] = useState<number>(0);
  const eateriesQuery = useQuery({
    queryKey: ['eateries'],
    queryFn: () => wait(1000).then(res => getEateries(2)),
    staleTime: 6 * 60 * 60 * 1000, // should be 6 hour
    refetchOnWindowFocus: false,
  });

  if(eateriesQuery.isLoading) return <Text>Loading...</Text>

  if(eateriesQuery.data === undefined) return null;

  const onSwiped = (direction: string, numberOfImages: number) => {
    if(direction === 'right') {
      if((index - 1) < 0) {
        setIndex(numberOfImages - 1);
      } else {
        setIndex(index - 1);
      }
    } else {
      if((index + 1) >= numberOfImages) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  }

  const numberOfImages: number = eateriesQuery.data[0].posts.length;

  console.log(eateriesQuery.data);

  return (
        <View style={styles.swiperWrapper}>
          <Swiper
            ref={swiperRef}
            cards={eateriesQuery.data[0].posts}
            cardIndex={index}
            renderCard={(img: string) => <PictureCard post={img} numberOfImages={numberOfImages} index={index} distance={eateriesQuery.data[0].distance}/>}
            onSwipedRight={() => onSwiped('right', numberOfImages)}
            goBackToPreviousCardOnSwipeRight={true}
            onSwipedLeft={() => onSwiped('left', numberOfImages)}
            backgroundColor={'transparent'}
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
            infinite={true}
          />
        </View>   
  )
}

const styles = StyleSheet.create({
    swiperWrapper: {
      height: Dimensions.get('window').height * 0.6,
    },
});