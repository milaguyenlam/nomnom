import { StyleSheet, View } from 'react-native';
import DistanceText from './DistanceText';
import PictureIndicator from './PictureIndicator';
import SocialMedia from './SocialMedia';

export default function UpperSection() {
    return (
        <View>
            <PictureIndicator />
            <DistanceText />
            <SocialMedia />
        </View>
    );
}

const styles = StyleSheet.create({

});