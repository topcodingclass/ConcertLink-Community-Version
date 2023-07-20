import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from './screens/LoginScreen';
import ResRegisterScreen from './screens/ResRegisterScreen';
import ResProfileScreen from './screens/ResProfileScreen';
import CommunityAddUserScreen from './screens/CommunityAddUserScreen';
import CommunityRegisterScreen from './screens/CommunityRegisterScreen';
import CommunityProfileScreen from './screens/CommunityProfileScreen';
import CommunityEventRequestScreen from './screens/CommunityEventRequestScreen' //need to be made
import CommunityManageUsersScreen from './screens/CommunityManageUsersScreen'
import CommunityManagerHomeScreen from './screens/CommunityManagerHomeScreen'    //need to be made
import CommunityEventsScreen from './screens/CommunityEventsScreen'
import ResFeedbackScreen from './screens/ResFeedbackScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Resident Profile" component={ResProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Volunteer Profile" component={VolProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const EventStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Community Events" component={CommunityEventsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Resident Feedback" component={ResFeedbackScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Volunteer Feedback" component={VolFeedbackScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Resident Register" component={ResRegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Volunteer Register" component={VolRegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Community Events" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Events') {
            iconName = 'calendar';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Events" component={EventStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({});
