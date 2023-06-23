import { View, Image } from 'react-native';
import photoBG from '../../images/photoBG.jpg'

function Background() {
    return (
        <View
            style={{
                flex: 1,
                position: 'absolute',
                height: '100%',
                width: '100%'
            }}>
            <Image
                source={photoBG}
                style={{width:'100%'}}
                resizeMode='cover'
            />
        </View>
    );
};

export default Background