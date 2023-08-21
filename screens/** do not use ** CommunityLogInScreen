import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground  } from "react-native";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, TextInput, Card, IconButton } from 'react-native-paper';

const CommunityLogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true); // Track password visibility

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry); // Toggle the value
  };
  

  //Login function
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate("ManageCommunity")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  return (
    
    <Card> 
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={secureTextEntry} // Use the state to determine secureTextEntry
        right={
          <TextInput.Icon
            icon={secureTextEntry ? "eye-off" : "eye"} // Change the icon based on secureTextEntry
            onPress={togglePasswordVisibility} // Toggle the password visibility
          />
        }
      />

      <Card.Actions>
        <Button 
        mode="elevated"
        buttonColor = "lavender" 
        onPress={login} 
        >Login</Button>

        <Button 
        mode="elevated"
        buttonColor = "lavender" 
        onPress={() => navigation.navigate("SignUpUser")}
        >Create Account</Button>
      </Card.Actions>
    </Card>
    
  )
}

export default CommunityLogInScreen

const styles = StyleSheet.create({})
