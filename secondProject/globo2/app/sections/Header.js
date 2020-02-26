<script src="http://localhost:8097"></script>
import React from 'react';
import { StyleSheet, View,Text,Platform,Image,TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export class Header extends React.Component{
    constructor(props){
        //provide access to parent class
        super(props);
        this.state={isLoggedIn:false};
    }
    toggleUser=()=>{
        this.setState(previousState=>{
            return{isLoggedIn:!previousState.isLoggedIn}
        });
    }
    render(){
        let display= this.state.isLoggedIn?'sample user':this.props.message;
        return(
            <View style={styles.headStyle} >               
                <TouchableHighlight style={styles.logoImage}  onPress={()=>this.props.navigate('HomeRT')}>
                <Image                 
               style={styles.logoImage}
                source={require('./img/logo.png')}/>            
                </TouchableHighlight>
            <Text style={styles.headerText}
              onPress={this.toggleUser}>
                  {display}</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    headerText:{
        textAlign:'right',
        color:'#ffffff',
        fontSize:20,
        flex:2
    },
    headStyle:{
        paddingTop:30,
        paddingRight:10,
        backgroundColor:Platform.OS==='android'?'#35605a': 'blue',
        flex:1,
        flexDirection:"row",
        borderBottomWidth:2,
        borderBottomColor:'black'
    },
    logoImage:{
        height:undefined,
        width:undefined,
        flex:1

    },

})