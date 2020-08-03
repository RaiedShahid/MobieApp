import React from "react";
import { View, Text, StyleSheet } from 'react-native';
export default function HomeTitle() {
    return (
        
            <View style={styles.head}>

                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}> Lost & Found</Text>

            </View>
       

    )
}
const styles = StyleSheet.create({
    head: {
        width: "200%",
        height: "100%",
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'red'
    }
})