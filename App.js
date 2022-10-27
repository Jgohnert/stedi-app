import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage, TextInput, Button } from 'react-native';
import Navigation from './components/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';




const AppStack = createNativeStackNavigator();
const loggedInStates={
  NOT_LOGGED_IN: "NOT_LOGGED_IN",
  LOGGED_IN: "LOGGED_IN",
  CODE_SENT: "CODE_SENT"
}

const App = () =>{
  const [isFirstLaunch, setFirstLaunch] = React.useState(true);
  const [loggedInState, setIsLoggedIn] = React.useState(loggedInStates.NOT_LOGGED_IN);
  const [homeTodayScore, setHomeTodayScore] = React.useState(0);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [oneTimePassword, setOneTimePassword] = React.useState(null);

   if (isFirstLaunch == true){
return(
  <OnboardingScreen setFirstLaunch={setFirstLaunch}/>
);
} else if(loggedInSates == loggedInStates.LOGGED_IN){
  return <Navigation/>

} else if (loggedInState == loggedInStates.NOT_LOGGED_IN) {
  return (
    <View>
      <TextInput 
        placeholder='Cell Phone'>   
        style={styles.input}  
        placeholderTextColor='#4251f5' 
        value={phoneNumber}
        onChangeText={setPhoneNumber}   
      </TextInput>
      <Button
      title='Send'
      style={styles.button}
      onPress={async()=>{
          console.log('Button was pressed!')
          await fetch('http://dev.stedi.me/twofactorlogin/'+phoneNumber,
          {
            method:'POST',
            headers:{
              'content-type':'application/text'
            }
          })
          setLoggedInState(loggedInStates.CODE_SENT)
        }}
      />
    </View>
  )}
  else if (loggedInState == loggedInStates.CODE_SENT) {
    return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor='#4251f5'
        placeholder = 'One Time Password'
        value = {oneTimePassword}
        keyboardType = "numeric"
      ></TextInput>
      <Button
      title='Login'
      style={styles.button}
      onPress={async()=>{
          console.log('Login Button was pressed!')
          await fetch
          ('http://dev.stedi.me/twofactorlogin',
          {
            method:'POST',
            headers:{
              'content-type':'application/text'
            }
            body: 
          })
          setLoggedInState(loggedInStates.CODE_SENT)
        }}
      />
    </View>
  )}
}
  export default App;

 const styles = StyleSheet.create({
  container:{
      flex:1, 
      alignItems:'center',
      justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin:{
    marginTop:100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }    
})