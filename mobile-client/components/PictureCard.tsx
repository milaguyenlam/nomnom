import { StyleSheet, ImageBackground, Dimensions } from 'react-native';
import RestaurantInfo from './RestaurantInfo';
import UpperSection from './UpperSection';
import { app, db } from '../config/firebase';
import { collection, getDocs, DocumentData } from 'firebase/firestore';

interface Props {
    post: string | undefined,
    index: number,
    eatery: DocumentData,
}

export default function PictureCard({ post, index, eatery } : Props) {
    if(post === undefined) return null;

    return (
        <ImageBackground source={{ uri: post }} resizeMode='cover' style={styles.picCardImage} imageStyle={{ borderRadius: 10 }}>
            <UpperSection numberOfImages={eatery.posts.length} index={index} distance={eatery.distance}/>
            <RestaurantInfo eatery={eatery}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    picCardImage: {
        height: Dimensions.get('window').height * 0.6,
        justifyContent: 'space-between',
        // paddingTop: 15,
        // paddingLeft: 10,
        // paddingRight: 10,
        // paddingBottom: 20,
    },
});