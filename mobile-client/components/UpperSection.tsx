import { StyleSheet, View } from 'react-native';
import DistanceText from './DistanceText';
import PictureIndicator from './PictureIndicator';
import SocialMedia from './SocialMedia';

interface Props {
    numberOfImages: number,
    index: number,
    distance: number,
}

export default function UpperSection({ numberOfImages, index, distance } : Props) {
    return (
        <View>
            <PictureIndicator numberOfImages={numberOfImages} index={index}/>
            <DistanceText distance={distance}/>
            <SocialMedia />
        </View>
    );
}

const styles = StyleSheet.create({

});