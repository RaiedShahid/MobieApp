import * as React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
export default class About extends React.Component {
    render() {
        return(
            <View>
                <View  style={{margin:20,alignItems:'center'}}>
                    <Text style={{padding:10,fontSize:30,color:'green'}}>Introduction</Text>
                    <Text style={{textAlign:'justify',fontSize:15}}>
                    Whenever someone finds a lost person in our country like a 
                    kid or someone else, people mostly take the person to a nearby 
                    Mosque where they make an announcement of finding a lost person 
                    so that someone who might know the person can come and take him. 
                    But if the person does not belong to the same area then this method 
                    is not very efficient. Thus we are providing a platform to resolve this 
                    situation and to make the process of finding missing people a little more 
                    efficient. To post an ad you have to fill in all of the credentials, 
                    for example when and where it was lost, if it is a person then enter 
                    his name, enter your name (user posting the ad) and the location where 
                    to return the person if found. Just like Lost, same categories are for 
                    Found that you will add while posting the ad. Your profile page will be 
                    maintained accordingly in which you will be able to filter the ads on the 
                    basis of its name and gender it it’s a person, or type and location if it’s a thing. 
                    The person who founds the missing person will fill the form and most of its
                    credentials like his name, CNIC, location where he found it and the description 
                    of the thing, if it is a person then he has to enter the name of the lost person, 
                    his age, his gender and the location from where you can retrieve him. Thus the basic
                    reason of our application is to make things easy for the people and to make something 
                    valuable for the society.

                    </Text>
                </View>
                <View 
                style={{backgroundColor:'red', 
                height:50, 
                marginTop:20,
                marginLeft:20,
                marginRight:20,
                borderTopLeftRadius:7,
                borderTopRightRadius:7,
                alignItems:'center'}}>
                <Text style={{padding:10,fontSize:30,color:'white'}}>Lost</Text>

                </View>
                <View 
                style={{borderWidth:2, 
                    marginLeft:20,
                    marginRight:20,
                    borderColor:'red'}}>
                    <Text style={{padding:20,fontSize:15,textAlign:'justify'}}>
                    If you have Lost someone then you can go 
                    to post add and select Lost and then enter 
                    the required info about the person to post 
                    your add.
                    </Text>
                </View>

                <View 
                style={{backgroundColor:'green', 
                height:50, 
                marginTop:20,
                marginLeft:20,
                marginRight:20,
                borderTopLeftRadius:7,
                borderTopRightRadius:7,
                alignItems:'center'}}>
                <Text style={{padding:10,fontSize:30,color:'white'}}>Found</Text>

                </View>
                <View 
                style={{borderWidth:2, 
                    marginLeft:20,
                    marginRight:20,
                    borderColor:'green'}}>
                    <Text style={{padding:20,fontSize:15,textAlign:'justify'}}>
                    If you have found someone then you can go to 
                    post add and select found and then enter the 
                    required info about the person to post your add.
                    </Text>
                </View>
                
                
                

            </View>
        );
    }
}
