<script src="http://localhost:8097"></script>
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';


export class Hero extends React.Component{
    render(){
        return(
            <Image
            style={styles.heroImage}
            source={require('./img/Prem_League_Wk1_GettyImages-1167069192.jpg')}
            />
        )
    }
}
const styles=StyleSheet.create({
heroImage:{
flex:8,
height:undefined,
width:undefined
    }
})