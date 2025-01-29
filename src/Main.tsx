import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Pages
import Home from './pages/Home';

const Stack = createNativeStackNavigator();
function Main() {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default Main;
