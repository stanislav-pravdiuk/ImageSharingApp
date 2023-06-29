import { Feather } from '@expo/vector-icons';
import { View } from "react-native";

function IconUserAlt() {

    return (
        <View
            style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#FF6C00',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Feather name="user" size={24} color="white" />
        </View>
        
    );
};

export default IconUserAlt;