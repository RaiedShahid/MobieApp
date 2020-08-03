import React from 'react';

import { View, Picker, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, TextInput } from 'react-native';

export default class Gender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ""
        }

    }
    render() {
        return (
                <View style={styles.container}>
                    <View>
                        
                        <Picker
                            selectedValue={this.state.selectedValue}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({ selectedValue: itemValue })}
                        >
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Prefer Not to Say" value="Prefer Not to Say" />
                            
                        </Picker>
                    </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginBottom: 10
    },
    input: {
        width:"117%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        

    },
    picker:{
        height: 50, 
        width: 150
    },
    text1:{
        fontWeight: 'bold',
        fontSize:15,
        alignItems:'center',
    },
  
});
