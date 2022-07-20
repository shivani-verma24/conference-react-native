import { View, Text, Button } from "react-native"
import React from "react"

const Story= ({navigation})=>{
    return (
        <View>
            <Text>Welcome to the story</Text>
            <Button title='Go to Home'
            onPress={(e)=>{
                navigation.navigate('Home')
            }}/>
        </View>
    )
} 
export default Story;