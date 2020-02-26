<script src="http://localhost:8097"></script>
import React from 'react';
import {Home} from'./app/views/home';
import {Contact}from './app/views/Contact';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const  MyRoutes =createStackNavigator({
  HomeRT:{
    screen:Home
  },
  ContactRT:{
    screen:Contact
  },
},
{
  InitialRouteName:'Home'
}
)
const MyMobileApp = createAppContainer(MyRoutes);
export default function App() {
  return (
    <MyMobileApp/>
  );
}


