import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Ionicons } from '@expo/vector-icons';
import IconCamera from "../icons/IconCamera";

function ComponentCamera() { 
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();

        setHasPermission(status === "granted");
    })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
        <Camera
            style={styles.camera}
            type={type}
            ref={setCameraRef}
        >
        <View style={styles.photoView}>
            <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();
                    await MediaLibrary.createAssetAsync(uri);
                }
            }}
            >
                <IconCamera/>
            </TouchableOpacity>
                    
            <TouchableOpacity
                style={styles.flipContainer}
                onPress={() => {
                setType(
                type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
            }}
            > 
            <Text>
                <Ionicons name="camera-reverse" size={24} color="white" />
            </Text>
            </TouchableOpacity>        
        </View>
        </Camera>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    camera: {
        flex: 1,
    },
    photoView: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },

    flipContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },

    button: {
        // borderWidth:1
    },
});


export default ComponentCamera;