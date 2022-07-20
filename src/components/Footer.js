import { View, Text, Image } from "react-native"
import React from "react"
import styles from "../container/styles/sharedStyles"

export const Footer= (props)=>{
    return (
        <View style={styles.footerContainer}>
            <Image style={styles.footerImage} source={require('../images/G.png')} />
            <Text style={styles.sectionDescription}>
                {' '}
                All rights reserved by Globomantics Tech Conference 2020.
            </Text>    
        </View>
    )
} 