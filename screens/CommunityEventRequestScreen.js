import { StyleSheet, Text, View, FlatList } from 'react-native'
import { getDocs, collection, query, where, collectionGroup } from 'firebase/firestore';
import React, { useState, useEffect } from "react";
import { db } from '../firebase';

const CommunityEventRequestScreen = () => {
    const [availabilities, setAvailabilities] = useState("");


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
              allAvailabilities.push({groupName: volunteerGroupName, ...availabilityData});
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

    const renderItem = ({ item }) => (
        
        <View>
          <Text>{item.groupName}</Text>
          <Text>{item.dateTime.toDate().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</Text>
          

      </View>
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
