// import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
// import backGround from '../../assets/photoBG.jpg'

function RegistrationScreen() {
    return (
        <View style={styles.container}>
            {/* <View style={styles.avatar} /> */}
            <Text style={styles.registration}>Реєстрація</Text>
            <TextInput
                style={styles.inputLog}
                placeholder='Логін'
            />
            <TextInput
                style={styles.inputMail}
                placeholder='Адреса електронної пошти'
            />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    avatar: {
        position: 'absolute',
        width: 375,
        height: 549,
        left: 0,
        top: 263,

        background: "#FFFFFF",
        borderRadius: 25,
    },
    registration: {
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        height: 36,
        top: 355,
    },
    inputLog: {
        // position: 'absolute',
        width: 343,
        height: 50,
        background: '#F6F6F',
        // border: 1 solid '#E8E8E8,
        borderRadius: 8,
        top: 423,
    },
    inputMail: {
        // position: 'absolute',
        width: 343,
        height: 50,
        background: '#F6F6F',
        // border: 1
        borderRadius: 8,
        top: 489,
    },
});

export default RegistrationScreen;