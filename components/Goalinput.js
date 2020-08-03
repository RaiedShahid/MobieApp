import React , {useState} from 'react';
import {View, TextInput, StyleSheet,Button,Modal} from 'react-native';
const GoalInput = props =>{
    const [enterGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText);
      };
    const addGoalHandler = ()=>{
      props.onAddGoal(enterGoal);
      setEnteredGoal('');
    }
    
    
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput placeholder="input" 
                style={styles.inputText}
                onChangeText={goalInputHandler}
                value={enterGoal}
            />
           <View style={styles.Button}>
              <View style={{width:'40%'}}><Button title="CANCEL" color="red" onPress={props.onCancel}/></View>
              <View style={{width:'40%'}}>
                <Button title="ADD"
                /* onPress={props.onAddGoal.bind(this, enterGoal) }*/ 
                onPress={addGoalHandler}
                />
              </View>
              
           </View>
            
      </View>

      </Modal>
        
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        //flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        flex:1
      },
      inputText:{
        width:"80%" , 
        borderColor:"black", 
        borderWidth:1 ,
        padding:10,
        marginBottom:20,
        marginLeft:35

      },
      Button:{
        flexDirection:"row",
        width:'40%',
        marginLeft:'30%',
        justifyContent:"space-around",


      }
     


});
export default GoalInput;