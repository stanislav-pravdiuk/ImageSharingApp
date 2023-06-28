import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

function Camera() {
    return (
        <View style={styles.iconContainer}>
            <AntDesign name="camera" size={24} color="#BDBDBD" />
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF4D',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Camera;