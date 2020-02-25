import * as React from 'react';
import { TextInput,StyleSheet, Text, View , Button, FlatList,ScrollView} from 'react-native';

const GoalInput = props=>{
    const [enteredGoal,setEnteredGoal]=React.useState('');
    const  goalInputHandler=(enteredText)=>{
        setEnteredGoal(enteredText);
      };      
    return(
    <View style={styles.inputView}>
        <TextInput style={styles.TextInput} value={enteredGoal} placeholder="goal" onChangeText={goalInputHandler}/>
        <Button onPress={props.onAddGoal.bind(this, enteredGoal)}  style={styles.Button} title="ADD"/>
    </View>
    );
}

export default GoalInput;

const styles=StyleSheet.create({
    inputView:{
        flexDirection:'row', 
        alignContent:'center',
        justifyContent:'space-between'
      },
      TextInput:{
        width:'80%',
        padding:10,
        borderBottomColor:'black',
        borderWidth:1
      },
      Button:{
      backgroundColor:'green'
      },
})