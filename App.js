import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import  Navigation from './components/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native-paper';



const AppStack = createNativeStackNavigator();

const App = () =>{
  const [isFirstLaunch, setFirstLaunch] = React.useState(true);
  const [isLoggedIn,setIsLoggedIn] = React.uselists[false];
  const [homeTodayScore, setHomeTodayScore] = React.useState(0);

   if (isFirstLaunch == true){
return(
  <OnboardingScreen setFirstLaunch={setFirstLaunch}/>
 
);
  }else if(isLoggedIn){
    return <Navigation/>
  } else{
    return(
      <View>
        <TextInput style={style.input}
        PlaceholderTextColor='#4251f5'
        placeholder='Phone Number'>
        </TextInput>
        <Button
        title='Send'
          style={style.button}
          onPress={()=>{
            console.log('Button was pressed!')
          }}
        />
      </View>
    )
  }
}
 export default App;

const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifycontent: 'center'
  },
  input: {
    height: 40,
    marginsTop:100,
    margin: 12,
    borderwidth: 1,
    padding: 10,
  },
  margin:{
    marginTop:100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10
  }
})