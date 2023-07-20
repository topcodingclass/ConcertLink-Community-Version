import { Text, StyleSheet,  View, FlatList, TextInput,ImageBackground, TouchableOpacity } from 'react-native'
import { Button, Input } from "@rneui/themed";
import React, { useState, useEffect } from "react";
import {  doc, getDocs, addDoc, collection, deleteDoc  } from "firebase/firestore";
import { db } from '../firebase';
import { Ionicons } from "@expo/vector-icons";

const CommunityManageUserScreen = ({ navigation }) => {
    const [users, setUsers] = useState("");

  useEffect(async()=> {
    const querySnapshot = await getDocs(collection(db, 'communities', "Zs6zfsZ2ApDPW8Vv6UoZ", "users"));
    const docsData = querySnapshot.docs.map((doc) => ({ id:doc.id, name: doc.data().name, email: doc.data().email, phone: doc.data().phone, birthday: doc.data().birthday }));
    setUsers(docsData);

  }, [])

  useEffect(() => {
    console.log("*********" , users)
    console.log("user: " + name + "\n")
  })

  const deleteItem = async (id) => {
    try {
      // Reference the document in the Firestore collection
      const userRef = doc(db, 'communities', "Zs6zfsZ2ApDPW8Vv6UoZ", "users", id);

      // Delete the document from Firestore
      await deleteDoc(userRef);

      // After successful deletion, update the state to reflect the changes
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  
 const renderItem = ({ item }) =>(
  <view>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('AddUser', {item})
      }>
    <Text> {item.name}</Text>
    <Text> {item.email}</Text>
    <Text> {item.phone}</Text>
    <Text> {item.birthday}</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => deleteItem(item.id)}>
      <Ionicons name="trash-outline" size={24} color="black" />
    </TouchableOpacity>

    
  </view>
 );

  return (

    <View>
      <Text style ={styles.title}>Edit Users</Text>

      <FlatList
      data={users}
      renderItem={renderItem}
      />
      
    </View>
  )
}

export default CommunityManageUserScreen

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 2,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  text1:{
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    justifyContent: 'center'
  }
})

