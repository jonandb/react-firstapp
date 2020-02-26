<script src="http://localhost:8097"></script>
import React from 'react';
import { StyleSheet, View,Alert,Text, TouchableOpacity } from 'react-native';


export class Menu extends React.Component{
    onPress=()=>{
        Alert.alert("you tapped meeen");
    }
    render(){
        return(
        <View style={styles.container}>
        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                <Text style={styles.buttonText}>LESSONS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyles}onPress={this.onPress}>
                <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
            </View>   
            <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonStyles}onPress={this.onPress}>
                <Text style={styles.buttonText}>BLOG</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ContactRT')}>
                <Text style={styles.buttonText}>CONTACT</Text>
            </TouchableOpacity>
            </View>   
            <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonStyles}onPress={this.onPress}>
                <Text style={styles.buttonText}>QUIZ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyles}onPress={this.onPress}>
                <Text style={styles.buttonText}>ABOUT</Text>
            </TouchableOpacity>
            </View>   
        </View>
    )
}
}
const styles=StyleSheet.create({
container:{
flex:6,
backgroundColor:'#35605a',
flex:6
},
buttonRow:{
  flex:2,
  flexDirection:"row",
  alignItems:'center',
  borderColor:'#ffffff',
  borderBottomWidth:1
},
buttonStyles:{
    backgroundColor:'#35605a',
height:'50%',
width:'50%',
justifyContent:'center',
alignItems:'center'
},
buttonText: {
fontSize:18,
color:'#ffffff'
}
})