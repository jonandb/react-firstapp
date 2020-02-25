import * as React from 'react';
import { TextInput,StyleSheet, Text, View , Button, FlatList,ScrollView} from 'react-native';

const GoalItem= props=>{
    return(
    <View   style={styles.listitems}>
        <Text>{props.title}</Text>
      </View>
    );
}
export default GoalItem;
const styles=StyleSheet.create({
    listitems:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1,
        marginVertical:10,
      }
})