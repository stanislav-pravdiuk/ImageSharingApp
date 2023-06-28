import {
    TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

function ButtonLogOut() {
    
    function onLogout() { 
        console.log('клик будет делать logout')
    };

    return (
        <TouchableOpacity onPress={onLogout}>
            <Feather name="log-out" size={24} color='#BDBDBD'/>
        </TouchableOpacity>
    );
};

export default ButtonLogOut;
