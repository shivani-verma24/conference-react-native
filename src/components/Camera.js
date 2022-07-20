import { Alert, Button, StyleSheet, View } from "react-native";
import { RNCamera } from "react-native-camera";
import { useCamera } from "react-native-camera-hooks";
import RNFS, { moveFile } from 'react-native-fs'
import React from "react";

export default function Camera() {


    const [{ cameraRef }, { takePicture }] = useCamera(null);

    const captureHandle = async () => {


        try {
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.url;
            const newFilePath = RNFS.ExternalDirectoryPath + '/Mytest.jpg'
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED', filePath, '--to--', newFilePath)
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

//     const showButtonAlert = () => {
//         Alert.alert('Warning', 'Alert Message', [
//             {
//                 text: 'Ok',
//                 onPress: () => {
//                     console.log('OK pressed')
//                 }
//             },
//             {
//                 text: 'Cancel',
//                 onPress: () => {
//                     console.log('Cancel pressed')
//                 }
//             }
//         ])
//     }

//     return (
//         <View>
//             <Button title="Click me"
//                 onPress={e => { showButtonAlert() }}
//             />
//         </View>
//     );
// }

return (
    <View style={StyleSheet.body}>
        <RNCamera
            ref={cameraRef}
            type={RNCamera.Constants.Type.back}
            style={styles.preview}
        >
            <Button title="capture"
                style={styles.button}
                onPress={e => captureHandle()}
            />
        </RNCamera>
    </View>
)
}


const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    preview: {
        height:'100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        height: 50,
        width: 150,
        color: '#00ff00',
        margin: 10
    }
})