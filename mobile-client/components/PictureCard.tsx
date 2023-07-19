import { StyleSheet, ImageBackground, Dimensions } from 'react-native';
import RestaurantInfo from './RestaurantInfo';
import UpperSection from './UpperSection';
import { app, db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';


const image = { uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80' };

export default function PictureCard() {

    console.log("hi");
    // getDocs(collection(db, 'eateries')).then((res) => {
    //     console.log(res);
    // }).catch((error) => {
    //     console.log(error);
    // });

    return (
        <ImageBackground source={image} resizeMode='cover' style={styles.picCardImage} imageStyle={{ borderRadius: 10 }}>
            <UpperSection />
            <RestaurantInfo />
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