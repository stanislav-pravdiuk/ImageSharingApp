import {
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function ButtonBack() {

    const navigation = useNavigation();
    
    function onLogout() { 
        navigation.goBack();
    };

    return (
        <TouchableOpacity onPress={onLogout}>
            <Ionicons name="arrow-back" size={24} color="#212121CC" />
        </TouchableOpacity>
    );
};

export default ButtonBack;
