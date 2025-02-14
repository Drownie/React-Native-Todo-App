import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Pages
import Home from './pages/Home';
import TodoModalScreen from './screens/TodoModalScreen';
import Beranda from './pages/Beranda';

const Stack = createNativeStackNavigator();
function Main() {
    return (
        <Stack.Navigator initialRouteName="beranda">
            <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="beranda" component={Beranda} options={{ headerShown: false }} />
            <Stack.Screen name="todoModal" component={TodoModalScreen} options={{ presentation: 'card', animation: 'slide_from_bottom', gestureDirection: 'vertical', title: 'Todo' }} />
        </Stack.Navigator>
    );
}

export default Main;
