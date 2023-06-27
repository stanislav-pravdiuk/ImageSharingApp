import {
    Image,
    TouchableOpacity,
} from 'react-native';
import logOut from '../../images/logOut.jpg';

function ButtonLogOut() {
    
    function onLogout() { 
        console.log('клик будет делать logout')
    };

    return (
        <TouchableOpacity onPress={onLogout}>
            <Image
                source={logOut}
            />
        </TouchableOpacity>
    );
};

export default ButtonLogOut;
