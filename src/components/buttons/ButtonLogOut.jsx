import {
    TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function ButtonLogOut() {
    
    const navigation = useNavigation()

    function onLogout() { 
        navigation.navigate('LoginScreen')
    };

    return (
        <TouchableOpacity onPress={onLogout}>
            <Feather name="log-out" size={24} color='#BDBDBD'/>
        </TouchableOpacity>
    );
};

export default ButtonLogOut;
