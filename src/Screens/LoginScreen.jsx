import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,

} from 'react-native';
import delImg from '../images/del.jpg';
import Background from '../components/background/Background';
import { useState } from 'react';

function LoginScrin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    function onLogin() { 
        console.log(`this is state: 
        Email => ${email},
        Password => ${password}`);

        setEmail('');
        setPassword('');
        setPassword('');
    };

    function onView() {
        setShowPassword(!showPassword);
        console.log(`этот клик прячет или показывает пароль`)
    };

    function onRedirectToRegister() {
        console.log(`этот клик должен перенаправить на скрин регистрации`)
    };

    function onDelAvatar() {
        console.log(`этот клик должен удалять фото`)
    };

    return (
        <>  
            <Background/>    
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={-230}
            >                
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>                        
                    <View style={styles.log}>                    
                        <Image style={styles.log__avatar} />
                        <TouchableOpacity
                            onPress={onDelAvatar}
                        >
                            <Image source={delImg} style={styles.log__add} />
                        </TouchableOpacity>
                        
                        <Text style={styles.log__title}>Увійти</Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            style={styles.log__inputMail}
                            placeholder='Адреса електронної пошти'
                            placeholderTextColor='#BDBDBD'
                        />
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            style={styles.log__inputPass}
                            placeholder='Пароль'
                            placeholderTextColor='#BDBDBD'
                        />
                        <TouchableOpacity style={styles.log__viewLink}>
                            <Text
                                onPress={onView}
                                style={styles.log__viewLinkText}
                            >{showPassword
                                    ? 'Приховати'
                                    : 'Показати'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.log__btn}>
                            <Text
                                onPress={onLogin}
                                style={styles.log__btnText}>Увійти</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onRedirectToRegister}
                            style={styles.log__loginlink}>
                            <Text style={styles.log__linkText}>Немає акаунту? Зареєструватися</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    log: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: "#FFFFFF",
        marginTop: 323,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    log__avatar: {
        position: 'absolute',
        width: 120,
        height: 120,
        top: -60,
        backgroundColor: "#F6F6F6",
        borderRadius: 25,
    },
    log__add: {
        width: 25,
        height: 25,
        top: 21,
        left: 60,
        borderRadius: 100,
    },
    log__title: {
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        width: 160,
        height: 35,
        marginTop: 92,
        marginBottom: 33,
        textAlign: 'center',
    },
    log__inputLog: {
        width: 343,
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginBottom: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    log__inputMail: {
        width: 343,
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginBottom: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    log__inputPass: {
        width: 343,
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginBottom: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    log__viewLink: {
        marginTop: -50,
        marginLeft: 250,
    },
    log__viewLinkText: {
        fontSize: 16,
        textAlign: 'right',
        color: '#1B4371',
    },
    log__btn: {
        height: 51,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginTop: 43,
        width: 343,
        paddingTop: 16,
        paddingBottom: 16,
    },
    log__btnText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FFFFFF',
    },
    log__loginlink: {
        marginTop: 16,

    },
    log__linkText: {
        fontSize: 16,
        color: '#1B4371',
    }
});

export default LoginScrin;