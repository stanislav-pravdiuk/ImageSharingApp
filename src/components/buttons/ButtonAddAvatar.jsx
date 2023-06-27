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
                <TouchableOpacity onPress={onAddAvatar}>
                    <Image
                        source={addAvatar}
                    />
                </TouchableOpacity>
    );
};

export default ButtonAddAvatar;