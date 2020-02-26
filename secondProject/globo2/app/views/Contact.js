<script src="http://localhost:8097"></script>
import React from 'react';
import { StyleSheet, View,Text,Platform,Image , TouchableHighlight, Alert} from 'react-native';
import{Header} from '../sections/Header';
import { createStackNavigator } from 'react-navigation-stack';
import { TextInput } from 'react-native-gesture-handler';
export class Contact extends React.Component{
    static navigationOptions={
        header: null
    };
    constructor(props)
    {
        super(props);
        this.state={
            msg:'',
            name:'',
            email:''
        }
    }
    
    clearFields=()=> this.setState({name:'',msg:'',email:''});

    sendMessage=()=>{
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    }

    render(){
        const {navigate}=this.props.navigation;

        return(
            <View style={styles.container} >
            <Header  navigate={navigate}  message='press to login'/>
            <Text style={styles.heading}>Contact Us</Text>
           <TextInput
           placeholder={"Enter Name"}
           style={styles.inputs}
           onChangeText={(text)=>this.setState({name:text})}
           value={this.state.name}
           />
            <TextInput
             label='message'
             placeholder={"Enter Message"}
           style={styles.multiline}
           onChangeText={(text)=>this.setState({msg:text})}
           value={this.state.msg}
           multiline={true}
           numberOfLines={4}
           />
            <TextInput
              placeholder={"Enter email"}
           style={styles.inputs}
           onChangeText={(text)=>this.setState({email:text})}
           value={this.state.email}
           />
           <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
               <Text style={styles.buttons} >
                   Send Message
               </Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
               <Text  style={styles.buttons} >
                   Reset Form
               </Text>
           </TouchableHighlight>
            </View>
        )
    }

}
const styles=StyleSheet.create({
    container:{
    flex:1,
    alignItems:"center",
    paddingBottom:'45%'
    },
    heading:{
        fontSize:16,
        flex:1
    },
    inputs:{
        flex:1,
        width:'80%',
        padding: 10,
        borderBottomWidth:1,
        borderBottomColor:'#35605a'
    },
    multiline:{
        flex:2,
        width:'80%',
        padding: 10,
        marginTop:10,
        
        borderBottomWidth:1.3,
        borderColor:"#35605a"
    },
    buttons:{
        padding:10,
        marginTop:15,
        fontSize:16,
        backgroundColor:"#35605a",
        borderRadius:6
        ,textAlignVertical:"center",
        textAlign:"center",
        color:'white'
    }
})