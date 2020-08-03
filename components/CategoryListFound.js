import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Button, Text } from 'react-native';
//import LostForm from './LostForm';
//import FoundForm from './FoundForm';

import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default class CategoryListFound extends React.Component {


    render() {
        return (
            <View style={styles.inputContainer}>
                <View style={{ width: '90%' }}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.customButton} 
                    onPress={() => { this.props.navigation.navigate('FoundForm') }}>
                        <View style={styles.Button}>
                            <View style={{marginRight:25}}>
                                <Fontisto name="person" size={40} color="white" />
                            </View>
                            <View><Text style={styles.text}> Person </Text></View>
                            
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.customButton}
                        onPress={() => { this.props.navigation.navigate('VehicleFoundForm') }}>
                        <View style={styles.Button}>
                            <View><FontAwesome5 name="car-side" size={40} color="white" /></View>
                            <View style={{marginLeft:10 }}><Text style={styles.text}>   Vehicle</Text></View>
                            
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.customButton}
                        onPress={() => { this.props.navigation.navigate('DeviceFoundForm') }}>
                        <View style={styles.Button}>
                            <View><Octicons name="device-mobile" size={40} color="white" /></View>
                            <View style={{marginLeft:10 }}><Text style={styles.text}>   Device</Text></View>
                            
                        </View>

                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    customButton: {
        height: '20%',
        backgroundColor: 'green',
        marginBottom: 20,
        borderRadius: 20,


    },

    inputContainer: {

        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },

    Button: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        flexDirection: "row",
        alignContent: "center",
        padding: 20

    },

    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'

    },
    formBox: {
        width: '90%',
        backgroundColor: 'ghostwhite',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 10,


    },
})
