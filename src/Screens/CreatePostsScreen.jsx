import {
    TextInput,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import MapPin from '../components/icons/IconMapPin';
import ButtonTrash from '../components/buttons/ButtonTrash';
import ComponentCamera from '../components/camera/ComponentCamera';
import { useEffect, useState } from 'react';
import * as Location from "expo-location";
import { useNavigation } from '@react-navigation/native';

function CreatePostsScreen() {
        
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [picTitle, setPicTitle] = useState('');
    const [locationTitle, setLocationTitle] = useState('');
    const [location, setLocation] = useState('');
    const [imgSource, setImgSource] = useState('')
    const navigation = useNavigation('');

    useEffect(() => { 
        setIsButtonDisabled(checkButtonDisabled())
    });

    function onPublik() {

        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
            }

        let location = await Location.getCurrentPositionAsync({});
        const coords = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };
        setLocation(coords);
        })();
        
        console.log(`
        name - ${picTitle},
        place - ${locationTitle},
        coords - ${location},
        image - ${imgSource}
        `);

        resetState()
        
        // navigation.navigate('PostsScreen');
    };

    function resetState() { 

        setPicTitle('');
        setImgSource('');
        setLocationTitle('');
        setLocation('');
        setIsButtonDisabled(true)
    };

    function checkButtonDisabled() {

        return picTitle === '' || locationTitle === '';
}

        return (
            <View style={styles.createPosts}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                    keyboardVerticalOffset={200}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}> 
                            <View style={styles.createPosts__form}>
                                <View style={styles.createPosts__download}>
                                    <View
                                        style={styles.createPosts__containerImg}>
                                        <ComponentCamera />
                                    </View>
                                    <Text style={styles.createPosts__downloadText}>Завантажте фото</Text>
                                </View>
                                <View style={styles.createPosts__titlePost}>
                                    <TextInput
                                    value={picTitle}
                                    onChangeText={setPicTitle}
                                    style={styles.createPosts__titleInput}
                                    placeholder='Назва...'
                                    placeholderTextColor='#BDBDBD'
                                    />
                                </View>
                                <View style={styles.createPosts__naviPost}>
                                    <MapPin />
                                    <TextInput
                                    value={locationTitle}
                                    onChangeText={setLocationTitle}
                                    style={styles.createPosts__naviInput}
                                    placeholder='Місцевість'
                                    placeholderTextColor='#BDBDBD'
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={onPublik}
                                    style={[
                                        styles.createPosts__btnPublic,
                                        { backgroundColor: isButtonDisabled ? '#F6F6F6' : '#FF6C00' }
                                    ]}
                                    disabled={isButtonDisabled}
                                >
                                    <Text
                                        style={[styles.createPosts__btnText,
                                        { color: isButtonDisabled ? '#BDBDBD' : 'white' }    
                                        ]}>Опублікувати</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={resetState}
                                style={styles.createPosts__tabBar}>
                                <ButtonTrash/>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        );
    };

    const styles = StyleSheet.create({
        createPosts: {
            height: '100%',
            width: '100%',
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        createPosts__container: {
            flexDirection: 'row',
            width: '100%',
            height: 88,
            alignItems: 'center',
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 0.5,
            justifyContent: 'space-between',
            paddingBottom: 11,
            paddingTop: 55,
        },
        createPosts__titleContainer: {
            flex: 1,
            alignItems: 'center',
            marginRight: 30,
        },
        createPosts__title: {
            fontWeight: '500',
            fontSize: 17,
            lineHeight: 22,
            color: '#212121',
        },
        createPosts__imageContainer: {
            marginLeft: 16,
        },
        createPosts__btn: {
            width: 24,
            height: 24,
        },
        createPosts__form: {
            top: -105,
            alignItems: 'center',
        },
        createPosts__download: {
            height: 267,
            width: 343,
        },
        createPosts__containerImg: {
            height: 240,
            width: '100%',
            borderRadius: 8,
            backgroundColor: '#E8E8E8',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },
        createPosts__img: {
            width: 343,
        },
        createPosts__downloadText: {
            marginTop: 8,
            fontSize: 16,
            color: '#BDBDBD',
        },
        createPosts__titlePost: {
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 0.5,
            marginTop: 32,
        },
        createPosts__titleInput: {
            width: 343,
            height: 50,
            fontSize: 16,
        },
            createPosts__naviPost: {
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 0.5,
            marginTop: 16,
            alignItems: 'center',
                flexDirection: 'row',
            width: 343,
        },
        createPosts__naviInput: {
            height: 50,
            fontSize: 16,
            paddingLeft: 6,
        },
        createPosts__btnPublic: {
            height: 51,
            // backgroundColor: isButtonDisabled ? '#F6F6F6' : '#FF0000',
            borderRadius: 100,
            marginTop: 32,
            width: 343,
            paddingTop: 16,
            paddingBottom: 16,
        },
        createPosts__btnText: {
            textAlign: 'center',
            fontSize: 16,
            color: '#BDBDBD',
        },
        createPosts__tabBar: {
            width: '100%',
            alignItems: 'center',
            paddingBottom: 34,
            position: 'absolute',
            bottom: 0,
        },
    });

    export default CreatePostsScreen;