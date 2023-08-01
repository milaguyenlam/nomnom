import { StyleSheet, View } from 'react-native';
import DistanceText from './DistanceText';
import PictureIndicator from './PictureIndicator';
import SocialMedia from './SocialMedia';

interface Props {
    numberOfImages: number,
    postIndex: number,
    distance: number,
}

export default function UpperSection({ numberOfImages, postIndex, distance } : Props) {
    return (
        <View>
            <PictureIndicator numberOfImages={numberOfImages} postIndex={postIndex}/>
            <DistanceText distance={distance}/>
            <SocialMedia />
        </View>
    );
}

const styles = StyleSheet.create({

});