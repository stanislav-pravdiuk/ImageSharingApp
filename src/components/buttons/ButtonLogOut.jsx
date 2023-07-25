import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { authSignOutUser } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

function ButtonLogOut() {
    
    const navigation = useNavigation()
    const dispatch = useDispatch();

    function onLogout() { 
        dispatch(authSignOutUser())
        navigation.navigate('LoginScreen')
    };

    return (
        <TouchableOpacity onPress={onLogout}>
            <Feather name="log-out" size={24} color='#BDBDBD'/>
        </TouchableOpacity>
    );
};

export default ButtonLogOut;
