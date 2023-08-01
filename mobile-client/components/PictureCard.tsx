import { StyleSheet, ImageBackground, Dimensions, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import RestaurantInfo from './RestaurantInfo';
import UpperSection from './UpperSection';
import { app, db } from '../config/firebase';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { useState } from 'react';

interface Props {
    eatery: DocumentData,
}

export default function PictureCard({ eatery } : Props) {
    const [postIndex, setPostIndex] = useState<number>(0);

    const displayPost = (direction: string, numberOfPosts: number) => {
        if(direction === 'left') {
            if(postIndex - 1 < 0) {
                setPostIndex(numberOfPosts - 1);
            } else {
                setPostIndex(postIndex - 1);
            }
        } else {
            if(postIndex + 1 >= numberOfPosts) {
                setPostIndex(0);
            } else {
                setPostIndex(postIndex + 1);
            }
        }
    }

    const numberOfPosts: number = eatery.posts.length;

    return (
        <ImageBackground source={{ uri: eatery.posts[postIndex] }} resizeMode='cover' style={styles.picCardImage} imageStyle={{ borderRadius: 10 }}>
            <TouchableWithoutFeedback onPress={() => displayPost('left', numberOfPosts)}>
                <View style={styles.touchableLeftArea}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => displayPost('right', numberOfPosts)}>
                <View style={styles.touchableRightArea}></View>
            </TouchableWithoutFeedback>
            <UpperSection numberOfImages={eatery.posts.length} postIndex={postIndex} distance={eatery.distance}/>
            <RestaurantInfo eatery={eatery}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    picCardImage: {
        height: Dimensions.get('window').height * 0.6,
        justifyContent: 'space-between',
    },
    touchableLeftArea: {
        position: 'absolute',
        zIndex: 10,
        width: '50%',
        height: '65%',
    },
    touchableRightArea: {
        position: 'absolute',
        right: 0,
        zIndex: 10,
        width: '50%',
        height: '65%',
    },
});