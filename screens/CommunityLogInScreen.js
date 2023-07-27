import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground  } from "react-native";
import { Button, Input } from "@rneui/themed";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const CommunityLogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

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
    
    <View style={{marginTop:230}}> 
      <Input
        placeholder="Enter your email"
        leftIcon={{ type: "material", name: "email" }}
        styles={styles}
        label="Email"
        onChangeText={setEmail}
      />

      <Input
        placeholder="Enter your password"
        leftIcon={{ type: "material", name: "lock" }}
        style={styles}
        label="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={{alignItems:'center'}}>
        <Button 
        title="Login" 
        buttonStyle={{ backgroundColor: 'rgba(39, 213, 245, 0.8)', borderRadius: 15 }} 
        titleStyle={{ fontWeight: 'bold', fontSize: 25 }} 
        icon={{name: 'sign-in',type: 'font-awesome',size: 20,color: 'white',}}
        onPress={login} 
        style={{ padding: 10, marginVertical: 5, width: 370 }} />

        <Button 
        title="Create Account" 
        buttonStyle={{backgroundColor: 'rgba(39, 213, 245, 0.8)', borderRadius: 15 }} 
        titleStyle={{ fontWeight: 'bold', fontSize: 25 }} 
        icon={{name: 'user-plus',type: 'font-awesome',size: 20,color: 'white',}}
        onPress={() => navigation.navigate("User Register")} 
        style={{padding: 10, width: 370 }} />
      </View>
    </View>
    
  )
}

export default CommunityLogInScreen

const styles = StyleSheet.create({})
