import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Button, Text } from 'react-native';
//import LostForm from './LostForm';
//import FoundForm from './FoundForm';
import { Entypo } from '@expo/vector-icons';

export default class SelectForm extends React.Component {


    render() {
        return (
            <View style={styles.inputContainer}>
                <View style={{ width: '90%' }}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.customButton} 
                    onPress={() => { this.props.navigation.navigate('CategoryListLost') }}>
                        <View style={styles.Button}>
                            <View style={{marginRight:25}}><Entypo name="magnifying-glass" size={30} color="white" /></View>
                            <View><Text style={styles.text}> Lost Form</Text></View>
                            
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.customButton}
                        onPress={() => { this.props.navigation.navigate('CategoryListFound') }}>
                        <View style={styles.Button}>
                            <View><Entypo name="dropbox" size={30} color="white" /></View>
                            <View style={{marginLeft:10 }}><Text style={styles.text}>   Found Form</Text></View>
                            
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
        padding: 15

    },

    text: {
        fontWeight: 'bold',
        fontSize: 20,
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
