import {
    Image,
    TouchableOpacity,
} from 'react-native';
import delAvatar from '../../images/del.jpg';


function ButtonDelAvatar() { 
        
    function onDelAvatar() { 
        console.log('клик будет удалять аватарку')
    };

    return (
        <TouchableOpacity
            style={{ overflow: 'hidden', borderRadius: 100 }}
            onPress={onDelAvatar}>
            <Image
                style={{ width: 25, height: 25}}
                source={delAvatar}
            />
        </TouchableOpacity>
    );
};

export default ButtonDelAvatar;