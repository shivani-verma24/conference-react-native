import { View, Text, Button, Image, Pressable } from "react-native"
import React from "react"
import styles from "../styles/sharedStyles"
import { ScrollView } from "react-native-gesture-handler"

function Conference({ navigation }) {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            styles={styles.scrollView}>

            <Image style={styles.storyImage}
                source={require('../../images/Bitmap.png')}
            />
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitleStory}>
                        Globomantics Conference
                    </Text>
                    <Text style={styles.sectionDescriptionStory}>
                        Join us along with awesome speakers and great content from around the Globe!
                    </Text>

                    <View style={styles.buttonWrapper}>

                        <Pressable onPress={() =>
                            navigation.navigate('Session', { name: 'Session' })
                        }
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>Session</Text>
                        </Pressable>

                        <Pressable onPress={() =>
                            navigation.navigate('Speaker', { name: 'Speaker' })
                        }
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>Speaker</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default Conference;


{/* <View>
<Text>Welcome to the conference</Text>
<Button title='Go to Home'
onPress={(e)=>{
    navigation.navigate('Home')
}}/>
</View> */}