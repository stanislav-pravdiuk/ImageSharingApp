import {
    View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function ButtonAddAvatar() {

    return (
        <View
            style={{ overflow: 'hidden', borderRadius: 100}}>
            <Ionicons name="ios-add-circle-outline" size={25} color="#FF6C00" />
        </View>
    );
};

export default ButtonAddAvatar;