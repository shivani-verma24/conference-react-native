import { View, Text, Button, StatusBar, Pressable, Image } from "react-native"
import React from "react"
import styles from "../styles/sharedStyles"
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import TouchableOpacity from "react-native-gesture-handler";

function Home ({navigation}) {
    return (
        <>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            styles={styles.scrollView}>
            <Image style={styles.image} source={require('../../images/hero_image.png')}/> 
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>
                        Housing Tech Conference
                    </Text>
                    <Text style={styles.sectionDescription}>
                        Taking tech to the globe
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Pressable onPress={()=> 
                    navigation.navigate('Conference', {name: 'Conference'})
                    }>
                        <Text style={styles.sectionTitle}>Conference</Text>
                    </Pressable>
                    <Text style={styles.sectionDescription}>
                        View Conference Sessions and Speakers
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Pressable onPress={()=> 
                    navigation.navigate('Story', {name: 'Story'})
                    }>
                        <Text style={styles.sectionTitle}>Story</Text>
                    </Pressable>
                    <Text style={styles.sectionDescription}>
                        Learn more about us
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Submit sessions</Text>
                    <Text style={styles.sectionDescription}>
                        Are you interested in speaking? Submit a session!
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Feedback</Text>
                    <Text style={styles.sectionDescription}>
                        We would love to hear from you
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Learn more</Text>
                    <Text style={styles.sectionDescription}>
                        Read the docs to discover what to do next:
                    </Text>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.footer}>
                        <Image
                        style={{
                            width: 300,
                            height: 70,
                            resizeMode: 'stretch',
                            position: 'relative',
                        }}
                        source={require('../../images/pluralsight-white.png')}
                        />
                    </View>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
        </>
        )
} 
export default Home;


// {/* 
  
//         <View>
//              <Button title='Go to Speaker'
//             onPress={(e)=>{
//                 navigation.navigate('Speaker')
//             }}/>

//             <Button title='Go to Session'
//             onPress={(e)=>{
//                 navigation.navigate('Session')
//             }}/>

//             <Button title='Go to Conference'
//             onPress={(e)=>{
//                 navigation.navigate('Conference')
//             }}/>

//             <Button title='Go to Story'
//             onPress={(e)=>{
//                 navigation.navigate('Story')
//             }}/>
//         </View> */}

    
