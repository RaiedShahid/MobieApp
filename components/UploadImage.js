import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Button, Text, Image } from 'react-native';
//import LostForm from './LostForm';
//import FoundForm from './FoundForm';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
//import ImagePicker from 'react-native-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
const options={
    title: 'my pic app',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',
    }
export default class UploadImage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            avatarSource: null,
            pic:null
        }
    }
    myfun=()=>{
        //alert('clicked');
      
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
      
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('Image Picker Error: ', response.error);
          }
      
          else {
            let source = { uri: response.uri };
      
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      
            this.setState({
              avatarSource: source,
              pic:response.data
            });
          }
        });
      }
  
    // state = {
    //     image: '',
    //   };

    //   camera = async () => {
    //     try {
    //       let result = await ImagePicker.launchCameraAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: false,
    //         aspect: [4, 3],
    //         quality: 1,
    //       });
    //       if (!result.cancelled) {
    //         this.setState({ image: result.uri });
    //       }
    
    //       console.log(result);
    //     } catch (E) {
    //       console.log(E);
    //     }
    //   };
    //   _pickImage = async () => {
    //     try {
    //       let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //       });
    //       if (!result.cancelled) {
    //         this.setState({ image: result.uri });
    //       }
    
    //       console.log(result);
    //     } catch (E) {
    //       console.log(E);
    //     }
    //   };


    render() {
        return (
            <View style={styles.inputContainer}>

                <Image source={this.state.avatarSource} 
                style={{width:'100%',height:300,margin:10}}/>

                <TouchableOpacity style={{backgroundColor:'green',margin:10,padding:10}}
                onPress={this.myfun}>
                    <Text style={{color:'white'}}>Add Image</Text>
                </TouchableOpacity>
              
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
        
        alignItems: "center",
        flex: 1,  
        width: '80%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"

    },

    text1: {
        fontWeight: 'bold',
        fontSize: 25,
        color:'white',
        

    },
    text2: {
        fontWeight: 'bold',
        fontSize: 25,
        color:'white'

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
