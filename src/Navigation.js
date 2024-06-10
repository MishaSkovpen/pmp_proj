import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddScheduleScreen from './screens/AddScheduleScreen';
import AllSchedulesScreen from './screens/AllSchedulesScreen';
import ScheduleScreen from './screens/ScheduleScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1c1c1e' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Головна" component={HomeScreen} />
        <Stack.Screen name="Додати Розклад" component={AddScheduleScreen} />
        <Stack.Screen name="Усі Розклади" component={AllSchedulesScreen} />
      </Stack.Navigator> */}
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1c1c1e' }, headerTintColor: '#fff' }}>
                <Stack.Screen name="Головна" component={HomeScreen} />
                <Stack.Screen name="Розклад" component={ScheduleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
