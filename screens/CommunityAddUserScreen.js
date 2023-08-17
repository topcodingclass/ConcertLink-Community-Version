import { StyleSheet,  View, ImageBackground } from 'react-native'
import React, { useState, useEffect } from "react";
import {  addDoc, collection, doc } from "firebase/firestore";
import { db } from '../firebase';
import { Button, TextInput, Card, IconButton } from 'react-native-paper';

const CommunityAddUserScreen = ({route, navigation}) => {
    const user = route.params
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    
    useEffect(() => {
      console.log("*********" , user)
    },[])

  const AddUser = async ()=>{
    try {
      const docRef = collection(db, "communities", "Zs6zfsZ2ApDPW8Vv6UoZ", "users");
      addDoc(docRef,{
        name: name,
        email: email,
        phone: phone,
        birthday: birthday
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  return (
    
    <Card>
        
      <TextInput
        placeholder = "Enter your user's name"
        label="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Enter your user's email"
        label="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter your user's phone number"
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        
      />

      <TextInput
        placeholder="Enter your user's Birthday"
        label="Birthday"
        value={birthday}
        onChangeText={setBirthday}
        
      />

      <Card.Actions>
        
      <Button 
      mode="elevated"
      buttonColor = "lavender"
      onPress={AddUser}
      >Confirm</Button>

      </Card.Actions>

    </Card>
    
  )
}

export default CommunityAddUserScreen

const styles = StyleSheet.create({})
