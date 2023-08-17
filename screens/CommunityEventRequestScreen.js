import { StyleSheet, View, FlatList } from 'react-native'
import { getDocs, collection, query, where, collectionGroup, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from "react";
import { Avatar, Card, IconButton, Button } from 'react-native-paper';
import { db } from '../firebase';

const CommunityEventRequestScreen = () => {
    const [availabilities, setAvailabilities] = useState("");

    const communityGroupID = "Zs6zfsZ2ApDPW8Vv6UoZ"

    const readAvailabilities = async () => {

        // Array to store all availabilities data
        const allAvailabilities = [];
        
      
        try {
          // Assuming "volunteerGroups" is the collection name for volunteer groups
          // await getDocs(collection(db, 'communities', "Zs6zfsZ2ApDPW8Vv6UoZ", "users"));
          const volunteerGroupsSnapshot = await getDocs(collection(db, 'volunteerGroups'));
          
          // Iterate through each volunteer group
          for (const groupDoc of volunteerGroupsSnapshot.docs) {
            const volunteerGroupId = groupDoc.id;
            const volunteerGroupName = groupDoc.data().name;
            console.log(volunteerGroupName)

            // Assuming "availabilities" is the collection name for availabilities
            const availabilitiesSnapshot = await getDocs(collection(db, 'volunteerGroups', volunteerGroupId, "availabilities"));
      // Iterate through each availability within the volunteer group
            availabilitiesSnapshot.forEach((availabilityDoc) => {
              const availabilityData = availabilityDoc.data();
              allAvailabilities.push({groupName: volunteerGroupName, groupID: volunteerGroupId, ...availabilityData});
            });
          }
          

          setAvailabilities(allAvailabilities);
          console.log( allAvailabilities );
        } catch (error) {
          console.error('Error retrieving availabilities:', error);
        }
    };

    
    useEffect(() => {
        readAvailabilities()
      },[])


    const requestEvent = async(item) => { 
      try {
        const docRef = collection(db, "events");
        addDoc(docRef,{
          communityID: communityGroupID,
          volunteerGroupID: item.groupID,
          dateTime: item.dateTime,
          status: "requested"
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
     }


    const renderItem = ({ item }) => (
        
      //   <View>
      //     <Text>{item.groupName}</Text>
      //     <Text>{item.dateTime.toDate().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</Text>
      //     <Button
      //       onPress = {()=>requestEvent(item)}
      //       title = "Request"
      //     />

      // </View>
      <Card>
        <Card.Title
      title={item.groupName}
      subtitle={item.dateTime.toDate().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
      left={(props) => <Avatar.Icon {...props} icon="folder" />}

      //To-Do : Show information for the music group when clicking the ...

      right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />} 
      />
      <Card.Actions>
        <Button 
        onPress = {()=>requestEvent(item)} 
        mode="elevated"
        buttonColor = "lavender" >Request</Button>
      </Card.Actions>
    </Card>
      );


  return (
    <View>
      <FlatList
      data={availabilities}
      renderItem={renderItem}
      />
    </View>
  )
}


export default CommunityEventRequestScreen

const styles = StyleSheet.create({})
