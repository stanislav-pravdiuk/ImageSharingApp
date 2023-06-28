import {
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function ButtonAddAvatar() {
        
    function onAddAvatar() {
        console.log('этот клик должен добавлять фото' )
    };

    return (
        <TouchableOpacity
            style={{ overflow: 'hidden', borderRadius: 100}}
            onPress={onAddAvatar}>
            <Ionicons name="ios-add-circle-outline" size={25} color="#FF6C00" />
        </TouchableOpacity>
    );
};

export default ButtonAddAvatar;