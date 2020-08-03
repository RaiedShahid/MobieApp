import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
const GoalItem = props =>{
    return (
      //delete through touch
      
      <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem} >
          <Text>{props.title}</Text>
        </View>

      </TouchableOpacity>

      //we can also use touchableHighlight
/*
      <TouchableHighlight  onPress={props.onDelete}>
        <View style={styles.listItem} on>
          <Text>{props.title}</Text>
        </View>

      </TouchableHighlight>
*/
// Or we can also use touchablenatve feedback but it only work in Android
/*
      <TouchableNativeFeedback  onPress={props.onDelete}>
        <View style={styles.listItem} on>
          <Text>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>


      //And TouchableWithoutFeedback it register the event but donot give any feedback

      <TouchableWithoutFeedback  onPress={props.onDelete}>
        <View style={styles.listItem} on>
          <Text>{props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
*/

        
    );
};
const styles = StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1
      }

});
export default GoalItem;