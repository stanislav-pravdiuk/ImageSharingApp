import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function ButtonDelAvatar() { 

    return (
        <View
            style={{ overflow: 'hidden', borderRadius: 100, backgroundColor: 'white'}}
        >
            <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
        </View>
    );
};

export default ButtonDelAvatar;