import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Pages
import TodoModalScreen from './screens/TodoModalScreen';
import Beranda from './pages/Beranda';

const Stack = createNativeStackNavigator();
function Main() {
    return (
        <Stack.Navigator initialRouteName="beranda">
            <Stack.Group>
                <Stack.Screen name="beranda" component={Beranda} options={{ headerShown: false }} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal', animation: 'slide_from_bottom' }}>
                <Stack.Screen name="todoModal" component={TodoModalScreen} options={{ title: 'Todo', headerShown: false }} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default Main;
