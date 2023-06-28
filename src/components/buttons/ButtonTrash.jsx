import { Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

function ButtonTrash() {

    function onDelete() { 
        console.log('клик будет отменять публикацию')
    };
    
    return (
        <TouchableOpacity
            onPress={onDelete}
            style={styles.iconContainer}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 70,
        height: 40,
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ButtonTrash;