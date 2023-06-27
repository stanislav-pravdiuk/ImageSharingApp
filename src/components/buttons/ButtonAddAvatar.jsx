import {
    Image,
    TouchableOpacity,
} from 'react-native';
import addAvatar from '../../images/add.jpg';

function ButtonAddAvatar() {
        
    function onAddAvatar() {
        console.log('этот клик должен добавлять фото' )
    };

    return (
        <TouchableOpacity
            style={{ overflow: 'hidden', borderRadius: 100 }}
            onPress={onAddAvatar}>
            <Image
                style={{ width: 25, height: 25}}
                source={addAvatar}
            />
        </TouchableOpacity>
    );
};

export default ButtonAddAvatar;