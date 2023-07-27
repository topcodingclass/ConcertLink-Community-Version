import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getDocs, query, collection } from 'firebase/firestore'
import { db } from '../firebase'

const CommunityManagerHomeScreen = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    console.log(events)
  }, [events])

  const fetchData = async() => {
    let eventsFromDB = [];
    const querySnapshot = await getDocs(query(collection(db, "events")))
    querySnapshot.forEach((doc) => {
      eventsFromDB.push({...doc.data(), id:doc.id})
    })
    setEvents(eventsFromDB)
  }

  const renderItem = ({item}) => (
    <View>
      <Text>{item.dateTime.toDate().toDateString()}</Text>
    </View>
  )

  return (
    <View>
      <Text>Musical Compass</Text>
      <Text>Upcoming Events</Text>
      <FlatList data = {events.filter((item) => item.status == "accepted")} renderItem = {renderItem} />
      <Text>Unconfirmed Events</Text>
      <FlatList data = {events.filter((item) => item.status == "requested")} renderItem = {renderItem}/>
      <Button title = "Edit Profile" />
      <Button title = "Set Event" />
      <Button title = "Manage Users" />
    </View>
  )
}

export default CommunityManagerHomeScreen

const styles = StyleSheet.create({})
