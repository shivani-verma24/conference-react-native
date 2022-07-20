import { View, Text, Image } from "react-native"
import React from "react"
import styles from "../container/styles/sharedStyles"

export const Header= (props)=>{
    return (
        <View style={styles.sectionContainer}>
            <Image style={styles.headerImage} source={props.image} />
            <Text style={props.style}>{props.heading}</Text>    
        </View>
    )
} 