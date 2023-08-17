import { StyleSheet,  View, ImageBackground } from 'react-native'
import React, { useState, useEffect } from "react";
import {  addDoc, collection } from "firebase/firestore";
import { db } from '../firebase';
import { Button, TextInput, Card, IconButton } from 'react-native-paper';

const CommunityRegisterScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState("");
    const [zip, setZip] = useState("");
    const [size, setSize] = useState("");
    const [description, setDescription] = useState("");
    
    
    
    const Register = async ()=>{
      try {
        const docRef = await addDoc(collection(db, "communities"), {
          name: name,
          email: email,
          description: description,
          address: address,
          city: city,
          state: state,
          phone: phone,
          zip: zip,
          size: size
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    
  return (
    
    
    <Card>
        
      <TextInput
        placeholder="Enter your group's name"
        label="Name"
        value={name}
        onChangeText={setName}
      />

       <TextInput
        placeholder="Enter your group's email"
        label="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter your group's address"
        label="Address"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        placeholder="Enter your group's city"
        label="City"
        value={city}
        onChangeText={setCity}
        
      />

      <TextInput
        placeholder="Enter your group's state"
        label="State"
        value={state}
        onChangeText={setState}
        
      />

        <TextInput
        placeholder="Enter your group's phone number"
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        
      />    

      <TextInput
        placeholder="Enter your zip code"
        label="Zip"
        value={zip}
        onChangeText={setZip}
       
      />

      <TextInput
      placeholder="Enter your group's size"
      label="Size"
      value={size}
      onChangeText={setSize}
        
      />

      <TextInput
      placeholder="Enter your group's description"
      label="Description"
      value={description}
      onChangeText={setDescription}
        
      />


      <Card.Actions>
        <Button 
        mode="elevated"
        buttonColor = "lavender" 
        onPress={Register} 
        >Sign Up</Button>

        <Button 
        mode="elevated"
        buttonColor = "lavender" 
        onPress={()=>navigation.navigate('User Login')}
        >Move to Login</Button>
      </Card.Actions>

    </Card>
    
    
  )
}

export default CommunityRegisterScreen

const styles = StyleSheet.create({})
