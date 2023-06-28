import {
    Image,
    TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';


function ButtonDelAvatar() { 
        
    function onDelAvatar() { 
        console.log('клик будет удалять аватарку')
    };

    return (
        <TouchableOpacity
            style={{ overflow: 'hidden', borderRadius: 100, backgroundColor: 'white'}}
            onPress={onDelAvatar}>
            <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
        </TouchableOpacity>
    );
};

export default ButtonDelAvatar;