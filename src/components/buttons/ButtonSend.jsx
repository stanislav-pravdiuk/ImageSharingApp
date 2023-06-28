import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

function ButtonSend() {

    function onSend() { 
        console.log('клик будет оправлять коммент')
    };
    
    return (
        <TouchableOpacity
            onPress={onSend}
            style={styles.iconContainer}>
            <AntDesign name="arrowup" size={24} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 34,
        height: 34,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ButtonSend;