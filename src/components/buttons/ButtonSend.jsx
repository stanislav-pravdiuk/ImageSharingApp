import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

function ButtonSend() {
    
    return (
        <View
            style={styles.iconContainer}>
            <AntDesign name="arrowup" size={24} color="white"/>
        </View>
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